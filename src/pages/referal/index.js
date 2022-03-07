import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import { Card, Grid } from '@mui/material';
import { StyledButton } from 'components/ui/button';
import { StyledTypography } from 'components/ui/typography';
import { StyledModal } from 'components/ui/modal';
import { StyledIconButton } from 'components/ui/iconButton';
import { StyledCardSection } from 'components/ui/cardSection';
import { Contact } from 'components/ui/contact';
import FacebookSquareIcon from 'components/icons/facebook-square';
import WhatsappSquareIcon from 'components/icons/whatsapp_square';
import CopySquareIcon from 'components/icons/copy_square';
import TwitterIcon from 'components/icons/twitter_square';
import Coin from 'components/icons/coin';
import Gift from 'components/icons/gift';
import Copy from 'components/icons/copy';
import Referal_1 from 'components/icons/referal_1';
import Referal_2 from 'components/icons/referal_2';
import Referal_3 from 'components/icons/referal_3';
import Referal_4 from 'components/icons/referal_4';
import { useState, useEffect, useLayoutEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import { StyledListedRules } from 'components/ui/listedRules';
import AlertComponent from 'components/ui/shopping/AlertComponent';
import SwipeableEdgeDrawer from 'components/ui/popup-drawer';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const Profile = '/assets/profileDummy.png';
const parts = {
  padding: '20px 10px',
};

const parts_slide = {
  padding: '0 10px',
  overflow: 'auto',
};

const access = {
  padding: '10px',
};

const caller = {
  width: '100%',
  textAlign: 'left',
  marginBottom: '10px',
};

const rules = {
  padding: '10px',
  textAlign: 'center',
  cursor: 'pointer  ',
};

const listHowTo = [
  {
    title: 'Invite Your Friend',
    desc: 'Bagikan link ke teman Kamu melalui sosial media.',
    img: <Referal_1 />,
  },
  {
    title: 'Registration & Verification',
    desc: 'Setelah teman Kamu mendaftarkan diri secara lengkap, verifikasi melalui alamat email.',
    img: <Referal_2 />,
  },
  {
    title: 'Make a Transaction',
    desc: 'Lakukan transaksi pembelanjaan dengan status berhasil menggunakan voucher yang didapat dari Kamu.',
    img: <Referal_3 />,
  },
  {
    title: 'Get Rewards',
    desc: 'Dapatkan rewards menarik  setelah teman Kamu berhasil registrasi dan menyelesaikan pesanan pertamanya',
    img: <Referal_4 />,
  },
];

const dataListSk = [
  {
    desc: 'Kamu hanya bisa membagikan kode referral kepada users yang belum mendaftarkan diri di Awal Mula.',
  },
  {
    desc: 'Hanya berlaku bagi pengguna baru yang belum pernah melakukan transaksi/pesanan di Awal Mula.',
  },
  {
    desc: 'Setiap kali berhasil mengajak pengguna baru, Kamu akan mendapat 10 Poin.',
  },
  {
    desc: 'Temanmu akan mendapat 10 poin setelah berhasil mendaftarkan diri di Awal Mula.',
  },
  {
    desc: 'Kamu akan mendapatkan 10 Poin lagi saat pengguna baru tersebut menyelesaikan pesanan pertamanya tanpa minimal pembelanjaan yang mana hanya berlaku satu kali.',
  },
  {
    desc: 'Temanmu yang berhasil melakukan pembelanjaan akan mendapatkan 100 poin.',
  },
  {
    desc: 'Awal Mula berhak mendiskualifikasi pengguna yang mengikuti Referral Program ini yang dianggap atau kedapatan melakukan hal-hal yang bersifat merugikan bagi Awal Mula, termasuk tidak terbatas pada tindak kecurangan dalam keterlibatannya di program ini.',
  },
  {
    desc: 'Voucher yang didapatkan dari penukaran program ini tidak bisa digunakan bersamaan dengan voucher yang lain saat melalukan transaksi.',
  },
  {
    desc: 'Jika terdapat pembuatan email/alamat pengiriman/nama pengguna/nomor telepon yang sama sejumlah lebih dari 1 kali, rewards tidak akan diberikan.',
  },
  { desc: 'Tidak ada batasan dalam mengundang teman.' },
];

const ref = {
  borderRadius: '13px',
  position: 'relative',
};
const ref_head = {
  background: "url('/assets/referal.png')",
  backgroundPosition: 'left',
  backgroundSize: 'cover',
  height: '120px',
  marginBottom: '10px',
};
const ref_body = {
  padding: '0',
  height: '168px',
  backgroundColor: '#E0E6E2',
};

const detail_body = {
  padding: '10px',
};

const Referal = (props) => {
  const router = useRouter();
  const [widthBody, setWidthBody] = React.useState(null);

  const [open, setOpen] = useState(false);
  const [openSk, setOpenSk] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const referalState = useSelector((state) => state.referal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.referal.getReferalCode());
      // set dynamic width fixed bottom
      setWidthBody(
        `${document.getElementById('__next').getBoundingClientRect().width}px`
      );
    } else {
      router.push('/login');
    }
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlertOpen(true);
  };

  const onClickShare = (panel) => {
    var urls = 'https://www.awalmula.co.id';
    var fb_uri = 'https://www.facebook.com/sharer/sharer.php?';
    var tw_uri = 'http://twitter.com/share?text=';
    var quote = '';
    var referal_code = referalState.listReferals.referral_code;
    var wa_uri = 'whatsapp://send?text=';
    let fb_share = '';
    let wa_share = '';

    switch (panel) {
      case 'url':
        quote = `Ayo, mulai berbelanja di Awal Mula. Nikmati rewards menarik. Gunakan kode referal ${referal_code} untuk mendapatkan point di awalmula. ${urls}`;
        copyToClipboard(quote);

        break;
      case 'fb':
        quote = `Ayo, mulai berbelanja di Awal Mula. Nikmati rewards menarik. Gunakan kode referal ${referal_code} untuk mendapatkan point di awalmula.`;
        fb_share = `${fb_uri}u=${urls}&quote=${quote}`;

        window.open(fb_share, '_blank');
        break;
      case 'wa':
        quote = `Ayo, mulai berbelanja di Awal Mula. Nikmati rewards menarik. Gunakan kode referal ${referal_code} untuk mendapatkan point di awalmula. ${urls}`;
        wa_share = `${wa_uri}${quote}`;

        window.open(wa_share, '_blank');
        break;
      case 'twitter':
        quote = `${tw_uri}Ayo, mulai berbelanja di Awal Mula. Nikmati rewards menarik. Gunakan kode referal ${referal_code} untuk mendapatkan point di awalmula.&url=${urls}`;

        window.open(quote.trim(), '_blank');
        break;
      case 'ig':
        break;

      default:
        break;
    }
  };

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={true}
      hasOuterNav={true}
      title="Referal Program"
      backable
      backUrl="/account"
    >
      <AlertComponent
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        message="success copied to clipboard"
      />

      <div style={parts}>
        <Card style={ref}>
          <div style={ref_head}></div>
          <div style={ref_body}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={5}>
                <Gift />
              </Grid>
              <Grid item xs={7} style={detail_body}>
                <StyledTypography
                  size="11px"
                  color="#265329"
                  fill="transparent"
                  align="center"
                >
                  Kode referralmu
                </StyledTypography>
                <StyledCardSection
                  minWidth="100%"
                  border="#265329"
                  bgcolor="transparent"
                  height="60px"
                >
                  <StyledTypography size="22px" weight="800" fill="transparent">
                    {referalState.listReferals.referral_code}
                  </StyledTypography>
                  <StyledIconButton
                    onClick={() =>
                      copyToClipboard(referalState.listReferals.referral_code)
                    }
                    bgcolor="transparent"
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
                <StyledButton
                  height="40px"
                  width="100%"
                  color="#FFF"
                  bgcolor="#265329"
                  onClick={() => setOpen(true)}
                >
                  Bagikan ke teman
                </StyledButton>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>

      <div style={parts}>
        <Grid container spacing={1}>
          <Grid xs={6} item>
            <StyledTypography size="22px" weight="800">
              Teman yang Kamu Undang
            </StyledTypography>
            <StyledTypography size="16px" color="#666" padding="0 5px 15px">
              Yuk, undang teman-teman kamu!
            </StyledTypography>
          </Grid>

          <Grid xs={3} item>
            <Contact>
              <img src={Profile} alt="banner" />
              <StyledTypography size="11px" color="#000" padding="10px 0 0">
                Jumlah diundang
              </StyledTypography>

              <StyledTypography
                size="11px"
                color="#6F6F6F"
                padding="0"
                weight="600"
              >
                {referalState.listReferals.invited_user
                  ? referalState.listReferals.invited_user
                  : 0}
              </StyledTypography>
            </Contact>
          </Grid>
          <Grid xs={3} item>
            <Contact>
              <Coin sx={{ width: '42px', height: '42px' }} />
              <StyledTypography size="11px" color="#000" padding="10px 0 0">
                Poin yang didapat
              </StyledTypography>

              <StyledTypography
                size="11px"
                color="#6F6F6F"
                padding="0"
                weight="600"
              >
                {referalState.listReferals.points
                  ? referalState.listReferals.points
                  : 0}
              </StyledTypography>
            </Contact>
          </Grid>
        </Grid>
      </div>

      <div style={access}>
        <StyledTypography size="22px" weight="700" padding="10px 5px">
          Cara Ikutan
        </StyledTypography>

        {listHowTo.map(function (data, idx) {
          return (
            <div style={caller} key={idx}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <div>{data.img}</div>
                </Grid>
                <Grid item xs={9}>
                  <StyledTypography
                    size="13px"
                    weight="700"
                    padding="0"
                    color="#265329"
                  >
                    {data.title}
                  </StyledTypography>
                  <StyledTypography
                    padding="0 0 20px"
                    size="13px"
                    weight="400"
                    color="#535353"
                  >
                    {data.desc}
                  </StyledTypography>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>

      <div style={rules} onClick={() => setOpenSk(true)}>
        <StyledTypography
          size="16px"
          weight="700"
          padding="5px"
          color="#265329"
        >
          Syarat & Ketentuan Undang Teman
        </StyledTypography>
      </div>

      <StyledModal
        open={open}
        handleClose={() => setOpen(false)}
        minWidth={widthBody}
      >
        <Grid item xs={12}>
          <StyledTypography size="20px" align="center" weight="700">
            Bagikan link
          </StyledTypography>
          <StyledTypography size="13px" align="center" padding="10px 0 20px">
            Undang temanmu untuk berbelanja di Awal Mula dan dapatkan rewards
            menarik
          </StyledTypography>
        </Grid>
        <Grid spacing={2} container justifyContent="center">
          <Grid item>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => onClickShare('fb')}
            >
              <FacebookSquareIcon sx={{ height: '40px', width: '40px' }} />
            </div>
          </Grid>
          <Grid item>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => onClickShare('wa')}
            >
              <WhatsappSquareIcon sx={{ height: '40px', width: '40px' }} />
            </div>
          </Grid>
          <Grid item>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => onClickShare('twitter')}
            >
              <TwitterIcon sx={{ height: '40px', width: '40px' }} />
            </div>
          </Grid>
          <Grid item>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => onClickShare('url')}
            >
              <CopySquareIcon sx={{ height: '40px', width: '40px' }} />
            </div>
          </Grid>
        </Grid>
      </StyledModal>

      {openSk && (
        <SwipeableEdgeDrawer
          height="80%"
          visible
          onVisible={() => setOpenSk(true)}
          onDismiss={() => setOpenSk(false)}
        >
          <div style={parts_slide}>
            {/* <div style={headerss}>
            <StyledIconButton
              bgcolor="#fff"
              border="none"
              onClick={() => setOpenSk(false)}
            >
              <CircleClose
                sx={{
                  stroke: '#6f6f6f',
                  strokeWidth: 2,
                  color: 'transparent',
                }}
              />
            </StyledIconButton>
          </div> */}
            <StyledTypography size="20px" weight="600" align="center">
              Syarat dan Ketentuan
            </StyledTypography>
            <StyledListedRules data={dataListSk} color="#333" />
          </div>
        </SwipeableEdgeDrawer>
      )}
    </InnerLayout>
  );
};

export default Referal;
