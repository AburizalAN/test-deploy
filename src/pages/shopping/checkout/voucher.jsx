import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SERVICES from 'store/modules/coupon/services';

import AlertComponent from 'components/ui/shopping/AlertComponent';
import { ChildWrapper, Container, CustomContainer } from 'components/style';
import { EmptyStateWrapper } from 'components/ui/shopping/style';
import { useSelector } from 'react-redux';
import VoucherItem from 'components/ui/shopping/voucher/VoucherItem';
import moment from 'moment';

import {
  InputCodeVoucher,
  VoucherButton,
} from 'components/ui/shopping/voucher/voucher.style.js';

import Skeleton from 'react-loading-skeleton';

const icon_voucher = '/assets/icon_voucher.png';

import AppBar from 'components/AppBar';
import { Grid } from '@mui/material';

const Voucher = () => {
  const router = useRouter();
  const [voucherList, setVoucherList] = useState([]);
  const [isErrorVoucher, setIsErrorVoucher] = useState(false);
  const [isLoadingVoucher, setIsLoadingVoucher] = useState(false);
  const [isSubmitVoucher, setIsSubmitVoucher] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [code, setCode] = useState(null);
  const { redirect } = router.query;
  const { discount } = useSelector((state) => state.checkout);

  const submitVoucher = (code) => {
    // e.preventDefault();
    setIsSubmitVoucher(true);
    SERVICES.submitCoupon(code).then((res) => {
      if (res.data === true) {
        router.push(`${redirect}?voucher=${code}`);
      }

      if (res.status === 404) {
        setErrMsg(res.error?.message ?? 'Unknown');
        setIsErrorVoucher(true);
      }
      setIsSubmitVoucher(false);
    });
  };

  useEffect(() => {
    setIsLoadingVoucher(true);
    const fetchDataVoucher = async () => {
      const response = await fetch(`/api/voucher-claim`);
      const newData = await response.json();
      setVoucherList(
        newData.data?.filter((res) => res.description !== discount.desc)
      );
      setIsLoadingVoucher(false);
    };

    fetchDataVoucher();
  }, []);

  return (
    <Container>
      <AppBar
        title="Gunakan Voucher"
        backable
        noButton
        backUrl={`/shopping/checkout`}
      />
      <ChildWrapper>
        <CustomContainer padding="24px">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={9}>
              <InputCodeVoucher
                placeholder="Masukan kode voucher..."
                onChange={(e) => setCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <VoucherButton
                loading={isSubmitVoucher}
                loadingIndicator="Loading..."
                sx={{ bgcolor: '#265329', color: '#fff' }}
                color="primary"
                onClick={() => submitVoucher(code)}
              >
                Gunakan
              </VoucherButton>
            </Grid>
          </Grid>

          {isLoadingVoucher ? (
            [...Array(3)].map((_, i) => (
              <Skeleton
                height="100px"
                width="100%"
                key={i}
                style={{ marginBottom: '15px' }}
              />
            ))
          ) : (
            <>
              {voucherList.length ? (
                <>
                  {voucherList
                    ?.filter((res) =>
                      res.expired_date && moment(res.expired_date).isValid()
                        ? moment(res?.expired_date).diff(moment(new Date())) > 0
                          ? res
                          : null
                        : res
                    )
                    ?.filter((res) => res.transaction_state === 'claimed')
                    ?.map((val, key) => (
                      <VoucherItem
                        key={key}
                        img={val?.banner ?? icon_voucher}
                        bgcolor={val?.bg_color}
                        fontcolor="#fff"
                        title={val?.description}
                        valid={val?.expired_date}
                        blade
                        claimed={
                          moment(val.expired_date).diff(moment(new Date())) > 0
                            ? false
                            : true
                        }
                        current={discount}
                        handleRemove={() => {}}
                        handleSelect={() => {
                          submitVoucher(val.coupon_code);
                        }}
                      />
                    ))}
                </>
              ) : (
                <EmptyStateWrapper>
                  <img src="/assets/img/empty-voucher.png" alt="empty cart" />
                  <h3>Yah, Kamu belum punya voucher</h3>
                  <p>Voucher yang Kamu punya bakal muncul disini</p>
                </EmptyStateWrapper>
              )}
            </>
          )}
        </CustomContainer>
      </ChildWrapper>

      <AlertComponent
        severity="error"
        open={isErrorVoucher}
        onClose={() => {
          setIsErrorVoucher(false);
          setErrMsg('');
        }}
        message={errMsg}
      />
    </Container>
  );
};

export default Voucher;
