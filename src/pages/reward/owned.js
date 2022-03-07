import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import { Card, Grid } from '@mui/material';
import { StyledButton } from 'components/ui/button';
import { StyledTypography } from 'components/ui/typography';
import { Voucher } from 'components/ui/voucher';
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
import ClockIcon from 'components/icons/clock';
import moment from 'moment';

const icon_products = '/assets/icon_product.png';
const icon_voucher = '/assets/icon_voucher.png';

const listed = {
  border: '1px solid #eee',
  backgroundColor: '#fff',
  padding: '5px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  marginBottom: '10px',
};

const timed = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  padding: '5px 0',
};

const expired = {
  margin: '0 5px',
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
  padding: 10px;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: #749d6e;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  padding: 20px;
  display: flex;
  align-content: space-between;
  justify-content: center;
  margin-bottom: 15px;
`;

const item_img = {
  width: '100%',
  height: '100px',
  objectFit: 'contain',
  borderRadius: '12px',
  paddingTop: '15px',
};
const detail_title = {
  height: '35px',
};
const detail_point = {
  color: '#BC4749',
  fontWeight: 'bold',
};
const detail_claim = {
  padding: '0 10px 0 0',
};

const ProductItem = ({ idx, data, handleClick }) => (
  <Card style={listed} key={idx}>
    <Grid container spacing={2}>
      <Grid xs={4} item>
        <img
          src={data.image ? data.image : icon_products}
          alt="item"
          style={item_img}
        />
      </Grid>
      <Grid xs={8} item>
        <div style={detail_title}>{data.product_name}</div>
        <div style={detail_point}>{data.price} Point</div>
        <div style={detail_claim}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div style={timed}>
                <ClockIcon />
                <div style={expired}>
                  <StyledTypography size="10px" padding="0" color="#6F6F6F">
                    Berakhir Pada
                  </StyledTypography>
                  <StyledTypography size="12px" padding="0">
                    {data.end_time
                      ? moment(data.end_time).format('DD MMM YYYY')
                      : '-'}
                  </StyledTypography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <StyledButton
                height="30px"
                bgcolor="ddd"
                fullWidth
                mt="5px"
                onClick={handleClick}
                disabled
              >
                Cooming Soon
              </StyledButton>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </Card>
);

const VoucherItem = ({ data, idx, handleClick }) => (
  <Card style={listed} key={idx}>
    <Grid container spacing={2}>
      <Grid xs={4} item>
        <Voucher
          img={data.banner ? data.banner : icon_voucher}
          bgcolor={data.bg_color}
          claimed={data.status === 'open' ? false : true}
          fontcolor="#fff"
          key={idx}
          desc={data.name}
          contentHeight="35px"
          innerHeight="80px"
        ></Voucher>
      </Grid>
      <Grid xs={8} item>
        <div style={detail_title}>{data.description}</div>
        <div style={detail_point}>{data.point} Point</div>
        <div style={detail_claim}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div style={timed}>
                <ClockIcon />
                <div style={expired}>
                  <StyledTypography size="10px" padding="0" color="#6F6F6F">
                    Berakhir Pada
                  </StyledTypography>
                  <StyledTypography size="12px" padding="0">
                    {data.expired_date
                      ? moment(data.expired_date).isValid()
                        ? moment(data.expired_date).format('DD MMM YYYY')
                        : 'Selamanya'
                      : '-'}
                  </StyledTypography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <StyledButton
                height="30px"
                bgcolor="ddd"
                fullWidth
                mt="5px"
                onClick={handleClick}
                disabled
              >
                Cooming Soon
              </StyledButton>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </Card>
);

const OwnedReferal = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [values, setValue] = useState({ data: [] });
  const [voucherss, setVoucherData] = useState({ data: [] });
  const [productss, setProductData] = useState({ data: [] });

  useEffect(() => {
    const fetchDataValues = async () => {
      const response = await fetch(`/api/all-claim`);
      const newData = await response.json();
      console.log('data@all', newData.data);
      setValue(newData.data);
    };

    const fetchDataVoucher = async () => {
      const response = await fetch(`/api/voucher-claim`);
      const newData = await response.json();
      console.log('data@voucher', newData.data);
      setVoucherData(newData.data);
    };

    const fetchDataProduct = async () => {
      const response = await fetch(`/api/products-claim`);
      const newData = await response.json();
      console.log('data@product', newData.data);
      setProductData(newData.data);
    };

    fetchDataValues();
    fetchDataProduct();
    fetchDataVoucher();
  }, []);

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={false}
      hasOuterNav={true}
      title="Reward Saya"
      backable
      backUrl="/account"
    >
      <UnstyledTabsCustomized
        onChange={(e, newValue) => {
          setCurrentActive(newValue);
        }}
      >
        <TabsList>
          <Tab>
            <StyledTypography
              size="14px"
              fill="transparent"
              padding="0 10px"
              color="#FFF"
            >
              Semua
            </StyledTypography>
          </Tab>
          <Tab>
            {currentActive === 1 ? <ProductIcon /> : <ProductActiveIcon />}
            <StyledTypography
              size="14px"
              fill="transparent"
              padding="0 10px"
              color="#FFF"
            >
              Produk
            </StyledTypography>
          </Tab>
          <Tab>
            {currentActive === 2 ? <VoucherIcon /> : <VoucherActiveIcon />}
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
          {values.length > 0 ? (
            <>
              {productss.length > 0 ? (
                <>
                  {productss.map(function (data, idx) {
                    return (
                      <ProductItem
                        data={data}
                        idx={idx}
                        key={idx}
                        handleClick={() => console.log(data)}
                      />
                    );
                  })}
                </>
              ) : null}

              {voucherss.length > 0 ? (
                <>
                  {voucherss.map(function (data, idx) {
                    return (
                      <VoucherItem
                        data={data}
                        idx={idx}
                        key={idx}
                        handleClick={() => console.log(data)}
                      />
                    );
                  })}
                </>
              ) : null}
            </>
          ) : (
            <StyledTypography size="13px" color="#666" padding="2px 8px">
              Anda belum memiliki reward
            </StyledTypography>
          )}
        </TabPanel>
        <TabPanel value={1}>
          {productss.length > 0 ? (
            <>
              {productss.map(function (data, idx) {
                return <ProductItem data={data} idx={idx} key={idx} />;
              })}
            </>
          ) : (
            <StyledTypography size="13px" color="#666" padding="2px 8px">
              Anda belum memiliki product
            </StyledTypography>
          )}
        </TabPanel>
        <TabPanel value={2}>
          {voucherss.length > 0 ? (
            <>
              {voucherss.map(function (data, idx) {
                return <VoucherItem data={data} idx={idx} key={idx} />;
              })}
            </>
          ) : (
            <StyledTypography size="13px" color="#666" padding="2px 8px">
              Anda belum memiliki voucher
            </StyledTypography>
          )}
        </TabPanel>
      </UnstyledTabsCustomized>
    </InnerLayout>
  );
};

export default OwnedReferal;
