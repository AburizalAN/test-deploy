import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import { Box, Typography, Alert } from '@mui/material';
import { StyledTypography } from 'components/ui/typography';
import withAuth from 'components/_hoc/withAuth';
import Coin from 'components/icons/coin';
import ProductIcon from 'components/icons/product';
import ProductActiveIcon from 'components/icons/product-active';
import VoucherIcon from 'components/icons/voucher';
import VoucherActiveIcon from 'components/icons/voucher-active';
import UnstyledTabsCustomized from 'components/ui/unstyleTabs';
import { styled } from '@mui/system';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useDispatch, useSelector } from 'react-redux';
import RewardItem from 'components/ui/reward-item';

const icon_products = '/assets/icon_product.png';
const icon_voucher = '/assets/icon_voucher.png';

const banner = {
  borderBottomRightRadius: '10px',
  borderBottomLeftRadius: '10px',
  backgroundColor: '#749D6E',
  marginTop: '-10px',
  padding: '30px 0 10px',
};

const content = {
  padding: '15px',
};

const listed = {
  border: '1px solid #eee',
  backgroundColor: '#fff',
  padding: '5px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  marginBottom: '10px',
};

const Tab = styled(TabUnstyled)`
  color: #eee;
  cursor: pointer;
  font-size: 15px;
  background: #749d6e;
  border: none;
  display: flex;
  border-right: 2px solid #fff;
  height: 20px;
  line-height: 20px;
  padding: 0 25px;

  &:last-child {
    border-right: none;
  }

  &.Mui-selected {
    color: #fff;
  }

  &:hover {
    color: #fff;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: #749d6e;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: #749d6e;
  border-radius: 8px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  padding: 20px;
  display: flex;
  align-content: space-between;
  justify-content: center;
  margin-bottom: 15px;
`;

const detail_title = {
  minHeight: '30px',
};
const detail_point = {
  color: '#BC4749',
  fontWeight: 'bold',
};
const detail_claim = {};

const imgss = {
  width: '100%',
  height: '100px',
  objectFit: 'contain',
};

const ClaimReferal = () => {
  const [voucherss, setVoucherData] = useState({ data: [] });
  const [productss, setProductData] = useState({ data: [] });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMassage, setAlertMassage] = useState('');
  const [currentTab, setCurrentTab] = useState('product');

  const claimProduct = useSelector((state) => state.claimproduct);
  const claimVoucher = useSelector((state) => state.claimvoucher);
  const dispatch = useDispatch();
  const referal = useSelector((state) => state.referal);

  useEffect(() => {
    fetchDataProduct();
    fetchDataVoucher();
  }, []);

  const fetchDataVoucher = async () => {
    const response = await fetch(`/api/voucher`);
    const newData = await response.json();
    setVoucherData(newData.data);
  };

  const fetchDataProduct = async () => {
    const response = await fetch(`/api/products`);
    const newData = await response.json();
    console.log(newData.data);
    setProductData(newData.data);
  };

  const handleSubmitProduct = (id) => {
    let values = {
      product_id: id,
      qty: 1,
    };
    dispatch(ACTIONS.claimProduct.setClaimProduct(values));

    if (claimProduct.success) {
      fetchDataProduct();
      setAlertMassage(claimProduct.success.message);
      setAlertOpen(true);
    }
  };

  const handleSubmitVoucher = (id) => {
    let values = {
      voucher_id: id,
      qty: 1,
    };
    dispatch(ACTIONS.claimVoucher.setClaimVoucher(values));
    if (claimVoucher.success) {
      fetchDataProduct();
      setAlertMassage(claimProduct.success.message);
      setAlertOpen(true);
    }
  };

  React.useEffect(() => {
    dispatch(ACTIONS.referal.getReferalCode());
  }, []);

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={false}
      hasOuterNav={true}
      title="Reward"
      backable
      backUrl="/reward"
      bgOuterNav="#749D6E"
      color="#fff"
      elevation={0}
    >
      <div style={banner}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            '& svg': {
              width: '40px',
              height: '40px',
            },
            h4: {
              fontFamily: 'Nunito Sans',
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '31px',
              lineHeight: '42px',
              letterSpacing: '0.25px',
              color: '#FFFFFF',
            },
            mb: 1,
          }}
        >
          <Coin />
          <Typography variant="h4">
            {referal?.listReferals?.points ?? 0} Poin
          </Typography>
        </Box>

        <Typography align="center" color="#fff">
          Undang teman untuk dapatkan poin
        </Typography>
      </div>

      <div style={content}>
        <UnstyledTabsCustomized>
          <TabsList>
            <Tab onClick={() => setCurrentTab('product')}>
              {currentTab === 'product' ? (
                <ProductIcon />
              ) : (
                <ProductActiveIcon />
              )}

              <StyledTypography
                size="14px"
                fill="transparent"
                padding="0 10px"
                color="#FFF"
              >
                Produk
              </StyledTypography>
            </Tab>
            <Tab onClick={() => setCurrentTab('voucher')}>
              {currentTab === 'voucher' ? (
                <VoucherIcon />
              ) : (
                <VoucherActiveIcon />
              )}
              <StyledTypography
                size="14px"
                fill="transparent"
                padding="0 10px"
                color="#FFF"
              >
                Voucher
              </StyledTypography>
            </Tab>
          </TabsList>

          <TabPanel value={0}>
            {productss.length > 0 ? (
              <>
                {productss.map(function (data, idx) {
                  return (
                    <RewardItem
                      title={data.product_name}
                      point={data?.price}
                      qty={data?.qty}
                      initialQty={data?.initial_qty}
                      img={data.image ? data.image : icon_products}
                      key={idx}
                      used={data.status === 'claimed'}
                      handleClick={() => handleSubmitProduct(data.id)}
                    />
                  );
                })}
              </>
            ) : (
              <StyledTypography size="13px" color="#666" padding="2px 8px">
                Tidak ada product tersedia
              </StyledTypography>
            )}
          </TabPanel>

          <TabPanel value={1}>
            {voucherss.length > 0 ? (
              <>
                {voucherss.map(function (data, idx) {
                  return (
                    <RewardItem
                      title={data.description}
                      point={data?.point}
                      qty={data?.qty}
                      initialQty={data?.initial_qty}
                      img={data.banner ? data.banner : icon_voucher}
                      key={idx}
                      used={data.status === 'claimed'}
                      isVoucher
                      bgColor={data.bg_color}
                      status={data.status}
                      handleClick={() => handleSubmitVoucher(data.id)}
                    />

                    // <Card style={listed} key={idx}>
                    //   <Grid container spacing={2}>
                    //     <Grid xs={4} item>
                    //       <Voucher
                    //         img={data.banner ? data.banner : icon_voucher}
                    //         bgcolor={data.bg_color}
                    //         fontcolor="#fff"
                    //         claimed={data.status === 'open' ? false : true}
                    //         desc={data.title}
                    //         contentHeight="45px"
                    //         innerHeight="70px"
                    //       ></Voucher>
                    //     </Grid>
                    //     <Grid xs={8} item>
                    //       <Box pt={1}>
                    //         <div style={detail_title}>{data.description}</div>
                    //         <div style={detail_point}>{data.point} Point</div>
                    //         <div style={detail_claim}>
                    //           {data.claimed ? (
                    //             <StyledButton
                    //               height="30px"
                    //               disabled
                    //               fullWidth
                    //               bgcolor="#C4C4C4"
                    //               textcolor="#FFF"
                    //             >
                    //               Berhasil diklaim
                    //             </StyledButton>
                    //           ) : (
                    //             <>
                    //               <Grid container spacing={1}>
                    //                 <Grid item xs={8}>
                    //                   <Progress
                    //                     resd={data.qty ? parseInt(data.qty) : 0}
                    //                     total={
                    //                       data.initial_qty
                    //                         ? parseInt(data.initial_qty)
                    //                         : 0
                    //                     }
                    //                     centered
                    //                   >
                    //                     {data.qty ? parseInt(data.qty) : 0}{' '}
                    //                     Voucher Tersisa
                    //                   </Progress>
                    //                 </Grid>
                    //                 <Grid item xs={4}>
                    //                   <StyledButton
                    //                     height="30px"
                    //                     bgcolor="#265329"
                    //                     disabled={
                    //                       data.resd === 0 ||
                    //                       data.status === 'claimed'
                    //                     }
                    //                     onClick={() =>
                    //                       handleSubmitVoucher(data.id)
                    //                     }
                    //                   >
                    //                     {data.status === 'claimed'
                    //                       ? 'Diklaim'
                    //                       : 'Klaim'}
                    //                   </StyledButton>
                    //                 </Grid>
                    //               </Grid>
                    //             </>
                    //           )}
                    //         </div>
                    //       </Box>
                    //     </Grid>
                    //   </Grid>
                    // </Card>
                  );
                })}
              </>
            ) : (
              <StyledTypography size="13px" color="#666" padding="2px 8px">
                Tidak ada voucher tersedia
              </StyledTypography>
            )}
          </TabPanel>
          <Box
            sx={{
              height: '80px',
              position: 'fixed',
              width: '100%',
              padding: '20px',
              left: '0',
              bottom: '0px',
            }}
          >
            <Alert
              severity={claimProduct?.status === 200 ? 'success' : 'error'}
            >
              {alertMassage}
            </Alert>
          </Box>
        </UnstyledTabsCustomized>
      </div>
    </InnerLayout>
  );
};

export default withAuth('PRIVATE_ROUTE')(ClaimReferal);
