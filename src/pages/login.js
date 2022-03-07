import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import styled from 'styled-components';
import Cookie from 'js-cookie';

// local imports
import Alert from 'components/Alert';
import Divider from 'components/shared/Divider';
import ArrowLeftCircleIcon from 'components/icons/arrow-left-circle';
import GoogleSquareIcon from 'components/icons/google-square';
import FacebookSquareIcon from 'components/icons/facebook-square';
import EmailIcon from 'components/icons/email';
import PasswordIcon from 'components/icons/password';
import illustrationImage from 'assets/img/login-illustration.webp';

import ACTIONS from 'store/registerActions';

const ButtonSocial = styled(ButtonBase)`
  && {
    width: 80px;
    height: 48px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    > svg {
      color: white;
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  const [loading, setLoading] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

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
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const { username, password } = values;

      dispatch(ACTIONS.login.authorize(username, password));
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  // !need full loading page design
  if (loading) return <>Please wait...</>;

  return (
    <>
      <Head>
        <title>Login - Awal Mula</title>
      </Head>

      <Alert />

      <Paper
        elevation={0}
        sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}
      >
        <Container maxWidth="sm">
          <Stack alignItems="flex-start" justifyContent="center" height={48}>
            <Link href="/" passHref>
              <IconButton edge="start">
                <ArrowLeftCircleIcon
                  sx={{ width: 24, height: 24, color: 'primary.main' }}
                />
              </IconButton>
            </Link>
          </Stack>
        </Container>
      </Paper>

      <Paper elevation={0} sx={{ py: 4, mt: -4 }}>
        <Container maxWidth="sm">
          <Stack alignItems="center" mb={-6}>
            <Image placeholder="blur" src={illustrationImage} />
          </Stack>
          <Typography variant="decorative1">Login</Typography>
          <Box px={3} mt={3}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="username"
                placeholder="Alamat Email"
                variant="standard"
                margin="normal"
                value={formik.values.username}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Kata Sandi"
                variant="standard"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        tabIndex={-1}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: '#25282B' }}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Stack alignItems="end" mt={1}>
                <Typography
                  variant="body2"
                  component="a"
                  href="/forget-password"
                  fontWeight="medium"
                  letterSpacing={0.25}
                  color="primary.main"
                  textAlign="right"
                  sx={{
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                  }}
                >
                  Lupa kata sandi?
                </Typography>
              </Stack>

              {loginState.error && (
                <Typography variant="body2" color="red" sx={{ mt: 2 }}>
                  {loginState.error}
                </Typography>
              )}

              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                disableElevation
                loading={loginState.loading}
                loadingPosition="start"
                sx={{ mt: 5, borderRadius: 2 }}
              >
                Masuk
              </LoadingButton>
            </form>

            {/* <Divider my={4}>Atau masuk dengan</Divider>

            <Stack alignItems="center">
              <Stack direction="row" gap={3}>
                <ButtonSocial>
                  <GoogleSquareIcon />
                </ButtonSocial>
                <ButtonSocial>
                  <FacebookSquareIcon />
                </ButtonSocial>
              </Stack>
            </Stack> */}
            <Typography
              textAlign="center"
              variant="body2"
              fontWeight="medium"
              letterSpacing={0.25}
              color="#828282"
              mt={4}
            >
              Belum memiliki akun?&nbsp;
              <Link href="/signup" passHref>
                <Typography
                  variant="inherit"
                  component="a"
                  fontWeight="medium"
                  letterSpacing="inherit"
                  color="primary.main"
                  sx={{ textDecoration: 'none' }}
                >
                  Daftar
                </Typography>
              </Link>
            </Typography>
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

Login.propTypes = {
  query: PropTypes.object,
};

Login.defaultProps = {
  query: {},
};

export default Login;
