import { StyledModal as Modal } from 'components/ui/modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const ModalOutOfStock = ({ isOutOfStock }) => {
  const router = useRouter();

  const { loading } = useSelector((state) => state.checkout);

  return (
    <Modal minWidth="calc(100% - 48px)" open={!loading && isOutOfStock}>
      <Box mb="12px">
        Oops, beberapa product yang anda beli habis. Silahkan cek kembali
        belanjaan anda
      </Box>
      <Button
        fullWidth
        variant="contained"
        onClick={() => router.push(`/shopping/checkout`)}
      >
        Kembali ke Keranjang Saya
      </Button>
    </Modal>
  );
};

export default ModalOutOfStock;
