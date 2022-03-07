import React from 'react';
import { useRouter } from 'next/router';
import { useBeforeUnload, useDebounce, useUpdateEffect } from 'react-use';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Skeleton from 'react-loading-skeleton';
import * as yup from 'yup';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import Avatar from 'components/shared/Avatar';

import ACTIONS from 'store/registerActions';

const defaultBirtdate = new Date('1995').toISOString().split('T')[0];

const validationSchema = yup.object({
  firstname: yup
    .string('Masukan nama depan')
    .required('Nama depan harus diisi'),
  lastname: yup
    .string('Masukan nama belakang')
    .required('Nama belakang harus diisi'),
  email: yup
    .string('Masukan email')
    .email('Masukan email dengan benar')
    .required('Email harus diisi'),
});

const InformasiPribadiPage = () => {
  const buttonRef = React.useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const { redirect = null } = router.query;

  const { loading, success, profile } = useSelector((state) => state.me);

  const [rawPhoneNumber, setRawPhoneNumber] = React.useState('');

  useDebounce(
    () => {
      if (!rawPhoneNumber || rawPhoneNumber.length < 6) return;
      const parsed = rawPhoneNumber.toString().replace(/^(628|08|8*)/g, '628');
      formik.setFieldValue('phone', parsed);
    },
    1000,
    [rawPhoneNumber]
  );

  const handleSubmit = () => {
    const { current: buttonEl } = buttonRef;

    buttonEl.click();
  };

  React.useEffect(() => {
    dispatch(ACTIONS.me.getProfile());
  }, []);

  useUpdateEffect(() => {
    if (success && redirect !== null) {
      router.push(redirect);
    } else if (success) {
      router.replace('/account');
    }
  }, [success]);

  React.useEffect(() => {
    const {
      firstname = '',
      lastname = '',
      custom_attributes,
      email,
      gender,
      dob,
    } = profile;

    const phone =
      custom_attributes?.find(
        (attr) => attr?.attribute_code === 'customer_telephone'
      )?.value || '';
    const image =
      process.env.NEXT_PUBLIC_BASE_IMAGE_URL +
      '/' +
      (custom_attributes?.find(
        (attr) => attr?.attribute_code === 'avatar_picture'
      )?.value || '');

    if (!loading) {
      formik.setValues({
        ...formik.values,
        image,
        firstname,
        lastname,
        phone,
        email,
        gender,
        birthdate: dob || defaultBirtdate,
      });
    }
  }, [loading, profile]);

  const formik = useFormik({
    initialValues: {
      image: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      gender: 2,
      birthdate: defaultBirtdate,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(ACTIONS.me.editProfile(values));
    },
  });

  useBeforeUnload(formik.dirty, 'You have unsaved changes, are you sure?');

  return (
    <AccountLayout
      title="Informasi Pribadi"
      backable
      backUrl="/account"
      buttonComponent={
        <LoadingButton
          variant="contained"
          size="small"
          disableElevation
          loading={loading}
          sx={{ textTransform: 'initial', fontSize: 13, lineHeight: 1.5 }}
          onClick={handleSubmit}
        >
          Simpan
        </LoadingButton>
      }
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper elevation={0} sx={{ py: 2 }}>
          <Container maxWidth="sm">
            <Stack alignItems="center" py={2}>
              {loading && (
                <Skeleton
                  style={{ width: 100, height: 100, borderRadius: '50%' }}
                />
              )}
              {!loading && (
                <Avatar
                  edit
                  id="upload-user-avatar"
                  sx={{ width: 100, height: 100 }}
                  src={formik.values.image}
                  onSrcChange={(image) => {
                    formik.setFieldValue('image', image);
                  }}
                />
              )}
            </Stack>
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              label="Nama Depan"
              placeholder="Masukan nama depan"
              id="firstname"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              label="Nama Belakang"
              placeholder="Masukan nama belakang"
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              label="Nomor Ponsel"
              placeholder="Masukan nomor ponsel"
              id="phone"
              name="phone"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
                type: 'number',
              }}
              value={formik.values.phone}
              onChange={({ target: { value } }) => {
                const isInvalid =
                  !/^(8|08?|62?|628?)/g.test(value) &&
                  value.length > 0 &&
                  value.length <= 2;

                if (isInvalid) {
                  return;
                }

                setRawPhoneNumber(value);
                formik.setFieldValue('phone', value);
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              label="Alamat Email"
              placeholder="Masukan email"
              id="email"
              name="email"
              disabled
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Container>
        </Paper>
        <Box height={10} />
        <Paper elevation={0} sx={{ pt: 3, pb: 5 }}>
          <Container maxWidth="sm">
            <FormControl component="fieldset">
              <FormLabel component="legend">Jenis Kelamin</FormLabel>
              <RadioGroup
                row
                aria-label="jenis kelamin"
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label={
                    <Typography variant="subtitle2" fontWeight="normal">
                      Perempuan
                    </Typography>
                  }
                  sx={{ mr: 6 }}
                />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label={
                    <Typography variant="subtitle2" fontWeight="normal">
                      Laki-laki
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              InputLabelProps={{ shrink: true }}
              type="date"
              label="Tanggal Lahir"
              id="birthdate"
              name="birthdate"
              value={formik.values.birthdate}
              onChange={formik.handleChange}
            />
          </Container>
        </Paper>
        <button ref={buttonRef} type="submit" style={{ display: 'none' }} />
      </form>
    </AccountLayout>
  );
};

export default withAuth('PRIVATE_ROUTE')(InformasiPribadiPage);
