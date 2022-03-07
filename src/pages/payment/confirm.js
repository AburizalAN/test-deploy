import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

import { StyledButton } from 'components/ui/button';
import { StyledModal } from 'components/ui/modal';
import { StyledTypography } from 'components/ui/typography';
import IconTrusted from 'components/icons/icon-trusted';
import InnerLayout from 'components/InnerLayout';
import Input from 'components/shared/Input';
import Select from 'components/shared/Select';
import { toBase64 } from 'utils/helper';
import ACTIONS from 'store/registerActions';
import { useUpdateEffect } from 'react-use';

const MAX_IMAGE_SIZE = 1024;

export const ConfirmPayment = (props) => {
  const {
    query: { id },
  } = props;
  const dispatch = useDispatch();

  const confirmState = useSelector((state) => state.confirm);
  const detailState = useSelector((state) => state.orderDetail);

  const [errorImage, setErrorImage] = useState('');
  const [srcBase64, setSrcBase64] = useState('');
  const [sizeSrcBase64, setSizeSrcBase64] = useState(0);
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const [widthBody, setWidthBody] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  useLayoutEffect(() => {
    dispatch(ACTIONS.orderDetail.getDetail(id));
  }, []);

  useEffect(() => {
    // set dynamic width fixed bottom
    setWidthBody(
      `${document.getElementById('__next').getBoundingClientRect().width}px`
    );
  }, []);

  useUpdateEffect(() => {
    if (confirmState?.loading) return;
    checkedStatus();
  }, [confirmState]);

  const formik = useFormik({
    validationSchema: Yup.object({
      order_number: Yup.string().required('Harus diisi'),
      destination: Yup.string().required('Harus diisi'),
      source: Yup.string().required('Harus diisi'),
      bank_account: Yup.string().required('Harus diisi'),
      amount: Yup.string().required('Harus diisi'),
      transfer_date: Yup.string().required('Harus diisi'),
      evidence: Yup.object({
        type: Yup.string().required('Harus diisi'),
        name: Yup.string().required('Harus diisi'),
        encoded_data: Yup.string().required('Harus diisi'),
      }),
    }),
    initialValues: {
      order_number: '',
      destination: '',
      source: '',
      bank_account: '',
      amount: '',
      transfer_date: '',
      evidence: {
        type: '',
        name: '',
        encoded_data: '',
      },
    },
    onSubmit: async (values) => {
      dispatch(ACTIONS.confirm.setConfirmPayment(values));
    },
  });

  if (detailState.data.data) {
    formik.values.order_number = detailState.data.data.increment_id;
  }

  const checkedStatus = () => {
    if (confirmState.success) {
      formik.resetForm();
      handleDeleteImage();
      handleOpen();
      setStatus(1);
    } else {
      handleOpen();
      setStatus(0);
    }
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleResetInputFile = () => {
    hiddenFileInput.current.type = 'text';
    hiddenFileInput.current.type = 'file';
  };

  const handleDeleteImage = () => {
    handleResetInputFile();

    formik.setValues({
      ...formik.values,
      evidence: { type: '', name: '', encoded_data: '' },
    });

    setErrorImage('');
    setSrcBase64('');
    setSizeSrcBase64(0);
  };

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    let prevUrl = storage?.prevPath ?? '/account';
    if (prevUrl === 'null') {
      prevUrl = '/account';
    }

    router.push(prevUrl);
  };

  const fileChange = (event) => {
    const fileSize = event[0].size;

    if (fileSize > MAX_IMAGE_SIZE * 1024) {
      setErrorImage('Ukuran melebihi 1MB!');
      return;
    }

    toBase64(event[0]).then((data) => {
      let slc = data.substring(0, data.indexOf(',')) + ',';
      let base = data.replace(slc, '');

      setErrorImage('');
      setSrcBase64(data);
      setSizeSrcBase64(fileSize);

      formik.setValues({
        ...formik.values,
        evidence: {
          type: event[0].type,
          name: event[0].name,
          encoded_data: base,
        },
      });
    });
  };

  const inner = {
    padding: '0 15px 50px',
  };

  const buttonDisabled = !formik.dirty || !formik.isValid;

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={false}
      hasOuterNav={true}
      bottomFixed={false}
      title="Konfirmasi Pembayaran"
      backable
      backUrl={null}
      onBackClick={handleBack}
    >
      <form onSubmit={formik.handleSubmit}>
        <div style={inner}>
          <FormControl fullWidth margin="dense">
            <label htmlFor="order_number">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Nomor Pesanan
              </Typography>
            </label>
            <Input
              id="order_number"
              name="order_number"
              disabled={Boolean(detailState?.data?.data?.increment_id)}
              value={
                detailState.data.data
                  ? detailState.data.data.increment_id
                  : formik.values.order_number
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukan Nomor Order"
            />
          </FormControl>

          <FormControl fullWidth margin="dense">
            <label htmlFor="destination">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Bank Tujuan
              </Typography>
            </label>
            <Select
              id="destination"
              name="destination"
              placeholder="-- Pilih Bank --"
              options={[
                { label: 'BNI', value: 'BNI' },
                { label: 'BCA', value: 'BCA' },
              ]}
              value={formik.values.destination}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl fullWidth margin="dense">
            <label htmlFor="source">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Bank yang digunakan
              </Typography>
            </label>
            <Select
              id="source"
              name="source"
              placeholder="-- Pilih Bank --"
              options={[
                { label: 'BCA', value: 'BCA' },
                { label: 'BRI', value: 'BRI' },
                { label: 'Bank Mandiri', value: 'Mandiri' },
                { label: 'BNI', value: 'BNI' },
                { label: 'BTN', value: 'BTN' },
                { label: 'CIMB Niaga', value: 'CIMB Niaga' },
                { label: 'Bank Lain', value: 'Bank Lain' },
              ]}
              value={formik.values.source}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl fullWidth margin="dense">
            <label htmlFor="bank_account">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Nama Pemilik Rekening
              </Typography>
            </label>
            <Input
              id="bank_account"
              name="bank_account"
              placeholder="Rekening atas nama"
              value={formik.values.bank_account}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl fullWidth margin="dense">
            <label htmlFor="amount">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Nominal Transfer
              </Typography>
            </label>
            <Input
              id="amount"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukan Nominal Transfer"
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <label htmlFor="date">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Tanggal Transfer
              </Typography>
            </label>
            <Input
              id="transfer_date"
              name="transfer_date"
              type="date"
              placeholder="Transfer pada tanggal..."
              value={formik.values.transfer_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ backgroundColor: '#fff' }}
            />
          </FormControl>

          <FormControl fullWidth margin="dense">
            <label htmlFor="file">
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Bukti Transfer
              </Typography>
            </label>
            <input
              ref={hiddenFileInput}
              id="evidence"
              name="evidence"
              type="file"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={(e) => {
                const files = e.target.files;
                fileChange(files);
              }}
            />
            {!srcBase64 && (
              <>
                <StyledButton
                  bgcolor="#FFFFFF"
                  textcolor="#265329"
                  width="200px"
                  height="40px"
                  mt={0}
                  onClick={handleClick}
                >
                  Upload Bukti Transfer
                </StyledButton>
                <label htmlFor="file">
                  <StyledTypography
                    color="#888"
                    padding="5px 0"
                    fontWeight="bold"
                  >
                    jpg, jpeg, png (1MB)
                  </StyledTypography>
                </label>
              </>
            )}
            <StyledTypography color="#fa6262" padding="5px 0" fontWeight="bold">
              {errorImage}
            </StyledTypography>
            {srcBase64 && (
              <>
                <Image
                  src={srcBase64}
                  width={200}
                  height={200}
                  layout="fixed"
                  objectFit="contain"
                />
                <StyledTypography
                  color="#888"
                  padding="5px 0"
                  fontWeight="bold"
                >
                  {formik.values.evidence.name} (
                  {(sizeSrcBase64 / (1024 * 1024)).toFixed(2)}MB)
                </StyledTypography>
                <StyledButton
                  bgcolor="#FFFFFF"
                  textcolor="#fa6262"
                  width="200px"
                  height="40px"
                  mt={0}
                  onClick={handleDeleteImage}
                >
                  Hapus
                </StyledButton>
              </>
            )}
          </FormControl>
        </div>

        <Box position="relative" width={widthBody}>
          <Box
            sx={{
              background: '#FFFFFF',
              boxShadow: '0px -3px 4px rgba(224, 224, 224, 0.59)',
              height: '80px',
              position: 'fixed',
              padding: '20px',
              width: 'inherit',
              bottom: '0',
            }}
          >
            <LoadingButton
              fullWidth
              disableElevation
              type="submit"
              variant="contained"
              loading={confirmState.loading}
              disabled={buttonDisabled}
              sx={{ borderRadius: 2 }}
            >
              Konfirmasi Pembayaran
            </LoadingButton>
          </Box>
        </Box>
      </form>

      <StyledModal open={open} handleClose={handleClose} minWidth="90vw">
        <StyledTypography size="13px" align="center" padding="20px 0">
          {status === 1 ? (
            <IconTrusted sx={{ width: '50px', height: '50px' }} />
          ) : (
            <h3>OOPS</h3>
          )}
          <div>
            {confirmState?.error ? (
              <>
                Konfirmasi Pembayaran Gagal.
                <br />
                {confirmState.error}
              </>
            ) : (
              <>
                Konfirmasi Pembayaran{' '}
                {status === 1 ? 'Berhasil' : 'Gagal, Cek Kembali Data'}
              </>
            )}
          </div>
        </StyledTypography>
        <StyledTypography align="center">
          <Button
            disableElevation
            variant="contained"
            sx={{ borderRadius: 2 }}
            onClick={handleClose}
          >
            OK
          </Button>
        </StyledTypography>
      </StyledModal>
    </InnerLayout>
  );
};

export function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query },
  };
}

ConfirmPayment.propTypes = {
  query: PropTypes.object,
};

ConfirmPayment.defaultProps = {
  query: null,
};

export default ConfirmPayment;
