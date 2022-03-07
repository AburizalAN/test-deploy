import styled from 'styled-components';
import { ChildWrapper, MainContainer } from 'components/style';
import AppBar from 'components/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const DetailVoucher = () => {
  const router = useRouter();

  const DetailVoucherHeader = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #e89a02;
    border-radius: 15px;
    position: relative;
    .top-content {
      height: 141px;
      width: 100%;
      display: flex;
      .right {
        min-width: 60%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .left {
        min-width: 40%;
        font-size: 22px;
        font-weight: 700;
        line-height: 30.01px;
        padding: 15px;
        color: white;
        display: flex;
        align-items: center;
      }
    }
    .bottom-content {
      padding: 15px 20px;
      font-size: 15px;
      font-weight: 700;
      line-height: 20.46px;
      color: white;
    }
    .devider {
      height: 8px;
      background-image: linear-gradient(
        to right,
        white 60%,
        rgba(255, 255, 255, 0) 40%
      );
      background-position: 0px 50%;
      background-size: 40px 100%;
      background-radius: 15px;
      background-repeat: repeat-x;
    }
    &::before {
      content: '';
      background-color: white;
      display: flex;
      width: 20px;
      height: 40px;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      position: absolute;
      top: 125px;
      left: 0px;
    }
    &::after {
      content: '';
      background-color: white;
      display: flex;
      width: 18px;
      height: 40px;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      position: absolute;
      top: 125px;
      right: 0px;
    }
  `;

  const DetailVoucherContent = styled.div`
    width: 100%;
    padding: 15px 0px;
    header {
      font-size: 18px;
      font-weight: 800;
      line-height: 24.55px;
    }
    ol {
      padding: 0 20px;
      font-size: 13px;
      li {
        margin-bottom: 8px;
      }
    }
  `;

  const ThisContainer = styled(MainContainer)`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const ThisChildWrapper = styled(ChildWrapper)`
    padding: 20px 12px;
  `;

  return (
    <ThisContainer>
      <AppBar
        title="Keranjang Saya"
        backable
        noButton
        backUrl="/shopping/voucher"
      />
      <ThisChildWrapper>
        <DetailVoucherHeader>
          <div className="top-content">
            <div className="left">Disc. 30%</div>
            <div className="right">
              <img src="/assets/img/voucher-image-large.png" alt="voucher" />
            </div>
          </div>
          <div className="devider"></div>
          <div className="bottom-content">
            {`Voucher Diskon 30% Health & Wellness Maksimal Potongan Rp 20.000`}
          </div>
        </DetailVoucherHeader>
        <DetailVoucherContent>
          <header>Syarat & Ketentuan</header>
          <ol>
            <li>Point hadiah yang dibutuhkan: 50 Point.</li>
            <li>Diskon hingga Rp 20.000 tanpa minimal pembelanjaan.</li>
            <li>Berlaku hingga 17 Desember 2022.</li>
            <li>Voucher berlaku untuk semua metode pembayaran.</li>
            <li>Tidak bisa digabung dengan promo lain.</li>
            <li>
              Awal Mula berhak melakukan tindakan yang diperlukan apabila diduga
              terjadi tindakan kecurangan dari pengguna yang merugikan pihak
              Awal Mula.
            </li>
            <li>
              Dengan menggunakan voucher ini, pengguna dianggap mengerti dan
              menyetujui semua Syarat & Ketentuan yang berlaku.
            </li>
          </ol>
        </DetailVoucherContent>
      </ThisChildWrapper>
      <Box p="12px" sx={{ borderTop: '1px solid #E0E0E0' }}>
        <Button
          variant="contained"
          fullWidth
          disableElevation
          sx={{ borderRadius: '12px' }}
          mt={0}
          onClick={() => router.push('/shopping/checkout?voucher=AU8KAM10MULA')}
        >
          Pakai Voucher
        </Button>
      </Box>
    </ThisContainer>
  );
};

export default DetailVoucher;
