import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import AppBar from 'components/AppBar';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/modules/checkout/actions';
import SERVICES from 'store/modules/checkout/services';
import { Container, ChildWrapper } from 'components/style';
import Cookie from 'js-cookie';
import { VoucherSection } from 'components/ui/shopping/checkout/checkout.style';
import AddressComponent from 'components/ui/shopping/shipping/AddressComponent';
import SummaryComponent from 'components/ui/shopping/shipping/SummaryComponent';
import SummaryComponent2 from 'components/ui/shopping/shipping/SummaryComponent2';
import NotesComponent from 'components/ui/shopping/shipping/NotesComponent';
import PaymentModal from 'components/ui/shopping/shipping/PaymentModal';
import { StyledModal as Modal } from 'components/ui/modal';
import { BottomNavigation } from 'components/ui/Shopping/style';
import ModalEmptyAddress from 'components/ui/Shopping/shipping/ModalEmptyAddress';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ModalOutOfStock from 'components/ui/Shopping/shipping/ModalOutOfStock';
import ModalZeroPaymentSuccess from 'components/ui/Shopping/shipping/ModalZeroPaymentSuccess';

const ThisContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ThisChildWrapper = styled(ChildWrapper)`
  margin-bottom: ${({ mb }) => mb + 'px' || '0'};
  flex: 1;
`;

const Shipping = () => {
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [shippingMethods, setShippingMethods] = useState({});
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [showZeroPaymentSuccess, setShowZeroPaymentSuccess] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const bottomNavRef = useRef(null);

  const {
    checkoutList,
    quote_id,
    subtotal,
    address_list,
    payment_groups,
    summary_order,
    order_data,
    loading,
    discount,
  } = useSelector((state) => state.checkout);
  const test = useSelector((state) => state.checkout);

  const { voucher = null } = router.query;

  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.checkout.getCheckoutData());
    } else {
      router.push('/login');
    }
    return () => {
      dispatch(ACTIONS.checkout.reset());
      setSelectedAddress(null);
    };
  }, []);

  useEffect(() => {
    if (selectedAddress) {
      dispatch(
        ACTIONS.checkout.setOrderData({
          ...order_data,
          billingAddress: {
            customerAddressId: selectedAddress.props.address_id,
            countryId: selectedAddress.props.country_id,
            regionId: selectedAddress.props.region_id,
            regionCode: '',
            region: selectedAddress.props.region,
            customerId: selectedAddress.props.customer_id,
            street: selectedAddress.props.street,
            telephone: selectedAddress.props.telephone,
            postcode: selectedAddress.props.postcode,
            city: selectedAddress.props.city,
            firstname: selectedAddress.props.firstname,
            lastname: selectedAddress.props.lastname,
            customAttributes: selectedAddress.props.custom_attributes,
          },
        })
      );
    }
  }, [selectedAddress]);

  useEffect(() => {
    const orderData = {
      ...order_data,
      paymentMethod: {
        method: selectedPayment,
      },
    };

    dispatch(ACTIONS.checkout.setOrderData(orderData));
  }, [selectedPayment]);

  useEffect(() => {
    const shippingMethodsArr = Object.values(shippingMethods);
    if (
      shippingMethodsArr.length !== 0 &&
      shippingMethodsArr[0].warehouse &&
      shippingMethodsArr[0].shipping_courrier
    ) {
      const salesRule = {
        quote_id: quote_id,
        shipping_method: shippingMethodsArr,
      };
      console.log('sales rule', salesRule);
      dispatch(ACTIONS.checkout.updateSalesRule(salesRule));
    }
  }, [shippingMethods, quote_id]);

  useEffect(() => {
    if (checkoutList.length > 0 && !loading) {
      setBottomNavHeight(bottomNavRef?.current?.offsetHeight);
    }
  }, [checkoutList, loading]);

  const submitOrder = () => {
    setLoadingPayment(true);
    SERVICES.submitOrder(order_data)
      .then((res) => {
        if (res.data) {
          setLoadingPayment(false);
          if (selectedPayment === 'zeropayment') {
            setShowZeroPaymentSuccess(true);
          } else {
            router.push(`/shopping/detail-order/${res.data}`);
          }
        } else {
          throw res;
        }
      })
      .catch((err) => {
        setLoadingPayment(false);

        if (err.error.message === 'Some of the products are out of stock.') {
          setIsOutOfStock(true);
        }
      });
  };

  const addShippingMethod = (payload) => {
    const _shippingMethods = {
      ...shippingMethods,
      [`payload_${payload.index}`]: payload,
    };
    console.log('shipping methods', _shippingMethods);
    setShippingMethods(_shippingMethods);
  };

  return (
    <ThisContainer>
      <AppBar
        title="Pengiriman"
        backable
        noButton
        backUrl="/shopping/checkout"
      />
      <ThisChildWrapper mb={bottomNavHeight}>
        <AddressComponent
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          data={address_list}
        />
        <SummaryComponent
          selectedAddress={selectedAddress}
          data={checkoutList}
          subtotal={subtotal}
          addShippingMethod={addShippingMethod}
        />
        <NotesComponent />
        <SummaryComponent2
          subtotal={summary_order.subtotal}
          discount={summary_order.discount}
          discount_desc={discount.desc}
          shipping={summary_order.shipping}
          grandTotal={summary_order.total}
        />
      </ThisChildWrapper>
      <BottomNavigation ref={bottomNavRef} sx={{ backgroundColor: 'white' }}>
        <VoucherSection
          voucher={discount?.desc}
          onClick={() =>
            router.push(
              `/shopping/checkout/voucher?redirect=${router.pathname}`
            )
          }
        />
        <Box p="12px" sx={{ borderTop: '1px solid #E0E0E0' }}>
          <Button
            variant="contained"
            fullWidth
            disableElevation
            sx={{ borderRadius: '12px' }}
            mt={0}
            onClick={() => setOpenPaymentMethod(true)}
            disabled={Object.keys(summary_order).length === 0}
          >
            Lanjut ke Pembayaran
          </Button>
        </Box>
      </BottomNavigation>
      <PaymentModal
        open={openPaymentMethod}
        handleClose={() => setOpenPaymentMethod(false)}
        isLoading={loadingPayment}
        data={payment_groups}
        submitOrder={submitOrder}
        selected={selectedPayment}
        setSelected={setSelectedPayment}
        total={summary_order.total}
        disabled={selectedPayment === null}
      />
      <ModalEmptyAddress />
      <ModalOutOfStock isOutOfStock={isOutOfStock} />
      <ModalZeroPaymentSuccess
        isOpen={showZeroPaymentSuccess}
        onClose={() => setShowZeroPaymentSuccess(false)}
      />
    </ThisContainer>
  );
};

export default Shipping;
