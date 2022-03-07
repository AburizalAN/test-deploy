import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChildWrapper, MainContainer } from 'components/style';
import AppBar from 'components/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/modules/checkout/actions';
import CardContentProduct from 'components/ui/shopping/checkout/CardContentProduct';
import GimmickProduct from 'components/ui/shopping/checkout/GimmickProduct';
import Cookie from 'js-cookie';
import GimmickNotif from 'components/ui/shopping/checkout/GimmickNotif';
import AlertComponent from 'components/ui/shopping/AlertComponent';
import Skeleton from 'react-loading-skeleton';
import { StyledModal as Modal } from 'components/ui/modal';
import {
  BottomNavigation,
  EmptyStateWrapper,
} from 'components/ui/shopping/style';

import {
  CardContainer,
  SubmitCheckout,
  // SelectAll,
  VoucherSection,
} from 'components/ui/shopping/checkout/checkout.style';

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
`;
const GimmickNotifWrapper = styled.div`
  padding: 18px 12px;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;
const ShoppingButton = styled(Button)`
  &&& {
    border-radius: 12px;
    font-size: 13px;
    line-height: 17.73px;
    padding: 13px 31.25px;
    font-weight: 600;
    letter-spacing: 0.25px;
  }
`;

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { voucher = null } = router.query;
  const {
    checkoutList,
    quote_id,
    subtotal,
    gimmick,
    loading,
    error,
    discount,
  } = useSelector((state) => state.checkout);

  const [alertOpen, setAlertOpen] = useState(false);
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const bottomNavRef = useRef(null);

  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.checkout.getCheckoutData());
    } else {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    if (voucher && checkoutList.length > 0) {
      setAlertOpen(true);
    }
  }, [voucher, checkoutList]);

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch(ACTIONS.checkout.setError(null));
      }, 2000);
    }
  }, [error]);

  const updateQty = (cartItem) => {
    dispatch(ACTIONS.checkout.updateQty(cartItem));
  };

  useEffect(() => {
    if (checkoutList.length > 0 && !loading) {
      setBottomNavHeight(bottomNavRef?.current?.offsetHeight);
    }
  }, [checkoutList, loading]);

  return (
    <ThisContainer>
      <AppBar
        title="Keranjang Saya"
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
      {checkoutList.length > 0 && !loading ? (
        <>
          <ThisChildWrapper mb={bottomNavHeight}>
            <ContentWrapper>
              {gimmick?.data.length > 0 && (
                <CardContainer>
                  <Box p="12px">
                    {gimmick?.data?.map((item, index) => (
                      <GimmickProduct
                        key={index}
                        image={item.image}
                        name={item.name}
                        desc={item.description}
                      />
                    ))}
                  </Box>
                </CardContainer>
              )}
              {checkoutList.map((data, index) => (
                <CardContainer key={index}>
                  <Box p={'12px'}>
                    <h6>
                      Dari {data.seller_regency_name} Warehouse {data.wh_label}
                    </h6>
                    {data?.items?.map((product) => (
                      <CardContentProduct
                        key={product.item_id}
                        productProps={{
                          image: product.imageUrl,
                          name: product.name,
                          price: `Rp ${new Intl.NumberFormat('id').format(
                            product.price
                          )}`,
                          weight: product.weight,
                          qty: product.qty,
                          quote_id: quote_id,
                          item_id: product.item_id,
                        }}
                        // onSelect={() => handleSelect(product.id)}
                        // status={selected.includes(product.id)}
                        // onDelete={() => deleteProduct(product.id)}
                        updateQty={(cartItem) => updateQty(cartItem)}
                      />
                    ))}
                  </Box>
                </CardContainer>
              ))}
            </ContentWrapper>
            {gimmick?.notif.length > 0 && (
              <GimmickNotifWrapper>
                {gimmick?.notif?.map((item, index) => (
                  <GimmickNotif
                    key={index}
                    name={item.name}
                    image={item.image}
                    desc={item.description}
                  />
                ))}
              </GimmickNotifWrapper>
            )}
          </ThisChildWrapper>
          <BottomNavigation ref={bottomNavRef}>
            <VoucherSection
              voucher={discount?.desc}
              onClick={() =>
                router.push(
                  `/shopping/checkout/voucher?redirect=${router.pathname}`
                )
              }
            />
            <SubmitCheckout
              subTotal={subtotal}
              onSubmit={() =>
                router.push(
                  `/shopping/shipping${voucher ? `?voucher=${voucher}` : ''}`
                )
              }
            />
          </BottomNavigation>
          <AlertComponent
            open={alertOpen}
            onClose={() => setAlertOpen(false)}
            message={`Voucher ${voucher} berhasil digunakan`}
          />
        </>
      ) : !loading ? (
        <ThisChildWrapper>
          <EmptyStateWrapper>
            <img src="/assets/img/empty-cart.png" alt="empty cart" />
            <h3>Yah, keranjang belanjamu kosong</h3>
            <p>Kalau ada yang cocok di hati, langsung saja sikat disini!</p>
            <ShoppingButton
              onClick={() => router.push('/shopping')}
              variant="contained"
              disableElevation
            >
              Belanja Sekarang
            </ShoppingButton>
          </EmptyStateWrapper>
        </ThisChildWrapper>
      ) : (
        <ThisChildWrapper>
          <CardContainer>
            <Box p={'12px'}>
              <Skeleton
                style={{ marginBottom: '12px' }}
                count={3}
                height={100}
              />
            </Box>
          </CardContainer>
        </ThisChildWrapper>
      )}
      <Modal
        minWidth="calc(100% - 48px)"
        open={error !== null}
        handleClose={() => dispatch(ACTIONS.checkout.setError(null))}
      >
        <Box sx={{ textAlign: 'center' }}>{error}</Box>
      </Modal>
    </ThisContainer>
  );
};

export default Checkout;
