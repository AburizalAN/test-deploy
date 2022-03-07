import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import * as Yup from 'yup';
import Cookie from 'js-cookie';

// local imports
import ArrowLeftCircleIcon from 'components/icons/arrow-left-circle';
import EmailIcon from 'components/icons/email';

import ACTIONS from 'store/registerActions';
import Alert from 'components/Alert';

const ForgetPassword = () => {
  const heightBottom = 76;
  const router = useRouter();
  const dispatch = useDispatch();
  const forgetPasswordState = useSelector((state) => state.forgetPassword);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (Cookie.get('AMToken')) {
      if (router.asPath !== '/login') {
        window.location.replace(router.asPath);
      } else {
        window.location.replace('/');
      }
    } else {
      setLoading(false);
    }
  }, []);

  const formik = useFormik({
    validationSchema: Yup.object({
      username: Yup.string()
        .email('Format email salah')
        .required('Email harus diisi'),
    }),
    initialValues: {
      username: '',
    },
    onSubmit: async (values) => {
      const { username } = values;

      dispatch(ACTIONS.forgetPassword.sendEmail(username));
    },
  });

  const disabledButtonSubmit = !formik.dirty || !formik.isValid;

  // !need full loading page design
  if (loading) return <>Please wait...</>;

  return (
    <>
      <Head>
        <title>Lupa Kata Sandi - Awal Mula</title>
      </Head>

      <Alert />

      <Paper
        elevation={1}
        sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}
      >
        <Container maxWidth="sm">
          <Stack alignItems="flex-start" justifyContent="center" height={48}>
            <Link href="/login" passHref>
              <IconButton edge="start">
                <ArrowLeftCircleIcon
                  sx={{ width: 24, height: 24, color: 'primary.main' }}
                />
              </IconButton>
            </Link>
          </Stack>
        </Container>
      </Paper>

      <Paper elevation={0} sx={{ py: 4, mt: 6 }}>
        <Container maxWidth="sm">
          <Box px={3} mt={3}>
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="subtitle1" fontWeight="bold">
                Atur Ulang Kata Sandi
              </Typography>
              <Box mt="20px">
                <Typography variant="subtitle2" fontWeight="bold">
                  Silahkan masukkan alamat email anda di bawah ini untuk
                  menerima link reset sandi.
                </Typography>
                <TextField
                  fullWidth
                  name="username"
                  placeholder="Alamat Email"
                  variant="standard"
                  margin="normal"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: '#828282' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {forgetPasswordState?.error && (
                <Typography variant="body2" color="red" sx={{ mt: 2 }}>
                  {forgetPasswordState.error}
                </Typography>
              )}
              <Box position="fixed" right={0} bottom={0} left={0}>
                <Paper
                  elevation={3}
                  sx={{
                    height: heightBottom,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Container maxWidth="sm">
                    <Box px={2}>
                      <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        disableElevation
                        loading={forgetPasswordState.loading}
                        disabled={disabledButtonSubmit}
                        loadingPosition="start"
                        sx={{ borderRadius: 2 }}
                      >
                        Ganti Kata Sandi
                      </LoadingButton>
                    </Box>
                  </Container>
                </Paper>
              </Box>
            </form>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query },
  };
}

ForgetPassword.propTypes = {
  query: PropTypes.object,
};

ForgetPassword.defaultProps = {
  query: {},
};

export default ForgetPassword;
