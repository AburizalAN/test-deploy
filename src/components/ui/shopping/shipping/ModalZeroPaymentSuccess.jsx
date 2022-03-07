import { StyledModal as Modal } from 'components/ui/modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

const ModalZeroPaymentSuccess = ({ isOpen, onClose }) => {
  const router = useRouter();

  return (
    <Modal minWidth="calc(100% - 48px)" open={isOpen}>
      <Box mb="12px">Pembayaran dengan Zero Payment berhasil dilakukan.</Box>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          router.push(`/account/transactions`);
          onClose();
        }}
      >
        Lihat Detail Transaksi
      </Button>
    </Modal>
  );
};

export default ModalZeroPaymentSuccess;
