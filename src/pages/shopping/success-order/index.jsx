import { MainContainer, ChildWrapper } from 'components/style';
import styled from 'styled-components';
import AppBar from 'components/AppBar';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';

const SuccessImage = '/assets/img/success-transaction.png';

const ThisContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ThisChildWrapper = styled(ChildWrapper)`
  margin-bottom: 0;
  padding: 16px;
  flex: 1;
`;
const Button = styled(MuiButton)`
  border-radius: 15px !important;
`;
const HeaderContent = styled.div`
  text-align: center;
  img {
    width: 145px;
    margin-bottom: 12px;
  }
  .title {
    font-size: 18px;
    font-weight: 800;
    color: #a7bf6f;
    line-height: 24.55px;
    margin-bottom: 14px;
  }
  p {
    font-size: 15px;
    line-height: 20.46px;
    margin-bottom: 40px;
    color: #4d6044;
  }
`;
const Bar = styled.div`
  &:first-child {
    background-color: #eef1ed;
    border: none;
  }
  box-sizing: border-box;
  border: 2px solid #f7f7f7;
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #4d6044;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  span:nth-child(2) {
    font-weight: bold;
  }
`;

const SuccessOrder = () => {
  const router = useRouter();

  return (
    <ThisContainer>
      <AppBar title="Keranjang Saya" backUrl={`/shopping`} backable noButton />
      <ThisChildWrapper>
        <HeaderContent>
          <div>
            <img src={SuccessImage} alt="Success Image" />
          </div>
          <div className="title">Transaksi Berhasil</div>
          <p>
            Terima Kasih sudah berbelanja di Awal Mula. Pesananmu sedang Kami
            proses
          </p>
          <div>
            <Bar>
              <span>Jumlah Pembayaran</span>
              <span>Rp 80.400</span>
            </Bar>
            <Bar>
              <span>Metode Pembayaran</span>
              <span>BCA VA</span>
            </Bar>
            <Bar>
              <span>Nomor Transaksi</span>
              <span>23478301708801</span>
            </Bar>
          </div>
        </HeaderContent>
      </ThisChildWrapper>
      <Box
        p="12px"
        sx={{
          backgroundColor: 'white',
          boxShadow: '0px -3px 4px 0px #00000010',
          zIndex: 999,
        }}
      >
        <Button
          disableElevation
          fullWidth
          sx={{ mb: '8px' }}
          variant="contained"
          onClick={() => router.push('/')}
        >
          Lihat Detail Pemesanan
        </Button>
        <Button fullWidth variant="outlined">
          Kembali ke Beranda
        </Button>
      </Box>
    </ThisContainer>
  );
};

export default SuccessOrder;
