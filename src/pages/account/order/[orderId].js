import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import CardOrderDetail from 'components/CardOrderDetail';

import ACTIONS from 'store/registerActions';
import { capitalize, dateTimeToString } from 'utils/helper';
import { ARRAY_OF_DAYS } from 'utils/const';

const dummyProductData = [
  {
    id: 1,
    productName: 'Lemonilo',
    productDesc: 'Brownies Crispy Brownies Crispy Brownies Crispy',
    productImage: '',
    price: 75000,
    qty: 2,
    weight: 120,
    unit: 'gram',
  },
  {
    id: 2,
    productName: 'Lemonilo',
    productDesc: 'Mie Pedas Korea',
    productImage: '',
    price: 45000,
    qty: 1,
    weight: 50,
    unit: 'gram',
  },
];

const drawerWidth = '100%';

const OrderDetailPage = (props) => {
  let {
    query: { orderId, selectedReceiptId },
  } = props;

  const openHistory = Boolean(selectedReceiptId);

  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, orderDetail } = useSelector((state) => state.transaction);

  const selectedReceipt = React.useMemo(() => {
    return (
      orderDetail?.items?.find(
        (item) => item.tracking_number === selectedReceiptId
      ) || {}
    );
  }, [loading, orderDetail, selectedReceiptId]);

  React.useEffect(() => {
    dispatch(ACTIONS.transaction.getOrderDetail(orderId));
  }, [openHistory]);

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    const defaultBackUrl = '/account/transactions';

    let prevUrl = storage?.prevPath ?? defaultBackUrl;
    if (prevUrl === 'null' || prevUrl.includes(orderId)) {
      prevUrl = defaultBackUrl;
    }

    router.push(prevUrl);
  };

  return (
    <>
      {!openHistory && (
        <AccountLayout
          title="Detail Pesanan"
          backable
          backUrl={null}
          noButton
          bottomNav={false}
          onBackClick={handleBack}
        >
          <Paper elevation={0}>
            <Container maxWidth="sm">
              <Stack gap={2} pt={3} pb={5}>
                <CardOrderDetail.Summary
                  loading={loading}
                  id={orderId}
                  status={orderDetail?.statusOrder}
                  date={dateTimeToString(orderDetail?.createdAt, true)}
                  paymentMethod={orderDetail?.paymentMethod}
                  total={orderDetail?.grandTotal}
                />
                <CardOrderDetail.AddressInfo
                  loading={loading}
                  name={
                    orderDetail?.address?.firstname ||
                    orderDetail?.address?.lastname
                      ? `${orderDetail.address.firstname} ${orderDetail.address.lastname}`
                      : ''
                  }
                  address={
                    (orderDetail?.address?.street
                      ? `${orderDetail.address.street}`
                      : '') +
                    (orderDetail?.address?.district
                      ? `, ${orderDetail.address.district}`
                      : '') +
                    (orderDetail?.address?.city
                      ? `, ${capitalize(orderDetail.address.city)}`
                      : '') +
                    (orderDetail?.address?.region
                      ? `, ${capitalize(orderDetail.address.region)}`
                      : '') +
                    (orderDetail?.address?.postcode
                      ? `, ${orderDetail.address.postcode}`
                      : '')
                  }
                  phoneNumber={orderDetail?.address?.telephone}
                />
                {loading && <CardOrderDetail.ProductList loading />}
                {!loading && orderDetail?.items?.length
                  ? orderDetail.items.map((item, idx) => {
                      const {
                        items: childItems,
                        shipping_title: shippingTitle,
                        tracking_number: trackingNumber,
                        timeline_status: timelines,
                      } = item;

                      const timelineStatusName = timelines?.length
                        ? timelines[timelines.length - 1].status_name
                        : '';
                      const currentTimeline = timelines?.length
                        ? `step-${timelines.length}`
                        : 'step-1';

                      const productData = childItems.map(
                        ({
                          item_id: id,
                          name: productDesc,
                          imageUrl: productImage,
                          qty,
                          price,
                        }) => ({
                          id,
                          productName: '',
                          productDesc,
                          productImage: productImage || '',
                          price,
                          qty: qty || 1,
                          weight: null,
                          unit: 'null',
                        })
                      );

                      return (
                        <React.Fragment key={idx}>
                          <CardOrderDetail.ProductList
                            merchantName={item?.wh_label}
                            status={timelineStatusName}
                            products={productData}
                            deliveryService={shippingTitle}
                            orderId={orderId}
                            receiptId={trackingNumber}
                            currentTimeline={currentTimeline}
                          />
                        </React.Fragment>
                      );
                    })
                  : null}
                <CardOrderDetail.Payment
                  loading={loading}
                  totalPrice={orderDetail?.grandTotal}
                  deliveryCost={orderDetail?.shippingAmount}
                  discount={orderDetail?.discountAmount}
                  totalBill={orderDetail?.subtotal}
                  paymentMethod={orderDetail?.paymentMethod}
                />
              </Stack>
            </Container>
          </Paper>
        </AccountLayout>
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxShadow: 1,
            left: 0,
          },
        }}
        hideBackdrop
        anchor="right"
        open={openHistory}
      >
        <AccountLayout
          title="Detail Pesanan"
          backable
          backUrl={`/account/order/${orderId}`}
          noButton
          bottomNav={false}
        >
          <Paper elevation={0}>
            <Container maxWidth="sm">
              <Stack gap={2} pt={3} pb={5}>
                <CardOrderDetail.ShippingHistory
                  loading={loading}
                  currentTimeline={`step-${
                    selectedReceipt?.timeline_status?.length || 0
                  }`}
                  histories={
                    selectedReceipt?.timeline_tracking?.length
                      ? selectedReceipt.timeline_tracking.map((t, index) => {
                          return {
                            label: t.status,
                            label2: `${
                              ARRAY_OF_DAYS[new Date(t.date).getDay()]
                            }, ${dateTimeToString(t.date, true, ' |')}`,
                            // label2: 'Senin, 5 Jul 2021 | 15.34 WIB',
                            value: `step-${index + 1}`,
                          };
                        })
                      : null
                    // [
                    //   {
                    //     label: 'Pembayaran via OVO dikonfirmasi',
                    //     label2: 'Senin, 5 Jul 2021 | 15.34 WIB',
                    //     value: 'step-1',
                    //   },
                    // ]
                  }
                />
              </Stack>
            </Container>
          </Paper>
        </AccountLayout>
      </Drawer>
    </>
  );
};

export function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query },
  };
}

OrderDetailPage.propTypes = {
  query: PropTypes.object,
};

OrderDetailPage.defaultProps = {
  query: {},
};

export default withAuth('PRIVATE_ROUTE')(OrderDetailPage);
