import { useState, useEffect, Fragment } from 'react';
import Cookie from 'js-cookie';
import styled from 'styled-components';
import { ChildWrapper, MainContainer } from 'components/style';
import AppBar from 'components/AppBar';
import { useRouter } from 'next/router';
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  Snackbar,
  IconButton,
} from '@mui/material';
import FavoriteActive from 'components/icons/favorite-active';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from 'store/registerActions';
import CloseIcon from '@mui/icons-material/Close';
import AlertComponent from 'components/ui/shopping/AlertComponent';

const ThisContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ThisChildWrapper = styled(ChildWrapper)`
  position: relative;
  margin-bottom: 0;
  flex: 1;
  margin-bottom: ${({ mb }) => mb + 'px' || '0'};
`;
const ContentWrapper = styled.div`
  overflow: auto;
  height: 100%;
  padding: 10px;
`;
const DiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  span:not(:last-child) {
    margin-right: 8px;
  }
  margin-bottom: 8px;
  .discount {
    background-color: #feeceb;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 9px;
    color: #b42519;
  }
  .priceBefore {
    font-size: 9px;
    color: #6f6f6f;
    text-decoration: line-through;
  }
  .productPrice {
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
  }
`;

const Checkout = () => {
  const router = useRouter();
  const { wishlist } = useSelector((state) => state.me);
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const dispatch = useDispatch();
  const addtocarttState = useSelector((state) => state.addtocart);
  const [alertOpen, setAlertOpen] = useState(null);

  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.me.getWishlist());
    } else {
      router.push('/login');
    }
  }, []);

  const discount = (price, specialPrice) =>
    parseInt(((price - specialPrice) / price) * 100);

  const handleAddToCart = async (productState) => {
    const productItem = productState;

    const parserBody = () => {
      return {
        sku: productItem.sku,
        qty: 1,
      };
    };

    const infoDetail = () => {
      dispatch(ACTIONS.info.infoDetail());
    };

    const body = await parserBody();
    await dispatch(ACTIONS.addtocart.postDetailProduct(body, infoDetail));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(ACTIONS.addtocart.resetDetailProduct());
  };

  const removeWishlist = async (e) => {
    const request = await fetch(`/api/wishlist-remove?id=${e.id}`, {
      method: 'DELETE',
    });

    if (request.status === 200) {
      setAlertOpen('Items remove from Wishlist');
      dispatch(ACTIONS.me.getWishlist());
    }
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <ThisContainer>
      <AlertComponent
        open={Boolean(alertOpen)}
        onClose={() => setAlertOpen(null)}
        message={alertOpen}
      />

      <AppBar
        title="Wishlist"
        // subAppBar={
        //   <SelectAll
        //     status={selected.length === selectAll.length}
        //     onSelect={handleSelectAll}
        //     onDelete={() => setSelected([])}
        //   />
        // }
        backUrl={`/shopping`}
        backable
        noButton
      />

      <ThisChildWrapper mb={bottomNavHeight}>
        <ContentWrapper>
          {wishlist?.items_count > 0 ? (
            wishlist?.items?.map((val, key) => (
              <Card
                sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', mb: 2 }}
                key={key}
              >
                <CardContent sx={{ px: 2, py: '20px !important' }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={4}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${val.product.custom_attributes[0].value}`}
                        style={{
                          width: '100%',
                          height: '80px',
                          objectFit: 'contain',
                          objectPosition: 'center',
                        }}
                        alt="product"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: '15px',
                          lineHeight: '20px',
                          color: '#25282B',
                          fontWeight: 'bolder',
                        }}
                        noWrap
                      >
                        {val.product.name}
                      </Typography>
                      {/* <Typography
                        sx={{
                          fontSize: '13px',
                          lineHeight: '20px',
                          color: '#25282B',
                        }}
                        noWrap
                      >
                        {val.product.sku}
                      </Typography> */}
                      <DiscountWrapper>
                        {val.product.custom_attributes[2].attribute_code ===
                        'special_price' ? (
                          <>
                            <span className="discount">
                              {discount(
                                val.product.price,
                                val.product.custom_attributes[2].value
                              )}
                              %
                            </span>
                            <span className="priceBefore">
                              Rp{' '}
                              {new Intl.NumberFormat('id').format(
                                val.product.price
                              )}
                            </span>
                            <p className="productPrice">
                              Rp{' '}
                              {new Intl.NumberFormat('id').format(
                                val.product.custom_attributes[2].value
                              )}
                            </p>
                          </>
                        ) : (
                          <p className="productPrice">
                            Rp{' '}
                            {new Intl.NumberFormat('id').format(
                              val.product.price
                            )}
                          </p>
                        )}
                      </DiscountWrapper>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs={10}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ borderRadius: '8px', py: '1px' }}
                        fullWidth
                        onClick={() => handleAddToCart(val.product)}
                      >
                        + Keranjang
                      </Button>
                    </Grid>
                    <Grid item>
                      <div onClick={() => removeWishlist(val)}>
                        <FavoriteActive />
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography
              sx={{
                fontSize: '13px',
                lineHeight: '20px',
                color: '#25282B',
              }}
              align="center"
            >
              Wishlist tidak ada
            </Typography>
          )}
        </ContentWrapper>
      </ThisChildWrapper>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={addtocarttState.loading === false}
        onClose={handleClose}
        autoHideDuration={4000}
        message="Penambahan Keranjang belanja sukses"
        key={'vertical' + 'horizontal'}
        action={action}
        color="success"
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
        color="error"
      />
    </ThisContainer>
  );
};

export default Checkout;
