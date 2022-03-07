import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ChildWrapper,
  Container,
  FixedContainer,
  ProductContainer,
  SectionBorder,
} from './style';
// import BottomNav from 'components/ui/BottomNav';
import Cart from './icons/cart';
import Search from './icons/search';
import { ChevronLeft, NoBackpackSharp } from '@mui/icons-material';
import BottomFilter from './ui/BottomFilter';
import {
  CategoryItem,
  SectionCategory,
  SlideWrapper,
} from './ui/Product/style';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/registerActions';
import SimpleSkeleton from 'components/loading/SimpleSkeleton';
import { useRouter } from 'next/router';
import Badge from '@mui/material/Badge';
import Cookie from 'js-cookie';

//TODO: dynamic tabs

const ListCategoryProduct = ({ slug = '' }) => {
  const productCategoryState = useSelector((state) => state.productCategory);
  const dispatch = useDispatch();
  const [isActive, setActive] = React.useState({});
  const router = useRouter();

  useEffect(() => {
    dispatch(ACTIONS.productCategories.getListProductCategories());
  }, []);
  if (productCategoryState.loading !== true) {
    const allCategory = productCategoryState.listProductCategories.data.items;

    const filterBySlug = allCategory.filter((category) => {
      const filteredUrlKey = category.custom_attributes.findIndex(function (
        datum
      ) {
        return datum.attribute_code === 'url_key';
      });
      return category.custom_attributes[filteredUrlKey].value == slug;
    });

    const filterById = allCategory.filter((category) => {
      return category.parent_id == filterBySlug[0].id;
    });

    const handleClick = (data) => {
      setActive(data);
      dispatch(ACTIONS.productbyCategory.getListProductBySubCategory(data.id));
      router.push({
        pathname: `/category/${slug}`,
        query: { sub: encodeURI(data.id) },
      });
    };

    const idActive = router.query.sub;

    return (
      <SectionCategory>
        <SlideWrapper className="scrollX">
          {filterById.length > 0 ? (
            filterById.map((_, index) => (
              <CategoryItem
                key={index}
                onClick={() => handleClick({ ..._, index: index })}
                isActive={_.id == idActive}
              >
                {_.name}
              </CategoryItem>
            ))
          ) : (
            <span>&nbsp;</span>
          )}
        </SlideWrapper>
      </SectionCategory>
    );
  } else {
    return (
      <SectionCategory>
        <SimpleSkeleton height={20} onLoad={true}>
          <div />
        </SimpleSkeleton>
      </SectionCategory>
    );
  }
};

const getDataCategory = (slug) => {
  const productCategoryState = useSelector((state) => state.productCategory);
  if (productCategoryState.loading !== true) {
    const allCategory = productCategoryState.listProductCategories.data.items;

    const filterBySlug = allCategory.filter((category) => {
      const filteredUrlKey = category.custom_attributes.findIndex(function (
        datum
      ) {
        return datum.attribute_code === 'url_key';
      });
      return category.custom_attributes[filteredUrlKey].value == slug;
    });

    return filterBySlug[0];
  }
};

const BadgeCart = () => {
  const infoState = useSelector((state) => state.info);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.info.infoDetail());
    }
  }, []);

  return (
    <Badge badgeContent={infoState.info.items_qty} color="primary">
      <Cart />
    </Badge>
  );
};

export const ProductLayout = ({
  type = 'list',
  // title = 'Rekomendasi Produk',
  filterBar,
  filterFooter,
  slug,
  children,
  callback,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Container>
      <FixedContainer>
        <ProductContainer>
          <div
            onClick={async () => {
              const callbackResetCat = await dispatch(
                ACTIONS.productCategories.getListProductCategories()
              );

              await dispatch(
                ACTIONS.productbyCategory.resetProductByCategory(
                  callbackResetCat
                )
              );

              if (callback) {
                callback();
              } else {
                router.back();
              }
            }}
            className="chevronWrapper"
          >
            <ChevronLeft />
          </div>
          <div className="headWrapper">
            <p>{getDataCategory(slug)?.name}</p>
          </div>
          <div className="icons">
            {type === 'list' ? (
              <Search onClick={() => router.push('/search')} />
            ) : (
              <div onClick={() => router.push('/shopping/checkout')}>
                <BadgeCart />
              </div>
            )}
          </div>
        </ProductContainer>

        {filterBar ? <ListCategoryProduct slug={slug} /> : null}
      </FixedContainer>
      <ChildWrapper filter={filterBar}>
        {children}
        <SectionBorder />
      </ChildWrapper>
      {filterFooter ? <BottomFilter /> : null}
    </Container>
  );
};

ProductLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  type: PropTypes.string,
  filterBar: PropTypes.bool,
  filterFooter: PropTypes.bool,
  slug: PropTypes.string,
  callback: PropTypes.func,
};

ListCategoryProduct.propTypes = {
  slug: PropTypes.string,
};

export default ProductLayout;
