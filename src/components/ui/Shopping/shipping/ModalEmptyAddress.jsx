import { StyledModal as Modal } from 'components/ui/modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const ModalEmptyAddress = () => {
  const router = useRouter();

  const { address_list, loading } = useSelector((state) => state.checkout);
  const test = useSelector((state) => state.checkout);

  return (
    <Modal
      minWidth="calc(100% - 48px)"
      open={!loading && address_list.length == 0}
    >
      <Box mb="12px">
        Oops, anda belum memasukkan alamat. Silahkan isi alamat terlebih dahulu
      </Box>
      <Button
        fullWidth
        variant="contained"
        onClick={() =>
          router.push(`/account/address/add?redirect=${router.asPath}`)
        }
      >
        isi Alamat
      </Button>
    </Modal>
  );
};

export default ModalEmptyAddress;
