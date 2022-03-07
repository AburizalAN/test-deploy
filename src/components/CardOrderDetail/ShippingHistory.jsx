import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from 'react-loading-skeleton';

import Stepper from 'components/shared/Stepper';

const OrderDetailShippingHistory = (props) => {
  let { loading, currentTimeline, histories, ...restProps } = props;

  const styleSkeleton = { borderRadius: 50, width: '100%' };

  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.15)"
      width="100%"
      p="12px"
      {...restProps}
    >
      <Stack py={3} px={3}>
        {loading && <Skeleton style={{ borderRadius: 50 }} />}
        {!loading && (
          <Stepper
            size="large"
            step={currentTimeline}
            steps={[
              { label: 'Sedang diproses', value: 'step-1' },
              { label: 'Sedang dikirim', value: 'step-2' },
              { label: 'Dalam Pengiriman', value: 'step-3' },
              { label: 'Selesai', value: 'step-4' },
            ]}
          />
        )}
      </Stack>

      <Box pb={1} mt={2}>
        <Typography variant="h6" fontWeight={800}>
          History Pengiriman
        </Typography>
      </Box>

      <Stack borderTop="2px solid #D1D1D6" pt={3} pb={2}>
        {loading && <Skeleton style={{ borderRadius: 50 }} />}
        {!loading && (
          <Stepper
            width="100%"
            reverse
            orientation="vertical"
            size="small"
            step={`step-${histories?.length || 0}`}
            steps={histories?.length ? histories : []}
          />
        )}
      </Stack>
    </Box>
  );
};

OrderDetailShippingHistory.propTypes = {
  loading: PropTypes.bool,
  currentTimeline: PropTypes.string,
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      label2: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

OrderDetailShippingHistory.defaultProps = {
  loading: false,
  currentTimeLine: '',
  histories: [],
};

export default OrderDetailShippingHistory;
