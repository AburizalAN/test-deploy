import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from 'react-loading-skeleton';

import { rupiah } from 'utils/currency';

const OrderDetailPayment = (props) => {
  const styleSkeleton = { borderRadius: 50, width: '100%' };

  let {
    loading,
    totalPrice,
    deliveryCost,
    discount,
    totalBill,
    paymentMethod,
    ...restProps
  } = props;

  totalPrice = rupiah(totalPrice ? totalPrice : 0);
  deliveryCost = rupiah(deliveryCost ? deliveryCost : 0);
  discount = rupiah(discount ? discount : 0);
  totalBill = rupiah(totalBill ? totalBill : 0);
  paymentMethod = paymentMethod ? paymentMethod : '-';

  const fields = React.useMemo(() => {
    return [
      { label: 'Total Harga', value: totalPrice },
      { label: 'Biaya Pengiriman', value: deliveryCost },
      { label: 'Discount', value: discount },
      { label: 'Total Bayar', value: totalBill },
      { label: 'Metode Pembayaran', value: paymentMethod },
    ];
  }, [totalPrice, deliveryCost, discount, totalBill, paymentMethod]);

  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.15)"
      width="100%"
      p="12px"
      {...restProps}
    >
      <Box mb="6px">
        <Typography variant="subtitle1" fontWeight="bold">
          Pembayaran
        </Typography>
      </Box>
      <Box pb={2}>
        {fields.map((field, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="16px"
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="#6f6f6f"
              minWidth={120}
            >
              {loading && <Skeleton style={{ ...styleSkeleton }} />}
              {!loading && field.label}
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="right"
              color="#6f6f6f"
              minWidth={80}
            >
              {loading && <Skeleton style={{ ...styleSkeleton }} />}
              {!loading && field.value}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

OrderDetailPayment.propTypes = {
  loading: PropTypes.bool,
  totalPrice: PropTypes.number,
  deliveryCost: PropTypes.number,
  discount: PropTypes.number,
  totalBill: PropTypes.number,
  paymentMethod: PropTypes.string,
};

OrderDetailPayment.defaultProps = {
  loading: false,
  totalPrice: 0,
  deliveryCost: 0,
  discount: 0,
  totalBill: 0,
  paymentMethod: '',
};

export default OrderDetailPayment;
