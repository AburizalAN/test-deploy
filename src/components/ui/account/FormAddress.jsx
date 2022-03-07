import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDebounce } from 'react-use';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CheckBox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';

import Input from 'components/shared/Input';
import Select from 'components/shared/Select';
import SelectRegion from 'components/SelectRegion';
import SelectCity from 'components/SelectCity';
import SelectDistrict from 'components/SelectDistrict';
import { ADDRESSES_LABEL } from 'utils/constant';

const validationSchema = Yup.object({
  addressLabel: Yup.string().required('Label alamat harus diisi'),
  firstname: Yup.string().required('Nama depan harus diisi'),
  lastname: Yup.string().required('Nama belakang harus diisi'),
  phoneNumber: Yup.string()
    .min(7, 'Nomor telepon terlalu pendek')
    .max(15, 'Nomor telepon terlalu panjang')
    .required('Nomor telepon harus diisi'),
  fullAddress: Yup.string().required('Alamat lengkap harus diisi'),
  region: Yup.object().shape({
    region: Yup.string().required('Provinsi harus diisi'),
  }),
  city: Yup.string().required('Kota harus diisi'),
  district: Yup.string().required('Kecamatan harus diisi'),
  postalCode: Yup.string().required('Kode pos harus diisi'),
});

const FormAddress = (props) => {
  const heightBottom = 76;
  const { initialValues, submitting, onSubmit } = props;

  const [rawPhoneNumber, setRawPhoneNumber] = React.useState('');

  const formik = useFormik({
    validationSchema,
    initialValues: {
      addressLabel: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      fullAddress: '',
      region: {
        id: 0,
        region: '',
        regionId: 0,
        regionCode: '',
        ...initialValues.region,
      },
      city: '',
      cityId: 0,
      district: '',
      districtId: 0,
      postalCode: '',
      isMainAddress: false,
      ...initialValues,
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const submitDisabled = !formik.dirty || !formik.isValid;

  useDebounce(
    () => {
      if (!rawPhoneNumber || rawPhoneNumber.length < 6) return;
      const parsed = rawPhoneNumber.toString().replace(/^(628|08|8*)/g, '628');
      formik.setFieldValue('phoneNumber', parsed);
    },
    1000,
    [rawPhoneNumber]
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth margin="normal">
        <label htmlFor="addressLabel">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Label Alamat
          </Typography>
        </label>
        <Select
          id="addressLabel"
          name="addressLabel"
          placeholder="Pilih label alamat"
          options={ADDRESSES_LABEL.map((addr) => ({
            label: addr,
            value: addr,
          }))}
          value={formik.values.addressLabel}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="firstname">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Nama Penerima
          </Typography>
        </label>
        <Stack direction="row" gap={2}>
          <FormControl fullWidth>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Nama Depan"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Nama Belakang"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Stack>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="phoneNumber">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Nomor Ponsel
          </Typography>
        </label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          placeholder="628xxxxxxxx"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
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
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="fullAddress">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Alamat Lengkap
          </Typography>
        </label>
        <Input
          multiline
          rows="4"
          id="fullAddress"
          name="fullAddress"
          placeholder="Nama jalan dan nomor bangunan"
          value={formik.values.fullAddress}
          onChange={({ target: { value } }) => {
            const currentLine = value.split('\n').length;

            if (currentLine > 2) return;
            formik.setFieldValue('fullAddress', value);
          }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="region">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Provinsi
          </Typography>
        </label>
        <SelectRegion
          id="region"
          name="region"
          placeholder="Pilih Provinsi"
          value={formik.values.region?.region}
          onChange={(_, option) => {
            const { setValues } = formik;

            setValues({
              ...formik.values,
              region: {
                id: parseInt(option?.id || 0),
                region: option?.label || '',
                regionId: parseInt(option?.value || 0),
                regionCode: option?.region_code || '',
              },
              city: '',
              cityId: 0,
              district: '',
              districtId: 0,
            });
          }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="city">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Kota/Kabupaten
          </Typography>
        </label>
        <SelectCity
          regionId={formik.values.region?.id}
          id="city"
          name="city"
          placeholder="Pilih Kota/Kabupaten"
          value={formik.values.city}
          onChange={(_, option) => {
            const { setValues } = formik;

            setValues({
              ...formik.values,
              city: option?.label || '',
              cityId: parseInt(option?.value || 0),
              district: '',
              districtId: 0,
            });
          }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="district">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Kecamatan
          </Typography>
        </label>
        <SelectDistrict
          cityId={formik.values.cityId}
          id="district"
          name="district"
          placeholder="Pilih Kecamatan"
          value={formik.values.district}
          onChange={(_, option) => {
            const { setValues } = formik;

            setValues({
              ...formik.values,
              district: option?.label || '',
              districtId: parseInt(option?.value || 0),
            });
          }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label htmlFor="name">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Kode Pos
          </Typography>
        </label>
        <Input
          id="postalCode"
          name="postalCode"
          placeholder="Kode Pos"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl margin="normal">
        <FormControlLabel
          control={
            <CheckBox
              checked={formik.values.isMainAddress}
              onChange={({ target: { checked } }) =>
                formik.setFieldValue('isMainAddress', checked)
              }
            />
          }
          label="Jadikan Alamat Utama"
        />
      </FormControl>
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
            <Stack direction="row" gap={2} px={2}>
              <Link href="/account/address" passHref>
                <Button
                  fullWidth
                  disableElevation
                  variant="outlined"
                  sx={{ borderRadius: 2 }}
                >
                  Batal
                </Button>
              </Link>
              <LoadingButton
                fullWidth
                disableElevation
                type="submit"
                variant="contained"
                disabled={submitDisabled}
                loading={submitting}
                loadingPosition="start"
                sx={{ borderRadius: 2 }}
              >
                Simpan
              </LoadingButton>
            </Stack>
          </Container>
        </Paper>
      </Box>
      <Box height={heightBottom} mt={2} />
    </form>
  );
};

FormAddress.propTypes = {
  edit: PropTypes.bool,
  submitting: PropTypes.bool,
  initialValues: PropTypes.shape({
    addressLabel: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    phoneNumber: PropTypes.string,
    fullAddress: PropTypes.string,
    region: PropTypes.shape({
      id: PropTypes.number,
      region: PropTypes.string,
      regionId: PropTypes.number,
      regionCode: PropTypes.string,
    }),
    city: PropTypes.string,
    cityId: PropTypes.number,
    district: PropTypes.string,
    districtId: PropTypes.number,
    postalCode: PropTypes.string,
    isMainAddress: PropTypes.bool,
  }),
  onSubmit: PropTypes.func,
};

FormAddress.defaultProps = {
  edit: false,
  submitting: false,
  initialValues: {
    addressLabel: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    fullAddress: '',
    region: { id: 0, region: '', regionId: 0, regionCode: '' },
    city: '',
    cityId: 0,
    district: '',
    districtId: 0,
    postalCode: '',
    isMainAddress: false,
  },
  onSubmit: () => {},
};

export default FormAddress;
