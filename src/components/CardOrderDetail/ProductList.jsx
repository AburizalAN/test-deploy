import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useUpdateEffect } from 'react-use';
import Skeleton from 'react-loading-skeleton';

import DocumentCopyIcon from 'components/icons/document-copy';
import Stepper from 'components/shared/Stepper';
import { rupiah } from 'utils/currency';
import { ButtonBase } from '@mui/material';
import { copyTextToClipboard } from 'utils/helper';

const OrderDetailProductList = (props) => {
  let {
    loading,
    merchantName,
    status,
    deliveryService,
    orderId,
    receiptId,
    currentTimeline,
    products,
    ...restProps
  } = props;

  const styleSkeleton = { borderRadius: 50, width: '100%' };

  const [copied, setCopied] = React.useState(false);

  useUpdateEffect(() => {
    let timeout;

    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  const handleCopyReceiptId = async (receiptId) => {
    await copyTextToClipboard(receiptId);
    setCopied(true);
  };

  merchantName = merchantName ? merchantName : '-';
  status = status ? status : '-';
  deliveryService = deliveryService ? deliveryService : '-';
  orderId = orderId ? orderId : '-';
  receiptId = receiptId ? receiptId : '-';

  const mapProduct = React.useCallback(
    (product, index) => {
      let {
        id,
        productDesc,
        productName,
        productImage,
        qty,
        weight,
        unit,
        price,
      } = product;

      const key = id ? id : index;
      const totalPrice = rupiah((price ? price : 0) * (qty ? qty : 0));

      productDesc = productDesc ? productDesc : '-';
      productName = productName ? productName : '-';
      qty = qty ? qty : 0;
      weight = weight ? weight : 0;
      unit = unit ? unit.substr(0, 2) : '';
      price = rupiah(price ? price : 0);

      return (
        <Stack
          key={key}
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          gap={loading ? '24px' : '12px'}
          py="9px"
          overflow="hidden"
        >
          <Stack direction="row" width="100%" gap="12px">
            <Box
              width={40}
              height={40}
              backgroundColor="#F7F7F7"
              borderRadius={1}
              overflow="hidden"
              position="relative"
              sx={{ flexShrink: 0 }}
            >
              {loading && (
                <Skeleton
                  style={{
                    ...styleSkeleton,
                    height: '100%',
                    borderRadius: 0,
                    lineHeight: 'unset',
                  }}
                />
              )}
              {!loading && <Image layout="fill" src={productImage} />}
            </Box>
            <Box width="100%">
              <Typography variant="subtitle1" lineHeight="20px" mb="6px">
                {loading && (
                  <Skeleton style={{ ...styleSkeleton, maxWidth: 100 }} />
                )}
                {!loading && productName}
              </Typography>
              <Typography variant="body2" fontWeight="600" mb="2px">
                {loading && <Skeleton count={2} style={{ ...styleSkeleton }} />}
                {!loading && productDesc}
              </Typography>
              <Typography variant="caption" color="#6f6f6f">
                {loading && (
                  <Skeleton style={{ ...styleSkeleton, maxWidth: 200 }} />
                )}
                {!loading && (
                  <>
                    {qty} Produk{' '}
                    {weight && unit ? (
                      <>
                        ( {weight}
                        {unit} )
                      </>
                    ) : (
                      ''
                    )}{' '}
                    x {price}
                  </>
                )}
              </Typography>
            </Box>
          </Stack>
          <Typography
            minWidth={80}
            variant="subtitle2"
            fontWeight="bold"
            color="#6f6f6f"
          >
            {loading && <Skeleton style={{ ...styleSkeleton }} />}
            {!loading && totalPrice}
          </Typography>
        </Stack>
      );
    },
    [products, loading]
  );

  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.15)"
      width="100%"
      p="12px"
      {...restProps}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="16px"
      >
        <Typography minWidth={100} variant="subtitle1" fontWeight="bold">
          {loading && <Skeleton style={{ ...styleSkeleton }} />}
          {!loading && merchantName}
        </Typography>
        <Typography minWidth={100} variant="caption" color="#6f6f6f">
          {loading && <Skeleton style={{ ...styleSkeleton }} />}
          {!loading && status}
        </Typography>
      </Stack>

      <Stack gap="12px" pt="7px" pb="20px">
        {loading && [0, 1].map(mapProduct)}
        {!loading && products.map(mapProduct)}
      </Stack>

      {!loading && (
        <>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderTop="2px solid #D1D1D6"
            gap="12px"
            pt="16px"
          >
            <Stack gap="4px">
              <Typography
                variant="caption"
                fontSize="10px"
                fontWeight={600}
                color="#6f6f6f"
              >
                Jasa Pengiriman
              </Typography>
              <Typography variant="subtitle2" fontWeight={600}>
                {deliveryService}
              </Typography>
            </Stack>
            <Stack alignItems="flex-end" gap="4px">
              <Typography
                variant="caption"
                fontSize="10px"
                fontWeight={600}
                color="#6f6f6f"
              >
                Nomor Resi
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <ButtonBase
                  disableRipple
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '4px',
                  }}
                  onClick={() => handleCopyReceiptId(receiptId)}
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    {receiptId}
                  </Typography>
                  <DocumentCopyIcon
                    copied={copied}
                    sx={{
                      flexShrink: 0,
                      width: 20,
                      height: 20,
                      color: copied ? '#E9B632' : '#6f6f6f ',
                    }}
                  />
                </ButtonBase>
              </Stack>
            </Stack>
          </Stack>

          <Stack py={2} px={3}>
            <Stepper
              step={currentTimeline}
              steps={[
                { label: 'Sedang diproses', value: 'step-1' },
                { label: 'Sedang dikirim', value: 'step-2' },
                { label: 'Dalam Pengiriman', value: 'step-3' },
                { label: 'Selesai', value: 'step-4' },
              ]}
            />
          </Stack>

          <Stack alignItems="center">
            <Link
              href={`/account/order/${orderId}?selectedReceiptId=${receiptId}`}
              passHref
            >
              <ButtonBase disableRipple>
                <Typography
                  variant="body2"
                  textAlign="center"
                  lineHeight="20px"
                  color="#6f6f6f"
                >
                  Lihat Detail
                </Typography>
              </ButtonBase>
            </Link>
          </Stack>
        </>
      )}
    </Box>
  );
};

OrderDetailProductList.propTypes = {
  loading: PropTypes.bool,
  merchantName: PropTypes.string,
  status: PropTypes.string,
  deliveryService: PropTypes.string,
  orderId: PropTypes.string,
  receiptId: PropTypes.string,
  currentTimeline: PropTypes.string,
  products: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.number,
      productName: PropTypes.string,
      productDesc: PropTypes.string,
      productImage: PropTypes.string,
      qty: PropTypes.number,
      weight: PropTypes.number,
      unit: PropTypes.string,
      price: PropTypes.number,
    }),
  ]),
};

OrderDetailProductList.defaultProps = {
  loading: false,
  merchantName: '',
  status: '',
  deliveryService: '',
  orderId: '',
  receiptId: '',
  currentTimeline: 'step-1',
  products: [],
};

export default OrderDetailProductList;
