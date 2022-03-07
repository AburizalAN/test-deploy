import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from 'react-use';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import FormAddress from 'components/ui/account/FormAddress';

import ACTIONS from 'store/registerActions';

const TambahAlamatPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, success } = useSelector((state) => state.me);
  const { redirect = null } = router.query;

  React.useEffect(() => {
    dispatch(ACTIONS.me.getProfile());
  }, []);

  useUpdateEffect(() => {
    if (success && redirect !== null) {
      router.push(redirect);
    } else if (success) {
      router.replace('/account/address');
    }
  }, [success]);

  const handleSubmit = (values) => {
    dispatch(ACTIONS.me.addAddress(values));
  };

  return (
    <AccountLayout
      noButton
      bottomNav={false}
      title="Tambah Alamat"
      backable
      backUrl="/account/address"
    >
      <Paper elevation={0} sx={{ py: 2 }}>
        <Container maxWidth="sm">
          <FormAddress submitting={loading} onSubmit={handleSubmit} />
        </Container>
      </Paper>
    </AccountLayout>
  );
};

export default withAuth('PRIVATE_ROUTE')(TambahAlamatPage);
