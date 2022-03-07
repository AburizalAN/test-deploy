import styled from 'styled-components';
import {
  CardContainer,
  CardTitle,
} from 'components/ui/shopping/checkout/checkout.style';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    line-height: 17.73px;
    font-weight: 600;
    > div:nth-child(1) {
      flex: 1;
    }
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const SummaryComponent2 = ({
  subtotal,
  discount,
  grandTotal,
  shipping,
  discount_desc,
}) => {
  return (
    <CardContainer p="12px">
      <CardTitle mb="12px">Ringkasan Pemesanan</CardTitle>
      <Container>
        <div>
          <div>Subtotal</div>
          <div>{new Intl.NumberFormat('id').format(subtotal)}</div>
        </div>
        <div>
          <div>Discount ({discount_desc})</div>
          <div>{new Intl.NumberFormat('id').format(discount)}</div>
        </div>
        <div>
          <div>Biaya Pengiriman</div>
          <div>{new Intl.NumberFormat('id').format(shipping)}</div>
        </div>
      </Container>
      <Divider sx={{ my: '12px', borderBottom: '1px solid #D8D8D8' }} />
      <TotalContainer>
        <div>Total Pemesanan</div>
        <div>Rp {new Intl.NumberFormat('id').format(grandTotal)}</div>
      </TotalContainer>
    </CardContainer>
  );
};

SummaryComponent2.propTypes = {
  subtotal: PropTypes.number,
  shippingMethods: PropTypes.object,
  discount: PropTypes.number,
  discount_desc: PropTypes.string,
  grandTotal: PropTypes.number,
  shipping: PropTypes.number,
};

SummaryComponent2.defaultProps = {
  subtotal: 0,
  shippingMethods: {},
  discount: 0,
  shipping: 0,
  grandTotal: 0,
};

export default SummaryComponent2;
