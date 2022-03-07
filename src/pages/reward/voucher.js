import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import { Voucher } from 'components/ui/voucher';
import { Box } from '@mui/system';
import { StyledListedRules } from 'components/ui/listedRules';
import { StyledTypography } from 'components/ui/typography';
import { Alert, Button, Grid, Skeleton } from '@mui/material';
import SwipeableEdgeDrawer from 'components/ui/popup-drawer';
import { useRouter } from 'next/router';

const icon_voucher = '/assets/icon_voucher.png';

const content = {
  padding: '15px',
};

const parts_slide = {
  padding: '0 10px',
  overflow: 'auto',
  marginBottom: '-100px !important',
  position: 'absolute',
  width: '100%',
  bottom: 0,
};

const dataList = [
  { id: 1, desc: 'Point hadiah yang dibutuhkan: [point].' },
  { id: 2, desc: 'Diskon hingga [price] tanpa minimal pembelanjaan.' },
  {
    id: 3,
    desc: 'Product redeem akan dikirimkan jika customer melakukan pembelanjaan dalam kurun waktu 1 Minggu setelah klaim.',
  },
  { id: 4, desc: 'Berlaku hingga [valid]' },
  { id: 5, desc: 'Tidak bisa digabung dengan promo lain' },
  {
    id: 6,
    desc: 'Awal Mula berhak melakukan tindakan yang diperlukan apabila diduga terjadi tindakan kecurangan dari pengguna yang merugikan pihak Awal Mula.',
  },
  {
    id: 7,
    desc: 'Dengan menggunakan voucher ini, pengguna dianggap mengerti dan menyetujui semua syarat & ketentuan yang berlaku.',
  },
  {
    id: 8,
    desc: 'Voucher yang diklaim tidak dapat dibatalkan.',
  },
];

const DetailVoucher = () => {
  const query = useRouter().query;
  const [widthBody, setWidthBody] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const [claimed, setClaimed] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [alertMassage, setAlertMassage] = React.useState('');
  const [claimVoucher, setClaimVoucher] = React.useState(null);
  const [detail, setDetail] = React.useState(null);
  const [loadingVoucher, setLoadingVoucher] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitVoucher = async (id) => {
    try {
      let values = {
        voucher_id: id,
        qty: 1,
      };

      handleClose();
      setIsLoading(true);

      const claim = await fetch('/api/voucher-confirm', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      const claimResponse = await claim.json();

      setIsLoading(false);
      if (claimResponse?.data) {
        setClaimed(1);
        setClaimVoucher(claimResponse.data);
        if (claimResponse.data?.status === 200) {
          setAlertMassage('Voucher has been claim successfully');
        } else {
          setAlertMassage(claimResponse.data?.message);
        }
        fetchDataVoucher();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  String.prototype.fmt = function (hash) {
    var string = this,
      key;
    for (key in hash)
      string = string.replace(new RegExp('\\[' + key + '\\]', 'gm'), hash[key]);
    return string;
  };

  const assignValue = (value) => {
    var replace = value.fmt({
      point: `${detail?.point} Point`,
      price: `Rp ${new Intl.NumberFormat('id').format(
        parseInt(detail?.discount, 10)
      )}`,
      valid: detail?.toDate,
    });

    return replace;
  };

  const fetchDataVoucher = async () => {
    const response = await fetch(`/api/voucher-detail?id=${query?.coupon_id}`);
    const newData = await response.json();

    setDetail(newData.data[0]);
    setLoadingVoucher(false);
  };

  React.useEffect(() => {
    // set dynamic width fixed bottom
    setWidthBody(
      `${document.getElementById('__next').getBoundingClientRect().width}px`
    );

    fetchDataVoucher();
  }, []);

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={false}
      hasOuterNav={true}
      title="Detail Voucher"
      backable
      backUrl={detail?.from || '/reward'}
    >
      <div style={content}>
        {loadingVoucher ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="30vh"
            sx={{ borderRadius: '10px' }}
          />
        ) : (
          <Voucher
            img={detail?.banner ?? icon_voucher}
            bgcolor={detail?.bg_color}
            fontcolor="#fff"
            key={detail?.coupon_id}
            desc={detail?.description}
            claimed={detail?.status === 'open' ? 0 : 1}
            contentHeight="60px"
            innerWidth
            innerDetail={detail?.name}
          ></Voucher>
        )}
      </div>

      <div style={content}>
        {loadingVoucher ? (
          <>
            <Skeleton
              animation="wave"
              variant="h1"
              width="50%"
              sx={{ mb: 2 }}
            />
            {[...Array(10)].map((val, key) => (
              <Skeleton animation="wave" key={key} />
            ))}
          </>
        ) : (
          <>
            <StyledTypography size="18px" weight="800" padding="0">
              Syarat & Ketentuan
            </StyledTypography>
            <StyledListedRules
              data={dataList?.map((val) => ({
                id: val.id,
                desc: assignValue(val.desc),
              }))}
              color="#333"
            />
          </>
        )}
      </div>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box position="relative" width={widthBody}>
            {claimed === 1 ? (
              <Box
                sx={{
                  height: '80px',
                  position: 'fixed',
                  width: '100%',
                  padding: '20px',
                  left: '0',
                  bottom: '80px',
                }}
              >
                <Alert
                  severity={claimVoucher?.status === 500 ? 'error' : 'success'}
                  onClose={() => setClaimed(null)}
                >
                  {alertMassage}
                </Alert>
              </Box>
            ) : (
              <></>
            )}

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
              <Button
                fullWidth
                disableElevation
                variant="contained"
                sx={{
                  borderRadius: 2,
                }}
                onClick={handleOpen}
                // disabled={
                //   detail?.qty === '0' ||
                //   detail?.status === 'claimed' ||
                //   isLoading
                // }
              >
                {isLoading
                  ? 'Loading...'
                  : detail?.qty === '0'
                  ? 'Tidak tersedia'
                  : detail?.status === 'claimed'
                  ? 'Sudah diklaim'
                  : 'Gunakan'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {open && (
        <SwipeableEdgeDrawer
          height="30%"
          visible
          // onVisible={() => setOpenSk(true)}
          onDismiss={handleClose}
        >
          <div style={parts_slide}>
            <StyledTypography size="20px" weight="600" align="center">
              Ingin menukar dengan {detail?.name}
            </StyledTypography>
            <Grid container spacing={1} sx={{ mt: 0.5 }}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleClose}
                  fullWidth
                >
                  Batal
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleSubmitVoucher(detail?.coupon_id)}
                  fullWidth
                >
                  Konfirmasi
                </Button>
              </Grid>
            </Grid>
            {/* <StyledListedRules data={dataListSk} color="#333" /> */}
          </div>
        </SwipeableEdgeDrawer>
      )}
    </InnerLayout>
  );
};

export default DetailVoucher;
