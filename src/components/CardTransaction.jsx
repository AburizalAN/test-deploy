import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from 'react-loading-skeleton';

import ButtonTransaction from 'components/shared/ButtonTransaction';
import { STATUSES } from 'utils/const';
import { rupiah } from 'utils/currency';

const Header = styled(Stack)(() => ({
  '&&': {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 32,
    padding: '0 12px',
  },
}));

const Main = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 140,
  boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.1)',
  padding: '19px 12px 12px',
}));

const VDivider = styled(Box)(() => ({
  borderRight: '1px solid #DADADA',
  height: 24,
  margin: '0 8px',
}));

const CardTransaction = (props) => {
  let {
    loading,
    id,
    date,
    status,
    paymentMethod,
    productImage,
    merchantName,
    productName,
    productPrice,
    otherProduct,
    actions: { onPrimaryClick, onSecondaryClick },
    ...restProps
  } = props;

  const statusColor = STATUSES(status ? status : '').color;

  let buttonVariant, buttonLabel, buttonVariantSecondary, buttonLabelSecondary;
  switch (status) {
    case 'processing':
      break;

    case 'payment_review':
    case 'pending_payment':
      buttonVariant = 'success';
      buttonLabel = 'Bayar Sekarang';

      if (paymentMethod === 'banktransfer') {
        buttonVariant = 'success-outlined';
        buttonLabel = 'Konfirmasi Pembayaran';
      }
      break;

    case 'pending_complain':
      // hide prod
      // buttonVariant = 'success-outlined';
      // buttonLabel = 'Batalkan Komplain';
      break;

    case 'shipping':
      // hide prod
      // buttonVariant = 'success';
      // buttonLabel = 'Terima Pesanan';
      break;

    case 'success':
    case 'received':
    case 'canceled':
      // hide prod
      // buttonVariant = 'success';
      // buttonLabel = 'Beli Lagi';
      break;

    case 'complete':
      // hide prod
      // buttonVariant = 'success';
      // buttonLabel = 'Beli Lagi';
      // buttonVariantSecondary = 'success-outlined';
      // buttonLabelSecondary = 'Ajukan Komplain';
      break;

    default:
      buttonVariant = 'default';
      buttonLabel = 'Unknown Action';
      break;
  }

  id = id ? id : '-';
  date = date ? date : '-';
  status = STATUSES(status ? status : '').label;
  merchantName = merchantName && merchantName != '&nbsp' ? merchantName : '-';
  productName = productName ? productName : '-';
  productPrice = rupiah(productPrice ? productPrice : 0);
  otherProduct = otherProduct ? otherProduct : 0;

  return (
    <Box
      bgcolor="white"
      borderRadius={4}
      boxShadow="0px 0px 27px -13px rgba(0, 0, 0, 0.2)"
      overflow="hidden"
      position="relative"
      {...restProps}
    >
      <Header>
        <Typography
          variant="body2"
          title={!loading && id}
          width="33.33%"
          minWidth={0}
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {loading && (
            <Skeleton borderRadius={50} style={{ lineHeight: 0.6 }} />
          )}
          {!loading && id}
        </Typography>
        <VDivider />
        <Typography
          variant="body2"
          title={!loading && date}
          width="33.33%"
          minWidth={0}
          textOverflow="ellipsis"
          textAlign="center"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {loading && (
            <Skeleton borderRadius={50} style={{ lineHeight: 0.6 }} />
          )}
          {!loading && date}
        </Typography>
        <VDivider />
        <Typography
          variant="body2"
          title={!loading && status}
          width="33.33%"
          minWidth={0}
          fontWeight="bold"
          textOverflow="ellipsis"
          textAlign="right"
          overflow="hidden"
          whiteSpace="nowrap"
          color={statusColor}
        >
          {loading && (
            <Skeleton borderRadius={50} style={{ lineHeight: 0.6 }} />
          )}
          {!loading && status}
        </Typography>
      </Header>

      <Main>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="12px"
        >
          <Stack
            direction="row"
            minWidth={0}
            width="100%"
            gap="12px"
            overflow="hidden"
          >
            <Box
              width={40}
              height={40}
              backgroundColor="#F7F7F7"
              borderRadius={1}
              position="relative"
              overflow="hidden"
              flexShrink={0}
            >
              {loading && (
                <Skeleton
                  width="100%"
                  height="100%"
                  borderRadius={0}
                  style={{ lineHeight: 'unset' }}
                />
              )}
              {!loading && (
                <>
                  {productImage && <Image src={productImage} layout="fill" />}
                </>
              )}
            </Box>
            <Box width="100%" overflow="hidden">
              <Typography
                variant="body1"
                fontSize="15px"
                fontWeight="bold"
                whiteSpace="nowrap"
                lineHeight="20px"
                mb="6px"
              >
                {loading && (
                  <Skeleton
                    borderRadius={50}
                    style={{ maxWidth: 100, lineHeight: 0.6 }}
                  />
                )}
                {!loading && merchantName}
              </Typography>
              <Typography
                variant="body2"
                fontWeight="600"
                sx={() => {
                  let lineClamp = 2,
                    lineHeight = 18;

                  return {
                    display: '-webkit-box',
                    '-webkit-line-clamp': `${lineClamp}`,
                    '-webkit-box-orient': 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: `${lineClamp * lineHeight}px`,
                  };
                }}
              >
                {loading && (
                  <Skeleton
                    borderRadius={50}
                    style={{ maxWidth: 210, lineHeight: 0.6 }}
                  />
                )}
                {!loading && productName}
              </Typography>
              {Boolean(otherProduct || loading) && (
                <Typography
                  variant="overline3"
                  color="#6f6f6f"
                  whiteSpace="nowrap"
                >
                  {loading && (
                    <Skeleton
                      borderRadius={50}
                      style={{ maxWidth: 80, lineHeight: 0.6 }}
                    />
                  )}
                  {!loading && <>+{otherProduct} produk lainnya</>}
                </Typography>
              )}
            </Box>
          </Stack>
          <Box flexShrink={0} minWidth={60}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              textAlign="right"
              whiteSpace="nowrap"
            >
              {loading && (
                <Skeleton borderRadius={50} style={{ lineHeight: 0.6 }} />
              )}
              {!loading && productPrice}
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          gap={1}
          mt="13px"
        >
          {loading && (
            <Skeleton
              width={80}
              height={34}
              borderRadius={34 / 2}
              style={{ lineHeight: 'unset' }}
            />
          )}
          {!loading && (
            <>
              {buttonLabelSecondary && (
                <ButtonTransaction
                  variant={buttonVariantSecondary}
                  sx={{ position: 'relative', zIndex: 2 }}
                  onClick={onSecondaryClick}
                >
                  {buttonLabelSecondary}
                </ButtonTransaction>
              )}
              {buttonLabel && (
                <ButtonTransaction
                  variant={buttonVariant}
                  sx={{ position: 'relative', zIndex: 2 }}
                  onClick={onPrimaryClick}
                >
                  {buttonLabel}
                </ButtonTransaction>
              )}
            </>
          )}
        </Stack>
      </Main>

      {!loading && (
        <Link href={'/account/order/' + id} passHref>
          <ButtonBase
            title={!loading ? productName : ''}
            disableRipple
            sx={{
              position: 'absolute',
              top: 32,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 1,
            }}
          />
        </Link>
      )}
    </Box>
  );
};

CardTransaction.propTypes = {
  loading: PropTypes.bool,
  id: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.oneOf([
    'pending_payment',
    'payment_review',
    'processing',
    'shipping',
    'complete',
    'canceled',
    'pending_complain',
  ]),
  paymentMethod: PropTypes.string,
  productImage: PropTypes.string,
  merchantName: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  otherProduct: PropTypes.number,
  actions: PropTypes.shape({
    onPrimaryClick: PropTypes.func,
    onSecondaryClick: PropTypes.func,
  }),
};

CardTransaction.defaultProps = {
  loading: false,
  id: '',
  date: '',
  status: '',
  paymentMethod: '',
  productImage: '',
  merchantName: '',
  productName: '',
  productPrice: 0,
  otherProduct: 0,
  actions: {
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
  },
};

export default CardTransaction;
