import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useDebounce } from 'react-use';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import DateAdapter from '@mui/lab/AdapterMoment';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import CalendarIcon from 'components/icons/calendar';
import InputSearchAccount from 'components/shared/InputSearchAccount';
import TabsTransaction from 'components/TabsTransaction';
import CardTransaction from 'components/CardTransaction';

import ACTIONS from 'store/registerActions';
import TYPES_TRANSACTION from 'store/modules/transaction/constants';
import { dateTimeToString } from 'utils/helper';

// all_status_from_magento = ['fraud', 'pending_payment', 'canceled', 'processing', 'shipping', 'complete', 'pending_complain', 'received', 'closed', 'payment_review']
// only use:
// 1. pending_payment dan payment_review itu di tab Menunggu Konfirmasi
// 2. processing di tab Diproses
// 3. shpping di tab Dikirim
// 4. complete di tab Selesai
// 5. canceled di tab Dibatalkan
// 6. pending_complain di tab Komplain Pesanan
const tabName = [
  { name: 'Semua', category: 'all' },
  { name: 'Menunggu Konfirmasi', category: 'pending_payment' },
  { name: 'Diproses', category: 'processing' },
  { name: 'Dikirim', category: 'shipping' },
  { name: 'Selesai', category: 'complete' },
  { name: 'Dibatalkan', category: 'canceled' },
  { name: 'Komplain Pesanan', category: 'pending_complain' },
];

const DateRangePickerTransaction = ({ value, onChange, onAccept }) => {
  const formattedStartDate = React.useMemo(() => {
    const [start] = value;

    if (!start) return '';
    return start?.format('DD/MM/yy');
  }, [value]);

  const formattedEndDate = React.useMemo(() => {
    const [, end] = value;

    if (!end) return '';
    return end?.format('DD/MM/yy');
  }, [value]);

  const isFormattedDate =
    Boolean(formattedStartDate) || Boolean(formattedEndDate);

  return (
    <ButtonBase
      disableRipple
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        minWidth: '40px',
        height: '36px',
        position: 'relative',
      }}
    >
      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDateRangePicker
          clearable
          showToolbar={false}
          value={value}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          onAccept={onAccept}
          renderInput={(startProps, endProps) => (
            <Box
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              overflow="hidden"
              sx={{ opacity: 0 }}
            >
              <input
                ref={startProps.inputRef}
                {...startProps.inputProps}
                style={{
                  display: 'block',
                  height: '100%',
                  cursor: 'pointer',
                }}
              />
              <input ref={endProps.inputRef} {...endProps.inputProps} />
            </Box>
          )}
        />
      </LocalizationProvider>
      {isFormattedDate && (
        <Box component="span" px={1}>
          {formattedStartDate} - {formattedEndDate}
        </Box>
      )}
      {!isFormattedDate && <CalendarIcon />}
    </ButtonBase>
  );
};

DateRangePickerTransaction.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onAccept: PropTypes.func,
};

const TransactionsPage = (props) => {
  const { query } = props;
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.me);
  const { loading, transactionList, filters } = useSelector(
    (state) => state.transaction
  );

  const router = useRouter();
  const tabValue = React.useMemo(() => query?.c || 'all', [query]);

  const [dateRange, setDateRange] = React.useState([null, null]);

  React.useEffect(() => {
    dispatch({
      type: TYPES_TRANSACTION.TRANSACTION.Redux.GET_TRANSACTION_LIST_LOADING,
    });
    dispatch(ACTIONS.me.getProfile());
  }, []);

  React.useEffect(() => {
    let statusValue;

    // 1. pending_payment dan payment_review itu di tab Menunggu Konfirmasi
    // 2. processing di tab Diproses
    // 3. shpping di tab Dikirim
    // 4. complete di tab Selesai
    // 5. canceled di tab Dibatalkan
    // 6. pending_complain di tab Komplain Pesanan
    switch (tabValue) {
      case 'all':
        statusValue = [
          'pending_payment',
          'payment_review',
          'processing',
          'shipping',
          'complete',
          'canceled',
          'pending_complain',
        ].join(',');
        break;
      case 'pending_payment':
        statusValue = ['pending_payment', 'payment_review'].join(',');
        break;
      default:
        statusValue = tabValue;
        break;
    }

    dispatch(
      ACTIONS.transaction.setFilters({
        ...filters,
        status: statusValue,
      })
    );
  }, [tabValue]);

  useDebounce(
    () => {
      if (profile?.id) {
        dispatch(ACTIONS.transaction.getTransactionList());
      }
    },
    250,
    [profile, filters]
  );

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    let prevUrl = storage?.prevPath ?? '/';
    if (prevUrl === 'null') {
      prevUrl = '/';
    }
    if (
      prevUrl.includes('/account/transactions') ||
      prevUrl.includes('/account/order') ||
      prevUrl === '/notification'
    ) {
      prevUrl = '/account';
    }

    router.push(prevUrl);
  };

  const handleTabChange = (_, newValue) => {
    let newQuery = {};

    if (newValue && newValue !== 'all') newQuery = { c: newValue };
    else newQuery = {};

    router.push({ pathname: `/account/transactions`, query: newQuery });
  };

  const handleDateRangeAccept = (newDateRange) => {
    const [start, end] = newDateRange;
    let formattedDateRange = ['', ''];

    if (!(!start || !end)) {
      formattedDateRange = [
        `${start?.format('yyyy-MM-DD')} 00:00:00`,
        `${end?.format('yyyy-MM-DD')} 23:59:59`,
      ];
    }

    dispatch(
      ACTIONS.transaction.setFilters({
        ...filters,
        dateRange: formattedDateRange,
      })
    );
  };

  const renderTransactionListLoading = React.useCallback(() => {
    return (
      <>
        <CardTransaction loading />
        <CardTransaction loading />
        <CardTransaction loading />
      </>
    );
  }, []);
  const renderMapTransactions = React.useCallback(
    ({
      id,
      orderId,
      createdAt,
      status,
      paymentMethod,
      grandTotal,
      items: [product, ...otherProduct],
    }) => {
      const formattedDate = createdAt ? dateTimeToString(createdAt) : '-';
      const productName = product?.name || '-';
      const brandName = product?.brand?.brand_name || '-';
      const file = product?.mediaGalleryEntries?.length
        ? product.mediaGalleryEntries[0]?.file
        : '';
      const productImage = process.env.NEXT_PUBLIC_BASE_IMAGE_URL + file;

      const handlePrimaryClick = () => {
        switch (status) {
          case 'payment_review':
          case 'pending_payment':
            if (paymentMethod === 'banktransfer') {
              router.push({
                pathname: `/payment/confirm`,
                query: { id },
              });
              break;
            }

            router.push({
              pathname: `/shopping/detail-order/[order_id]`,
              query: { order_id: orderId },
            });
            break;
        }
      };

      return (
        <CardTransaction
          key={id}
          id={id}
          date={formattedDate}
          status={status}
          merchantName={brandName}
          paymentMethod={paymentMethod}
          productImage={productImage}
          productName={productName}
          productPrice={grandTotal}
          otherProduct={otherProduct.length}
          actions={{ onPrimaryClick: handlePrimaryClick }}
        />
      );
    },
    []
  );

  return (
    <AccountLayout
      title="Daftar Transaksi"
      backable
      backUrl={null}
      onBackClick={handleBack}
    >
      <Box mb={4}>
        <Box height={118} />
        <Box position="fixed" top={48} right={0} left={0} zIndex={900}>
          <Paper elevation={0} sx={{ pb: 2 }}>
            <Container maxWidth="sm">
              <Stack direction="row" gap="28px" py={2}>
                <Stack flexGrow={1}>
                  <InputSearchAccount placeholder="Cari pesananmu..." />
                </Stack>
                <Stack flexShrink={0}>
                  <DateRangePickerTransaction
                    value={dateRange}
                    onChange={(newDateRange) => setDateRange(newDateRange)}
                    onAccept={handleDateRangeAccept}
                  />
                </Stack>
              </Stack>
            </Container>
            <Container disableGutters maxWidth="sm">
              <Box pl={2}>
                <TabsTransaction
                  variant="scrollable"
                  aria-label="notification tabs"
                  value={tabValue}
                  onChange={handleTabChange}
                  tabName={tabName}
                />
              </Box>
            </Container>
          </Paper>
        </Box>
        <Container maxWidth="sm">
          <Stack gap="20px" mt="19px">
            {loading && renderTransactionListLoading()}
            {!loading && [...transactionList].map(renderMapTransactions)}
          </Stack>
        </Container>
      </Box>
    </AccountLayout>
  );
};

export function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query },
  };
}

TransactionsPage.propTypes = {
  query: PropTypes.object,
};

TransactionsPage.defaultProps = {
  query: {},
};

export default withAuth('PRIVATE_ROUTE')(TransactionsPage);
