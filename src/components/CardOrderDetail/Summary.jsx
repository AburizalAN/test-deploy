import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Typography } from '@mui/material';

import Box from '@mui/material/Box';
import { STATUSES } from 'utils/const';
import { rupiah } from 'utils/currency';

const FieldLabel = styled((props) => <Typography variant="body2" {...props} />)(
  () => ({
    '&&': {
      fontWeight: 800,
      color: '#6f6f6f',
      letterSpacing: '0.1px',
      marginBottom: 4,
    },
  })
);

const OrderDetailSummary = (props) => {
  let { loading, id, status, date, paymentMethod, total, ...restProps } = props;

  const colorStatus = STATUSES(status ? status : '').color;
  const stylesSkeleton = { borderRadius: 50 };

  id = id ? id : '000000000000000';
  status = STATUSES(status ? status : '').label;
  date = date ? date : '-';
  paymentMethod = paymentMethod ? paymentMethod : '-';
  total = rupiah(total ? total : 0);

  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.15)"
      width="100%"
      p="12px"
      {...restProps}
    >
      <Box>
        <FieldLabel>Status Pesanan</FieldLabel>
        <Typography variant="body2" color={colorStatus} fontWeight={600}>
          {loading && <Skeleton style={{ ...stylesSkeleton, maxWidth: 100 }} />}
          {!loading && status}
        </Typography>
      </Box>
      <Box mt={2}>
        <FieldLabel>Nomor Pesanan</FieldLabel>
        <Typography variant="body2" fontWeight={600}>
          {loading && <Skeleton style={{ ...stylesSkeleton, maxWidth: 100 }} />}
          {!loading && id}
        </Typography>
      </Box>
      <Box mt={2}>
        <FieldLabel>Tanggal Transaksi</FieldLabel>
        <Typography variant="body2" fontWeight={600}>
          {loading && <Skeleton style={{ ...stylesSkeleton, maxWidth: 150 }} />}
          {!loading && date}
        </Typography>
      </Box>
      <Box mt={2}>
        <FieldLabel>Metode Pembayaran</FieldLabel>
        <Typography variant="body2" fontWeight={600}>
          {loading && <Skeleton style={{ ...stylesSkeleton, maxWidth: 150 }} />}
          {!loading && paymentMethod}
        </Typography>
      </Box>
      <Box mt={2}>
        <FieldLabel>Total Pembayaran</FieldLabel>
        <Typography variant="body2" color="#E9B632" fontWeight={600}>
          {loading && <Skeleton style={{ ...stylesSkeleton, maxWidth: 150 }} />}
          {!loading && total}
        </Typography>
      </Box>
    </Box>
  );
};

OrderDetailSummary.propTypes = {
  loading: PropTypes.bool,
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  paymentMethod: PropTypes.string,
  total: PropTypes.number,
};

OrderDetailSummary.defaultProps = {
  loading: false,
  id: 0,
  status: '',
  date: '',
  paymentMethod: '',
  total: 0,
};

export default OrderDetailSummary;
