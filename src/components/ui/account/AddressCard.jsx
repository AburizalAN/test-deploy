import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from 'react-loading-skeleton';

const AddressCard = (props) => {
  let {
    loading,
    selected,
    isMainAddress,
    addressId,
    name,
    addressName,
    addressDetail,
    phoneNumber,
    onClick,
    onDelete,
    ...restProps
  } = props;

  if (loading) {
    name = <Skeleton width={100} />;
    addressName = <Skeleton />;
    addressDetail = (
      <>
        <Skeleton count={2} />
        <Skeleton width="80%" />
      </>
    );
    phoneNumber = <Skeleton width={120} />;
  }

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        position: 'relative',
        borderColor: loading
          ? '#ebebeb'
          : selected
          ? '#789174'
          : 'rgba(0, 0, 0, 0.25)',
        backgroundColor: selected ? '#D2DAC380' : 'initial',
        borderRadius: 2,
        width: '100%',
      }}
      {...restProps}
    >
      <ButtonBase
        component="div"
        disableRipple
        sx={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        onClick={onClick}
      >
        <Stack direction="row" gap="12px" p="12px 12px 0">
          <Typography variant="subtitle2" fontWeight="bold" minWidth={50}>
            {addressName}
          </Typography>
          {isMainAddress && <MainAddress />}
        </Stack>
        <Box width="100%" p="12px">
          <Stack overflow="hidden">
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              {name}
            </Typography>
            <Typography
              variant="subtitle3"
              title={addressDetail}
              mb={1}
              sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {addressDetail}
            </Typography>
            <Typography variant="subtitle3">{phoneNumber}</Typography>
          </Stack>
        </Box>
        <Box height={51} />
      </ButtonBase>
      <Box position="absolute" bottom={0} left={0} p="12px">
        <Stack direction="row">
          {loading && <Skeleton width={100} height={25} />}
          {!loading && (
            <>
              <Link href={'/account/address/edit/' + addressId} passHref>
                <Button
                  disableElevation
                  size="small"
                  sx={{
                    textTransform: 'initial',
                    minWidth: 'initial',
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'primary.main',
                  }}
                >
                  Ubah
                </Button>
              </Link>
              <Box
                m="4px"
                sx={{
                  borderLeftWidth: '1px',
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'primary.main',
                }}
              />
              <Button
                disableElevation
                size="small"
                sx={{
                  textTransform: 'initial',
                  minWidth: 'initial',
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: 'primary.main',
                }}
                onClick={onDelete}
              >
                Hapus
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </Paper>
  );
};

function MainAddress() {
  return (
    <Box
      display="flex"
      alignItems="center"
      fontSize="9px"
      textAlign="center"
      lineHeight="12.28px"
      color="white"
      backgroundColor="#789174"
      height="18px"
      borderRadius="9px"
      px="12px"
    >
      Alamat Utama
    </Box>
  );
}

AddressCard.propTypes = {
  loading: PropTypes.bool,
  selected: PropTypes.bool,
  isMainAddress: PropTypes.bool,
  addressId: PropTypes.number,
  name: PropTypes.string,
  addressName: PropTypes.string,
  addressDetail: PropTypes.string,
  phoneNumber: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

AddressCard.defaultProps = {
  loading: false,
  selected: false,
  isMainAddress: false,
  addressId: 0,
  name: 'Put Your Name',
  addressName: 'Home',
  addressDetail: 'Jl. Asia Afrika Utara No.48, Meruya Utara, Jakarta Barat.',
  phoneNumber: '085812341234',
  onClick: () => {},
  onDelete: () => {},
};

export default AddressCard;
