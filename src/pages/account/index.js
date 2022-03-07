import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import Alert from 'components/Alert';
import CardMulaPoint from 'components/CardMulaPoint';
import MenuList from 'components/MenuList';
import UserGreeting from 'components/ui/account/UserGreeting';
import ButtonLogout from 'components/shared/ButtonLogout';
import ContainerSection from 'components/shared/ContainerSection';

import ACTIONS from 'store/registerActions';

const AccountPage = () => {
  const dispatch = useDispatch();
  const {
    me: { loading, profile },
    referal: referalState,
  } = useSelector((state) => state);

  const fullname = React.useMemo(() => {
    const { firstname, lastname } = profile;

    if (!firstname && !lastname) return '';
    return firstname + ' ' + lastname;
  }, [profile]);
  const [voucherCount, setVoucherCount] = React.useState(0);

  React.useEffect(() => {
    dispatch(ACTIONS.me.getProfile());
    dispatch(ACTIONS.referal.getReferalCode());

    const fetchDataVoucher = async () => {
      const response = await fetch(`/api/voucher-claim`);
      const newData = await response.json();
      setVoucherCount(
        newData.data?.filter((res) => res.status === 'claimed')?.length ?? 0
      );
    };

    fetchDataVoucher();
  }, []);

  return (
    <AccountLayout title="Akun Saya" appBar={false}>
      <Alert />

      <Paper elevation={0}>
        <UserGreeting loading={loading} name={fullname} />
        <ContainerSection noTitle sx={{ pb: 4 }}>
          <CardMulaPoint
            version="1.0.0-alpha" // 1.0.0 (default) | 1.0.0-alpha | 1.0.0-alpha.1
            mulaPoints={
              referalState?.listReferals?.points
                ? parseInt(referalState.listReferals.points)
                : 0
            }
            voucher={voucherCount}
          />
        </ContainerSection>

        <ContainerSection disableGutters title="Akun" sx={{ pb: 4 }}>
          <MenuList
            menu={[
              {
                key: 'informasi-pribadi',
                label: 'Informasi Pribadi',
                url: '/account/edit',
              },
              {
                key: 'alamat-pengiriman',
                label: 'Alamat Pengiriman',
                url: '/account/address',
              },
              {
                key: 'ubah-kata-sandi',
                label: 'Ubah Kata Sandi',
                url: '/account/change-password',
              },
              // {
              //   key: 'notifikasi',
              //   label: 'Notifikasi',
              //   url: '/notification',
              // },
            ]}
          />
        </ContainerSection>
        <ContainerSection disableGutters title="Pembelian" sx={{ pb: 4 }}>
          <MenuList
            menu={[
              {
                key: 'daftar-transaksi',
                label: 'Daftar Transaksi',
                url: '/account/transactions',
              },
              {
                key: 'konfirmasi-pembayaran',
                label: 'Konfirmasi Pembayaran',
                url: '/payment/confirm',
              },
              // {
              //   key: 'wishlisth-bookmark',
              //   label: 'Wishlist & Bookmark',
              //   url: '/wishlisth-bookmark',
              // },
            ]}
          />
        </ContainerSection>
        {/* hiddenProd */}
        <ContainerSection disableGutters title="Customer" sx={{ pb: 6 }}>
          <MenuList
            menu={[
              {
                key: 'referral-program',
                label: 'Referral Program',
                url: '/referal',
              },
              {
                key: 'claim-rewards',
                label: 'Klaim Rewards',
                url: '/reward',
              },
              {
                key: 'my-rewards',
                label: 'Rewards Saya',
                url: '/reward/owned',
              },
            ]}
          />
        </ContainerSection>
      </Paper>
      <Container disableGutters maxWidth="sm">
        <ButtonLogout href="/logout" />
      </Container>
    </AccountLayout>
  );
};

export default withAuth('PRIVATE_ROUTE')(AccountPage);
