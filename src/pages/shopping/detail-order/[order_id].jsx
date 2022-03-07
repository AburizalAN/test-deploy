import { useEffect } from 'react';
import styled from 'styled-components';
import { Container, ChildWrapper } from 'components/style';
import { CardContainer } from 'components/ui/shopping/checkout/checkout.style';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/modules/checkout/actions';
import Skeleton from 'react-loading-skeleton';

import PaymentInstruction from 'components/ui/shopping/detailOrder/PaymentInstruction';
import DetailInfoComponent from 'components/ui/shopping/detailOrder/DetailInfoComponent';

import MuiButton from '@mui/material/Button';
import AppBar from 'components/AppBar';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const ThisContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ThisChildWrapper = styled(ChildWrapper)`
  position: relative;
  margin-bottom: 0;
  flex: 1;
`;
const Button = styled(MuiButton)`
  border-radius: 15px !important;
`;

const DetailOrder = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { checkout_status } = useSelector((state) => state.checkout);
  const { order_id } = router.query;

  useEffect(() => {
    if (order_id) {
      dispatch(ACTIONS.checkout.getCheckoutStatus(order_id));
    }
  }, [order_id]);

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    const defaultBackUrl = '/shopping/checkout';

    let prevUrl = storage?.prevPath ?? defaultBackUrl;
    if (prevUrl === 'null') {
      prevUrl = defaultBackUrl;
    }

    router.push(prevUrl);
  };

  return (
    <ThisContainer>
      <AppBar
        title="Detail Order"
        backable
        noButton
        backUrl={null}
        onBackClick={handleBack}
      />
      <ThisChildWrapper>
        <CardContainer p="12px" fullHeight>
          {checkout_status !== null ? (
            <DetailInfoComponent
              status={checkout_status?.order_status_title}
              payment_data={checkout_status?.payment_data}
              payment_message={checkout_status?.payment_message}
              payment_amount={parseInt(checkout_status?.payment_amount)}
              expired_time={checkout_status?.raw_expired_time}
              payment_method={checkout_status?.payment_method}
            />
          ) : (
            <Skeleton height={250} />
          )}
          <PaymentInstruction instruction={checkout_status?.instruction} />
        </CardContainer>
      </ThisChildWrapper>
      <Box p="12px" sx={{ backgroundColor: 'white' }}>
        {/* <Button
          disableElevation
          fullWidth
          sx={{ mb: '8px' }}
          variant="contained"
          onClick={() => router.push('/shopping/success-order')}
        >
          Cek Status Pembayaran
        </Button> */}
        <Button onClick={() => router.push('/')} fullWidth variant="outlined">
          Kembali ke Beranda
        </Button>
      </Box>
    </ThisContainer>
  );
};

export default DetailOrder;
