import React, { Component } from 'react';
import { IMAGE_URL_STAGING } from 'utils/constant';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ProductItems } from 'components/ui/product-item';
import { connect, useDispatch } from 'react-redux';
import { SectionProduct } from 'components/ui/Product/style';
import ACTIONS from 'store/registerActions';
import PropTypes from 'prop-types';

const routeRedirectDetail = ({ urlKey, active }) => {
  if (active) return;
  window.location.assign('/produk/' + urlKey);
};

class Listproductbycategory extends Component {
  constructor(props) {
    super(props);
    this.isBottom = this.isBottom.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling() {
    const wrappedElement = document.getElementById('section-product');
    if (this.isBottom(wrappedElement)) {
      const { product } = this.props;
      // let { id, page } = product.listProduct;
      // if (!product.waitpagination) {
      //   console.log('header bottom reached');
      //   return this.props.getProductMore(id, page);
      // }
    }
  }

  render() {
    const { product } = this.props;
    let listProduct = product;

    console.log('list product', listProduct);

    return (
      <SectionProduct id="section-product">
        {listProduct.map((_, index) => {
          let name = _.name;
          let brandName = _.brand_name;
          let specialPrice = _?.special_price || null;
          let price = _.price;
          let active = _.quantity_and_stock_status.is_in_stock;
          const persenDiskon = ((price - specialPrice) / price) * 100;
          let diskonParse = parseInt(persenDiskon);
          // const filtered = _.custom_attributes.filter(function (datum) {
          //   return datum.attribute_code === 'url_key';
          // });
          var resultImg = _?.image;
          const warehouse = _.warehouse_data;
          const parseBadge = _.product_diet;
          const urlKey = _.url_key;

          return (
            <>
              <ProductItems
                key={index}
                image={IMAGE_URL_STAGING + resultImg}
                name={name}
                priceStrike={price > specialPrice ? price : null}
                price={specialPrice > 0 ? specialPrice : price}
                discount={diskonParse}
                weight={warehouse.name}
                brand={brandName !== '&nbsp' ? brandName : '\u00a0'}
                callback={() =>
                  routeRedirectDetail({
                    urlKey: urlKey,
                    active: !active,
                  })
                }
                productActive={active}
                badge={parseBadge}
              />
            </>
          );
        })}
        {product.waitpagination && (
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <CircularProgress />
          </Box>
        )}
      </SectionProduct>
    );
  }
}

const mapStateToProps = (state) => ({
  productbycategory: state.productbyCategory,
});

function mapDispatchToProps(dispatch) {
  return {
    getProductMore: (id, page) => {
      dispatch(
        ACTIONS.productbyCategory.getMoreProductByCategory(id, page + 1)
      );
    },
  };
}

Listproductbycategory.propTypes = {
  product: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listproductbycategory);
