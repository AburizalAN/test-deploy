import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AlertComponent from 'components/ui/shopping/AlertComponent';
import Countdown from './Countdown';
import CopyIcon from 'components/icons/copy';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

const Container = styled.div`
  background-color: #ebf9f2;
  padding: 8px 41px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 15px;
  color: #4d6044;
  margin-bottom: 12px;
  font-weight: 400;
  line-height: 20.46px;
`;

const TitleBold = styled(Title)`
  font-weight: 700;
  color: #000000;
`;

const Paragraph = styled.p`
  color: #6f6f6f;
  font-size: 11px;
  line-height: 15px;
  margin-bottom: 12px;
`;

const CopyField = styled.div`
  margin: auto;
  margin-bottom: 12px;
  width: 216px;
  border: 1px solid #6f6f6f;
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  input {
    min-width: 0;
    font-size: 15px;
    flex: 1;
    padding-right: 8px;
    border: none;
    background: none;
  }
  button {
    border-radius: 8px;
    border: none;
    background-color: #265329;
    color: white;
    font-size: 13px;
    padding: 4px 8px;
  }
`;

const CopyField2 = styled(CopyField)`
  width: 147px;
  border: none;
  margin-bottom: 0;
  padding: 0 12px;
  button {
    background: none;
    padding: 0;
  }
`;

const RedirectButton = styled(Button)`
  &&& {
    border-radius: 12px;
    padding: 12px 31.25px;
    font-size: 13px;
    line-height: 17.73px;
  }
`;

// const QrImage = styled.img`
//   width: 180px;
//   height: 180px;
// `;

const DetailInfoComponent = ({
  status,
  payment_message,
  payment_amount,
  expired_time,
  payment_method,
  payment_data,
}) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const router = useRouter();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlertOpen(true);
  };

  const RenderPaymentMethod = () =>
    payment_method === 'bcava' || payment_method === 'bniva' ? (
      <CopyField>
        <input id="copy1" value={payment_data?.va_number} disabled />
        <button onClick={() => copyToClipboard(payment_data?.va_number)}>
          Copy
        </button>
      </CopyField>
    ) : payment_method === 'linkaja' ||
      payment_method === 'dana' ||
      payment_method === 'creditcard' ? (
      <RedirectButton
        sx={{ borderRadius: '12px' }}
        variant="contained"
        disableElevation
        onClick={() => window.open(payment_data?.url_link)}
      >
        Klik untuk Membayar
      </RedirectButton>
    ) : payment_method === 'qris' ? (
      <>
        {payment_data.image ? (
          <img
            style={{ width: '180px', height: '180px' }}
            src={payment_data.image}
            alt="Qr Code"
          />
        ) : (
          <Skeleton height="180px" width="180px" />
        )}
      </>
    ) : payment_method === 'banktransfer' ? (
      <RedirectButton
        sx={{ borderRadius: '12px' }}
        variant="contained"
        disableElevation
        onClick={() => router.push(payment_data?.banktransfer_link)}
      >
        Konfirmasi Pembayaran
      </RedirectButton>
    ) : null;

  return (
    <Container>
      <Countdown expired_time={expired_time} />
      <TitleBold>{status}</TitleBold>
      <Paragraph>{payment_message}</Paragraph>
      {RenderPaymentMethod()}
      <AlertComponent
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        message="success copied to clipboard"
      />
      <Paragraph>Jumlah yang harus dibayar</Paragraph>
      <CopyField2>
        <input
          id="copy2"
          value={`Rp ${new Intl.NumberFormat('id').format(payment_amount)}`}
          disabled
        />
        <button onClick={() => copyToClipboard(payment_amount)}>
          <CopyIcon
            sx={{
              stroke: 'black',
              strokeWidth: 2,
              color: 'transparent',
            }}
          />
        </button>
      </CopyField2>
    </Container>
  );
};

DetailInfoComponent.propTypes = {
  status: PropTypes.string,
  va_number: PropTypes.string,
  payment_message: PropTypes.string,
  payment_amount: PropTypes.number,
  expired_time: PropTypes.string,
  payment_method: PropTypes.string,
  payment_data: PropTypes.object,
};

DetailInfoComponent.defaultProps = {
  status: 'Status',
  va_number: 'xxxxxxx',
  payment_message: '',
  payment_amount: 0,
  payment_method: '',
  payment_data: {},
};

export default DetailInfoComponent;
