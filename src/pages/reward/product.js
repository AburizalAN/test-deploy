import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import { Voucher } from 'components/ui/voucher';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { StyledListedRules } from 'components/ui/listedRules';
import { StyledTypography } from 'components/ui/typography';
import { Alert, Button, Grid, Skeleton } from '@mui/material';
import SwipeableEdgeDrawer from 'components/ui/popup-drawer';

const icon_products = '/assets/icon_product.png';

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
  { id: 1, desc: 'Point hadiah yang dibutuhkan: [point]' },
  { id: 2, desc: 'Berlaku hingga 1 Minggu setelah klaim/penukaran produk.' },
  {
    id: 3,
    desc: 'Product redeem akan dikirimkan jika customer melakukan pembelanjaan dalam kurun waktu 1 Minggu setelah klaim.',
  },
  { id: 4, desc: 'Khusus pembelian produk dari Warehouse Awal Mula.' },
  { id: 5, desc: 'Berlaku untuk semua metode pembayaran' },
  { id: 6, desc: 'Tidak ada minimal pembelanjaan' },
  {
    id: 7,
    desc: 'Awal Mula berhak melakukan tindakan yang diperlukan apabila diduga terjadi tindakan kecurangan dari pengguna yang merugikan pihak Awal Mula',
  },
  {
    id: 8,
    desc: 'Dengan menggunakan voucher ini, pengguna dianggap mengerti dan menyetujui semua Syarat & Ketentuan yang berlaku',
  },
  {
    id: 9,
    desc: 'Produk yang di claim tidak dapat di batalkan',
  },
];

const DetailProduct = () => {
  const query = useRouter().query;
  const [widthBody, setWidthBody] = React.useState(null);

  const [claimed, setClaimed] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [alertMassage, setAlertMassage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [claimProduct, setClaimProduct] = React.useState(null);
  const [detail, setDetail] = React.useState(null);
  const [productLoading, setProductLoading] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitProduct = async (id) => {
    try {
      let values = {
        product_id: id,
        qty: 1,
      };

      handleClose();
      setIsLoading(true);

      const claim = await fetch('/api/product-confirm', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      const claimResponse = await claim.json();

      setIsLoading(false);

      if (claimResponse?.data) {
        setClaimed(1);
        setClaimProduct(claimResponse.data);
        setAlertMassage(
          claimResponse?.data?.message ??
            "Sorry, can't claim this product right now. try again later"
        );
        fetchDataProduct();
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
      point: `${detail?.price} Point`,
    });

    return replace;
  };

  const fetchDataProduct = async () => {
    const response = await fetch(
      `/api/product-claimed-detail?id=${query.product_id}`
    );
    const newData = await response.json();

    setDetail(newData.data[0]);
    setProductLoading(false);
  };

  React.useEffect(() => {
    // set dynamic width fixed bottom
    setWidthBody(
      `${document.getElementById('__next').getBoundingClientRect().width}px`
    );

    fetchDataProduct();
  }, []);

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={false}
      hasOuterNav={true}
      title="Detail Product"
      backable
      backUrl="/reward"
    >
      <Box paddingBottom="5vh">
        <div style={content}>
          {productLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30vh"
              sx={{ borderRadius: '10px' }}
            />
          ) : (
            <Voucher
              img={detail?.image ?? icon_products}
              bgcolor="#E89A02"
              fontcolor="#fff"
              key={detail?.id}
              desc={detail?.product_desc}
              claimed={detail?.status === 'open' ? false : true}
              contentHeight="60px"
              innerWidth
              innerDetail={detail?.product_name}
            ></Voucher>
          )}
        </div>

        <div style={content}>
          {productLoading ? (
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
      </Box>

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
                  severity={claimProduct?.status === 200 ? 'success' : 'error'}
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
                disabled={
                  detail?.qty === '0' ||
                  detail?.status === 'claimed' ||
                  isLoading
                }
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
              Ingin menukar dengan {detail?.product_name}
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
                  onClick={() => handleSubmitProduct(detail?.id)}
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

export default DetailProduct;
