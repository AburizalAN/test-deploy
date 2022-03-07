import React, { Component } from 'react';
import { IMAGE_URL_STAGING } from 'utils/constant';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ProductItems } from 'components/ui/product-item';
import { connect, useDispatch } from 'react-redux';
import { SectionProduct } from 'components/ui/Product/style';
import ACTIONS from 'store/registerActions';
import AlertComponent from 'components/ui/shopping/AlertComponent';
import Cookie from 'js-cookie';

const routeRedirectDetail = ({ urlKey, active }) => {
  if (active) return;
  window.location.assign('/produk/' + urlKey);
};

class Listproductbycategory extends Component {
  constructor(props) {
    super(props);
    this.isBottom = this.isBottom.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);

    this.state = {
      alertOpen: null,
    };
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);

    if (Cookie.get('AMToken')) {
      this.props.getWishlist();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling() {
    const wrappedElement = document.getElementById('section-product');
    if (this.isBottom(wrappedElement)) {
      const { product } = this.props;
      let { id, page } = product.listProduct;
      if (!product.waitpagination) {
        console.log('header bottom reached');
        return this.props.getProductMore(id, page);
      }
    }
  }

  async addToWishlist(e) {
    if (Cookie.get('AMToken')) {
      const request = await fetch(`/api/wishlist?sku=${e.sku}`, {
        method: 'PUT',
      });

      if (request.status === 200) {
        this.props.getWishlist();
        this.setState({ alertOpen: 'Items added to Wishlist' });
      }
    } else {
      window.location.replace('/login');
    }
  }

  render() {
    const { product, wishlist } = this.props;
    let listProduct = product.listProduct.data.items;

    return (
      <>
        <AlertComponent
          open={Boolean(this.state.alertOpen)}
          onClose={() => this.setState({ alertOpen: null })}
          message={this.state.alertOpen}
        />
        <SectionProduct id="section-product">
          {listProduct.map((_, index) => {
            let brandName = JSON.parse(_.extension_attributes.brand[0]);
            let specialPrice = _.extension_attributes.am_product_price_data[0];
            let active = _.extension_attributes.simple_product_stock_status[0];
            const priceParsingJson = JSON.parse(specialPrice);
            const activeParse = JSON.parse(active);
            const { product_original_price, product_special_price } =
              priceParsingJson;

            const persenDiskon =
              ((product_original_price - product_special_price) /
                product_original_price) *
              100;
            let diskonParse = parseInt(persenDiskon);
            const filtered = _.custom_attributes.filter(function (datum) {
              return datum.attribute_code === 'url_key';
            });

            const activeStatus = activeParse.stock_status;
            var resultImg = _.custom_attributes.find((obj) => {
              return obj.attribute_code === 'image';
            });
            const werehouse = JSON.parse(
              _.extension_attributes.warehouse_data[0]
            );
            const parseBadge = _.extension_attributes?.product_diet;

            const activeWishlist = wishlist?.items?.filter(
              (res) => res?.product?.sku === _?.sku
            )?.length
              ? true
              : false;

            return (
              <>
                <ProductItems
                  key={index}
                  image={IMAGE_URL_STAGING + resultImg.value}
                  name={_.name}
                  priceStrike={
                    product_original_price > product_special_price
                      ? product_original_price
                      : null
                  }
                  price={
                    product_special_price > 0
                      ? product_special_price
                      : product_original_price
                  }
                  discount={diskonParse}
                  weight={werehouse.name}
                  brand={
                    brandName.brand_name !== '&nbsp'
                      ? brandName.brand_name
                      : '\u00a0'
                  }
                  callback={() =>
                    routeRedirectDetail({
                      urlKey: filtered[0].value,
                      active: !activeStatus,
                    })
                  }
                  handleAddToWishlist={() => this.addToWishlist(_)}
                  productActive={activeStatus}
                  badge={parseBadge}
                  activeWishlist={activeWishlist}
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productbycategory: state.productbyCategory,
  wishlist: state.me.wishlist,
});

function mapDispatchToProps(dispatch) {
  return {
    getProductMore: (id, page) => {
      dispatch(
        ACTIONS.productbyCategory.getMoreProductByCategory(id, page + 1)
      );
    },
    getWishlist: () => dispatch(ACTIONS.me.getWishlist()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listproductbycategory);
