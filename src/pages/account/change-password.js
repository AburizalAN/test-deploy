import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import ACTIONS from 'store/registerActions';
import { useUpdateEffect } from 'react-use';

const validationSchema = yup.object({
  currentPassword: yup
    .string('Masukan kata sandi saat ini')
    .required('Kata sandi saat ini harus diisi'),
  newPassword: yup
    .string('Masukan kata sandi baru')
    .required('Kata sandi baru harus diisi'),
  confirmPassword: yup
    .string('Masukan konfimasi kata sandi')
    .required('Konfirmasi kata sandi baru harus diisi')
    .oneOf([yup.ref('newPassword'), null], 'Kata sandi tidak cocok'),
});

const ChangePasswordPage = () => {
  const heightBottom = 76;
  const dispatch = useDispatch();
  const router = useRouter();

  const { redirect = null } = router.query;

  const { loading, success, error } = useSelector((state) => state.me);

  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  useUpdateEffect(() => {
    if (success && redirect !== null) {
      router.push(redirect);
    } else if (success) {
      router.replace('/account');
    }
  }, [success]);

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: ({ currentPassword, newPassword }) => {
      dispatch(ACTIONS.me.changePassword({ currentPassword, newPassword }));
    },
  });

  const disabledButtonSubmit = !formik.dirty || !formik.isValid;

  return (
    <AccountLayout
      title="Ubah Kata Sandi"
      noButton
      backable
      backUrl="/account"
      bottomNav={false}
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper elevation={0} sx={{ py: 2 }}>
          <Container maxWidth="sm">
            <TextField
              fullWidth
              type={showOldPassword ? 'text' : 'password'}
              variant="standard"
              margin="normal"
              label="Kata Sandi Saat Ini"
              placeholder="Masukan Kata Sandi Saat Ini"
              id="currentPassword"
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.currentPassword &&
                Boolean(formik.errors.currentPassword)
              }
              helperText={
                formik.touched.currentPassword && formik.errors.currentPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowOldPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      tabIndex={-1}
                      sx={{ color: '#25282B' }}
                    >
                      {showOldPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              variant="standard"
              margin="normal"
              label="Kata Sandi Baru"
              placeholder="Masukan Kata Sandi Baru"
              id="newPassword"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      tabIndex={-1}
                      sx={{ color: '#25282B' }}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              variant="standard"
              margin="normal"
              label="Konfirmasi Kata Sandi Baru"
              placeholder="Masukan Konfirmasi Kata Sandi Baru"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      tabIndex={-1}
                      sx={{ color: '#25282B' }}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && (
              <Typography variant="body2" color="red" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </Container>
        </Paper>
        <Box height={heightBottom} mt={2} />
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
              <LoadingButton
                fullWidth
                disableElevation
                variant="contained"
                disabled={disabledButtonSubmit}
                loading={loading}
                sx={{ borderRadius: 2 }}
                type="submit"
              >
                Simpan
              </LoadingButton>
            </Container>
          </Paper>
        </Box>
      </form>
    </AccountLayout>
  );
};

export default withAuth('PRIVATE_ROUTE')(ChangePasswordPage);
