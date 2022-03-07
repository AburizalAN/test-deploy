import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const OrderDetailAddressInfo = (props) => {
  let { loading, name, address, phoneNumber, ...restProps } = props;

  name = name ? name : '-';
  address = address ? address : '-';
  phoneNumber = phoneNumber ? phoneNumber : '-';

  const styleSkeleton = {
    borderRadius: 50,
  };

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
          Dikirim kepada
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" fontWeight={600}>
          {loading && <Skeleton style={{ ...styleSkeleton, maxWidth: 100 }} />}
          {!loading && name}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="#6f6f6f">
          {loading && <Skeleton count={3} style={{ ...styleSkeleton }} />}
          {!loading && address}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="#6f6f6f">
          {loading && <Skeleton style={{ ...styleSkeleton, maxWidth: 100 }} />}
          {!loading && <>Telp. {phoneNumber}</>}
        </Typography>
      </Box>
    </Box>
  );
};

OrderDetailAddressInfo.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  address: PropTypes.string,
  phoneNumber: PropTypes.string,
};

OrderDetailAddressInfo.defaultProps = {
  loading: false,
  name: '',
  address: '',
  phoneNumber: '',
};

export default OrderDetailAddressInfo;
