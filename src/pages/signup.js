import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce, useUpdateEffect } from 'react-use';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import styled from 'styled-components';

// local imports
import withAuth from 'components/_hoc/withAuth';
import Divider from 'components/shared/Divider';
import GoogleSquareIcon from 'components/icons/google-square';
import FacebookSquareIcon from 'components/icons/facebook-square';
import EmailIcon from 'components/icons/email';
import PasswordIcon from 'components/icons/password';
import ArrowLeftCircleIcon from 'components/icons/arrow-left-circle';
import UserInputIcon from 'components/icons/user-input';
import CallIcon from 'components/icons/call';
import UserFriendsIcon from 'components/icons/user-friends';

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

const validationSchema = Yup.object({
  firstname: Yup.string().required('Nama depan harus diisi'),
  lastname: Yup.string().required('Nama belakang harus diisi'),
  email: Yup.string()
    .email('Mohon masukan alamat email dengan benar')
    .required('Alamat email harus diisi'),
  password: Yup.string().required('Kata sandi harus diisi'),
  phoneNumber: Yup.string()
    .min(7, 'Nomor telepon terlalu pendek')
    .max(15, 'Nomor telepon terlalu panjang')
    .required('Nomor telepon harus diisi'),
});

const Signup = () => {
  const heightBottom = 76;
  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);

  const [showPassword, setShowPassword] = React.useState(false);
  const [rawPhoneNumber, setRawPhoneNumber] = React.useState('');

  useDebounce(
    () => {
      if (!rawPhoneNumber || rawPhoneNumber.length < 6) return;
      const parsed = rawPhoneNumber.toString().replace(/^(628|08|8*)/g, '628');
      formik.setFieldValue('phoneNumber', parsed);
    },
    1000,
    [rawPhoneNumber]
  );

  const formik = useFormik({
    validationSchema,
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phoneNumber: '',
      referralCode: '',
    },
    onSubmit: async (values) => {
      dispatch(ACTIONS.signup.registerCustomer(values));
    },
  });

  useUpdateEffect(() => {
    if (signupState.success) {
      formik.resetForm();
    }
  }, [signupState.success]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const disabledButtonSubmit = !formik?.dirty || !formik?.isValid;

  return (
    <>
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
          <Box position="relative">
            <Typography variant="decorative1">Sign Up</Typography>

            {signupState.success && (
              <Box position="absolute" top={0} left={0} right={0}>
                <Paper elevation={0}>
                  <Alert
                    variant="outlined"
                    iconMapping={{
                      success: (
                        <CheckCircleOutlineIcon
                          sx={{ fontSize: 28, color: 'primary.main' }}
                        />
                      ),
                    }}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={() => {
                          dispatch(ACTIONS.signup.reset());
                        }}
                      >
                        <CancelIcon
                          sx={{ fontSize: 24, color: 'primary.main' }}
                        />
                      </IconButton>
                    }
                    sx={{
                      '&.MuiAlert-root': {
                        borderRadius: 2,
                      },
                      '&.MuiAlert-outlinedSuccess': {
                        backgroundColor: '#EDF7ED',
                        color: 'primary.main',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    {signupState.success}
                  </Alert>
                </Paper>
              </Box>
            )}
          </Box>
          <Box px={3} mt={3}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="firstname"
                placeholder="Nama Depan"
                variant="standard"
                margin="normal"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserInputIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                name="lastname"
                placeholder="Nama Belakang"
                variant="standard"
                margin="normal"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserInputIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                name="email"
                placeholder="Alamat Email"
                variant="standard"
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ mb: 3 }}
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
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{ mb: 3 }}
                InputProps={{
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                name="phoneNumber"
                placeholder="Nomor Telepon"
                variant="standard"
                margin="normal"
                value={formik.values.phoneNumber}
                onChange={({ target: { value } }) => {
                  const isInvalid =
                    !/^(8|08?|62?|628?)/g.test(value) &&
                    value.length > 0 &&
                    value.length <= 2;

                  if (isInvalid) {
                    return;
                  }

                  setRawPhoneNumber(value);
                  formik.setFieldValue('phoneNumber', value);
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                name="referralCode"
                placeholder="Kode Referal"
                variant="standard"
                margin="normal"
                value={formik.values.referralCode}
                onChange={formik.handleChange}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserFriendsIcon sx={{ color: '#828282' }} />
                    </InputAdornment>
                  ),
                }}
              />
              {signupState.error && (
                <Typography variant="body2" color="red" sx={{ mt: 2 }}>
                  {signupState.error}
                </Typography>
              )}
              {/* <Divider mt={6} mb={3}>
                Atau daftar dengan
              </Divider>
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
                        disabled={disabledButtonSubmit}
                        loading={signupState.loading}
                        loadingPosition="start"
                        sx={{ borderRadius: 2 }}
                      >
                        Buat Akun
                      </LoadingButton>
                    </Box>
                  </Container>
                </Paper>
              </Box>
            </form>
          </Box>
        </Container>
      </Paper>
      <Box height={heightBottom} mt={2} />
    </>
  );
};

export default withAuth('PRIVATE_ROUTE')(Signup);
