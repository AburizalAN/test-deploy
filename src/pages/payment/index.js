import PaymentLayout from 'components/PaymentLayout';
import { StyledAlert } from 'components/ui/alert';
import { StyledButton } from 'components/ui/button';
import { StyledCardSection } from 'components/ui/cardSection';
import { StyledIconButton } from 'components/ui/iconButton';
import { StyledTypography } from 'components/ui/typography';
import Copy from 'components/icons/copy';
import { Grid } from '@mui/material';
import { StyledListBank } from 'components/ui/listBank';

const data = [
  {
    icon: 'http://4.bp.blogspot.com/-5xzWMlb-0_Q/VisDq1SA6CI/AAAAAAAAAp0/z1jNL7O--gE/w1200-h630-p-k-no-nu/logo%2Bbank%2BBCA%2Bcoreldraw.png',
    title: 'BCA Virtual Account',
    subtitle: `Lihat Cara Pembayaran`,
    value: 'BCA',
  },
];
export const Payment = () => {
  return (
    <PaymentLayout>
      <StyledAlert icon={false} bgcolor="#EBF9F2" align="center">
        <p>Segera Lakukan Pembayaran Dalam Waktu</p>
        <h2>23 jam : 59 menit : 25 detik</h2>
        <p>Sebelum Hari Kamis 28 November 2021 Jam 09:54</p>
      </StyledAlert>

      <StyledListBank data={data} radio={false} link={true} />

      <StyledAlert
        icon={false}
        variant="outlined"
        bgcolor="#FFF"
        border="#D8D8D8"
        align="center"
        textcolor="#6F6F6F"
      >
        <StyledTypography color="#000000" size="20px" weight="bold">
          Menunggu Pembayaran
        </StyledTypography>
        <StyledTypography color="#6F6F6F" padding="0 0 20px">
          Mohon selesaikan pembayaran anda sebelum tanggal 6 Agustus 2021 jam
          09.53 WIB dengan rincian sebagai berikut
        </StyledTypography>

        <StyledCardSection minWidth="250px">
          <h3>423453465</h3>
          <StyledButton
            bgcolor="#FFFFFF"
            textcolor="#486140"
            border="#486140"
            height="30px"
          >
            Copy
          </StyledButton>
        </StyledCardSection>

        <p>Jumlah yang harus dibayar</p>

        <StyledCardSection minWidth="120px" border="none">
          <h2>Rp 90.400</h2>
          <StyledIconButton
            bgcolor="#FFFFFF"
            textcolor="#486140"
            border="none"
            minwidth="flat"
          >
            <Copy
              sx={{
                stroke: '#6f6f6f',
                strokeWidth: 2,
                color: 'transparent',
              }}
            />
          </StyledIconButton>
        </StyledCardSection>
      </StyledAlert>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <StyledButton
            bgcolor="#FFFFFF"
            textcolor="#486140"
            border="#486140"
            fullWidth="true"
            size="large"
          >
            Lanjut Belanja
          </StyledButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledButton
            bgcolor="#486140"
            textcolor="#FFFFFF"
            border="#486140"
            fullWidth="true"
            size="large"
          >
            Cek Status Pembayaran
          </StyledButton>
        </Grid>
      </Grid>
    </PaymentLayout>
  );
};

export default Payment;
