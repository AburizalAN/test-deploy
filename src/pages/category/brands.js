import React, { useEffect, useState, useRef } from 'react';
import ProductLayout from 'components/product-layout';
import { SectionProduct } from 'components/ui/Product/style';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/registerActions';
import SimpleSkeleton from 'components/loading/SimpleSkeleton';

import Listproductbycategory from 'components/ui/Product/card/listproductbycategory';

const Cashback = '/assets/img/cashback.png';
const FailedA = '/assets/img/load-failed/failed1.jpg';

const ListProductbyCategory = () => {
  const product = useSelector((state) => state.productbyCategory);

  if (product.loading !== true) {
    return <Listproductbycategory product={product} />;
  } else {
    return (
      <SectionProduct>
        <SimpleSkeleton height={760} onLoad={true}>
          <div />
        </SimpleSkeleton>
      </SectionProduct>
    );
  }
};

const ProductList = () => {
  const router = useRouter();
  // const [isBottom, setIsBottom] = useState(false);
  const { slug } = router.query;
  const dispatch = useDispatch();
  const productCategoryState = useSelector((state) => state.productCategory);
  const product = useSelector((state) => state.productbyCategory);

  const triggerDataProduct = (slug) => {
    if (productCategoryState.loading !== true) {
      const level2 =
        productCategoryState.listProductCategories.data.items.filter(function (
          category
        ) {
          return category.level === 2;
        });
      const filterBySlug = level2.filter((category) => {
        const filteredUrlKey = category.custom_attributes.findIndex(function (
          datum
        ) {
          return datum.attribute_code === 'url_key';
        });
        return category.custom_attributes[filteredUrlKey].value == slug;
      });

      const idCategoryPage = filterBySlug[0].id;

      if (router.query.sub) {
        dispatch(
          ACTIONS.productbyCategory.getListProductBySubCategory(
            router.query.sub
          )
        );
      } else {
        dispatch(
          ACTIONS.productbyCategory.getListProductByCategory(idCategoryPage)
        );
      }

      return filterBySlug[0];
    }
  };

  useEffect(() => {
    triggerDataProduct(slug);
  }, [productCategoryState.loading]);

  return (
    <ProductLayout
      slug={slug}
      filterBar
      // filterFooter
      callback={() => window.location.assign('/shopping')}
    >
      <ListProductbyCategory />

      {/* <SectionPromo>
        <img src={Cashback} alt="cashback" />
        <img src={Cashback} alt="cashback" />
      </SectionPromo>

      <SectionProductChoice>
        <TitleSection title={'Produk Pilihan'} />

        <SlideWrapper className="sliderManual">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </SlideWrapper>
      </SectionProductChoice>

      <SectionProductChoice>
        <TitleSection title={'Produk dari Brand'} />

        <SlideWrapper className="sliderManual">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </SlideWrapper>
      </SectionProductChoice> */}
    </ProductLayout>
  );
};

export default ProductList;
