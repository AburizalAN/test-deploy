import React, { useEffect, useRef } from 'react';
import ProductLayout from 'components/product-layout';
import {
  ChoiceOption,
  ClaimList,
  ProductInfo,
  SectionAddress,
  SectionChoice,
  SectionDetails,
  SectionPhoto,
  SliderIconWrapper,
  BadgeWrapper,
} from 'components/ui/Product/style';
import { Button } from '@mui/material';
import { StyledButton } from 'components/ui/button';
import WishlistFill from 'components/icons/icon-wishlist-fill';
import SimpleSlider from 'components/ui/slider';
import SliderRight from 'components/icons/slider-right';
import WarehouseIcon from 'components/icons/warehouse';
import TruckIcon from 'components/icons/truck';
import { TabPanel } from 'components/ui/tabs';
import BasicTabs from 'components/ui/tabs';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import SimpleSkeleton from 'components/loading/SimpleSkeleton';
import ACTIONS from 'store/registerActions';
import { IMAGE_URL_STAGING } from 'utils/constant';
import { capitalizeFirstLetter } from 'utils/helper';
import { sanitize } from 'dompurify';
import Cookie from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import ProductItem from 'components/ui/product-item';
import MuiAlert from '@mui/material/Alert';
import { StyledSlideWrapper } from 'components/ui/Home/style';

const Product = '/assets/img/product.png';
const FailedA = '/assets/img/load-failed/failed1.jpg';

const sampleArrObj = [
  {
    category: 'description',
    name: 'Deskripsi',
    item: 'Isi',
  },
  {
    category: 'informasi_gizi',
    name: 'Informasi Gizi',
    item: '-',
  },
];

// const BadgeGluten = '/assets/icons/gluten.svg';

const ImageHeader = ({ height = 160, activeImage = 0 }) => {
  const productState = useSelector((state) => state.productbySlug);
  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];
    const imageUrl = productItem?.media_gallery_entries[activeImage]?.file;
    return (
      <img
        src={(imageUrl && IMAGE_URL_STAGING + imageUrl) || FailedA}
        alt="photo"
        style={{ height: '200px' }}
      />
    );
  } else {
    return (
      <SimpleSkeleton height={height} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const ListImageProduct = ({ height = 80, callback }) => {
  const productState = useSelector((state) => state.productbySlug);
  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];

    return (
      <SimpleSlider
        centerMode
        dots={false}
        infinite
        className="slideCenter"
        prevArrow={
          <SliderIconWrapper transform="scaleX(-1)">
            <SliderRight />
          </SliderIconWrapper>
        }
        nextArrow={
          <SliderIconWrapper>
            <SliderRight />
          </SliderIconWrapper>
        }
        beforeChange={(_, next) => {
          callback(next);
        }}
      >
        {productItem.media_gallery_entries.map((datum, index) => {
          return (
            <img
              src={IMAGE_URL_STAGING + datum.file}
              alt="banner"
              key={index}
            />
          );
        })}
      </SimpleSlider>
    );
  } else {
    return (
      <SimpleSkeleton height={height} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const ListProductInfo = ({
  height = 80,
  brand = 'Singabera',
  nameProduct = 'Salmon Green Sencha',
  price = 15000,
  inStock = true,
}) => {
  const productState = useSelector((state) => state.productbySlug);

  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];
    const objectBrand = productItem.extension_attributes.brand[0];
    const brandParsingJson = JSON.parse(objectBrand);

    const { product_original_price, product_special_price } =
      productState.priceProduct;

    return (
      <ProductInfo
        brand={
          brandParsingJson.brand_name !== '&nbsp'
            ? brandParsingJson.brand_name
            : '\u00a0' || brand
        }
        nameProduct={productItem.name || nameProduct}
        hargaCoret={
          product_original_price > product_special_price
            ? product_original_price
            : null
        }
        price={
          product_special_price > 0
            ? product_special_price
            : product_original_price || price
        }
        inStock={inStock}
      />
    );
  } else {
    return (
      <SimpleSkeleton height={height} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const BadgeBox = ({ height = 80 }) => {
  const BadgeGluten = '/assets/icons/gluten.svg';
  const productState = useSelector((state) => state.productbySlug);
  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];
    const objectBadge = productItem.extension_attributes.product_diet;
    const badgeParse = JSON.parse(objectBadge[0]);

    if (badgeParse.image_url) {
      return (
        <BadgeWrapper>
          {objectBadge.map((datum, index) => {
            const brandParsingJson = JSON.parse(datum);
            if (brandParsingJson.image_url) {
              return (
                <img
                  src={brandParsingJson.image_url}
                  alt="badge-gluten"
                  key={index}
                />
              );
            }
          })}
        </BadgeWrapper>
      );
    } else {
      return <div />;
    }
  } else {
    return (
      <SimpleSkeleton height={height} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const ListVariant = ({ height = 80, clicked, variant }) => {
  const productState = useSelector((state) => state.productbySlug);
  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];
    const objectVariant =
      productItem.extension_attributes.configurable_product_stock_status;

    return (
      <StyledSlideWrapper style={{ marginBottom: '20px' }}>
        {objectVariant.map((datum, index) => {
          const variantParsingJson = JSON.parse(datum);
          return (
            <div className="sliderItem" key={index}>
              <ChoiceOption
                weight={variantParsingJson.optons.option_label}
                callback={() => clicked({ ...variantParsingJson, index })}
                activeVariant={variant}
                status={variantParsingJson.stock_status}
              />
            </div>
          );
        })}
      </StyledSlideWrapper>
    );
  } else {
    return (
      <SimpleSkeleton height={height} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const DetailPengiriman = ({ height = 80 }) => {
  const productState = useSelector((state) => state.productbySlug);
  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];
    const objectPengiriman = productItem.extension_attributes.warehouse_data;
    const badgePengiriman = JSON.parse(objectPengiriman[0]);

    return (
      <p>
        <b>Asal Pengiriman :</b> Warehouse {badgePengiriman.name}{' '}
        {badgePengiriman.city}
      </p>
    );
  } else {
    return <div />;
  }
};

const TabInfoDesc = ({ height = 160 }) => {
  const productState = useSelector((state) => state.productbySlug);
  const [tabValue, setTabValue] = React.useState(sampleArrObj[0].category);
  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };

  if (productState.loading !== true) {
    const productItem = productState.product.data.items[0];

    const filteredDesc = productItem.custom_attributes.filter((datum) => {
      return datum.attribute_code === 'description';
    });
    const filteredGizi = productItem.custom_attributes.filter((datum) => {
      return datum.attribute_code === 'informasi_gizi';
    });
    const desc = filteredDesc[0].value;

    sampleArrObj[0].item = desc;

    if (filteredGizi.length > 0) {
      const gizi = filteredGizi[0].value;
      sampleArrObj[1].item = gizi;
    } else {
      delete sampleArrObj[1];
    }

    return (
      <BasicTabs
        tabName={sampleArrObj}
        value={tabValue}
        onChange={handleChange}
      >
        {sampleArrObj.map((val, i) => (
          <TabPanel
            selected={tabValue === val.category}
            key={i}
            padding="20px 20px"
          >
            <div
              className="desc"
              style={{ marginBottom: '30px' }}
              dangerouslySetInnerHTML={{ __html: sanitize(val.item) }}
            />
            {/* <ClaimList gluten plant lowCal halal local /> */}
          </TabPanel>
        ))}
      </BasicTabs>
    );
  } else {
    return (
      <SimpleSkeleton height={height} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const ProductDetail = () => {
  const router = useRouter();

  // const productState = useSelector((state) => state.productbySlug);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const [stateImage, setActiveImage] = React.useState(0);
  const [stateVariant, setActiveVariant] = React.useState({});

  // const handleCloseAlert = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   dispatch(ACTIONS.addtocart.resetDetailProduct());
  // };

  const { slug } = router.query;
  const productState = useSelector((state) => state.productbySlug);
  const addtocarttState = useSelector((state) => state.addtocart);

  const handleProductDetail = (param) => {
    dispatch(ACTIONS.productbyslug.getListProductBySlug(param));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(ACTIONS.addtocart.resetDetailProduct());
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleAddToCart = async () => {
    const productItem = productState.product.data.items[0];

    const parserBody = () => {
      if (productItem.type_id === 'simple') {
        return {
          sku: productItem.sku,
          qty: quantity,
        };
      } else {
        if (stateVariant.optons) {
          return {
            sku: productItem.sku,
            qty: quantity,
            option_id: stateVariant.optons.attribute_id,
            option_value: stateVariant.optons.option_value,
          };
        }
      }
    };

    const infoDetail = () => {
      dispatch(ACTIONS.info.infoDetail());
    };

    const body = await parserBody();
    await dispatch(ACTIONS.addtocart.postDetailProduct(body, infoDetail));
  };

  useEffect(() => {
    if (!router.isReady) return;
    handleProductDetail(slug);
  }, [router.isReady]);

  useEffect(() => {
    return () => {
      dispatch(ACTIONS.addtocart.resetDetailProduct());
    };
  }, []);

  return (
    <ProductLayout type="details" title={'Salmon'}>
      <SectionPhoto>
        <div className="photoWrap">
          <ImageHeader activeImage={stateImage} />
        </div>
        <div className="previewWrap">
          <ListImageProduct
            callback={(sets) => {
              setActiveImage(sets);
            }}
          />
        </div>

        <ListProductInfo stateVariant={stateVariant} />

        <BadgeBox />
      </SectionPhoto>

      <SectionChoice>
        <ListVariant
          variant={stateVariant}
          clicked={(e) => {
            const priceProduct = {
              product_original_price: e.original_price,
              product_special_price: e.special_price,
            };
            setActiveVariant(e);
            dispatch(ACTIONS.productbyslug.changeStatePrice(priceProduct));
          }}
        />
        {/* <div className="quantityWrap">
          <p className="wordingQ">Quantity</p>

          <div className="quantityBtn">
            <Button
              variant="contained"
              onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              variant="contained"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="cartWrap">
          <div className="wishlistWrap">
            <WishlistFill />
          </div>

          <StyledButton
            onClick={() => handleAddToCart()}
            mt="0"
            fullWidth
            // width="fit-content"
            // style={{ width: '100%' }}
          >
            + Keranjang
          </StyledButton>
        </div> */}
        <div className="quantityWrap">
          {/* <p className="wordingQ">Quantity</p> */}

          <div className="quantityBtn">
            <Button
              variant="contained"
              onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              variant="contained"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>

          <StyledButton
            onClick={() => handleAddToCart()}
            mt="0"
            fullWidth
            // width="fit-content"
            // style={{ width: '100%' }}
            sx={{ borderRadius: '20px !important' }}
          >
            + Keranjang
          </StyledButton>
        </div>
      </SectionChoice>

      <SectionAddress>
        <div className="addressWrap">
          <div className="childAddr">
            <WarehouseIcon />
            <DetailPengiriman />
          </div>
          <div className="childAddr">
            <TruckIcon />
            <p>
              <b>Pemesanan sebelum pukul 14.00 WIB</b> akan diproses di hari
              yang sama
            </p>
          </div>
        </div>
      </SectionAddress>

      <SectionDetails>
        <TabInfoDesc />
      </SectionDetails>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={addtocarttState.loading === false}
        onClose={handleClose}
        autoHideDuration={4000}
        message="Penambahan Keranjang belanja sukses"
        key={'vertical' + 'horizontal'}
        action={action}
      />

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={addtocarttState.alertOn}
        onClose={handleClose}
        autoHideDuration={4000}
        message={
          addtocarttState.error ===
          'Invalid value of "%value" provided for the %fieldName field.'
            ? 'variasi belum diisi'
            : addtocarttState.error
        }
        key={'vertical' + 'horizontal'}
        action={action}
      />
    </ProductLayout>
  );
};

export default ProductDetail;
