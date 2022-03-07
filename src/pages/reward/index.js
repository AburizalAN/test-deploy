import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import Banner from 'assets/img/referal.png';
import Image from 'next/image';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import { StyledTypography } from 'components/ui/typography';
import Reward from 'components/ui/reward';
import ArrowRightIcon from 'components/icons/arrow-right';
import { Voucher } from 'components/ui/voucher';
import { StyledIconButton } from 'components/ui/iconButton';
import { Progress } from 'components/ui/progress';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';

const icon_products = '/assets/icon_product.png';
const icon_voucher = '/assets/icon_voucher.png';

const bannerState = {
  position: 'inherit',
  width: '95%',
  borderRadius: '10px',
  boxShadow: '0px 4px 40px 1px rgba(0, 0, 0, 0.15)',
  padding: '10px',
  margin: '-30px auto 5px',
};

const contain = {
  display: 'flex',
  justifyContent: 'space-between',
};

const referal = {
  position: 'relative',
};

const reward = {
  padding: '20px 10px',
};

const Rewards = () => {
  const [voucher, setVoucherData] = useState({ data: [] });
  const [product, setProductData] = useState({ data: [] });
  const referalState = useSelector((state) => state.referal);
  const { profile } = useSelector((state) => state.me);
  const [loadingVoucher, setLoadingVoucher] = React.useState(true);
  const [loadingProduct, setLoadingProduct] = React.useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.me.getProfile());
      console.log(profile);
      dispatch(ACTIONS.referal.getReferalCode());
    } else {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    const fetchDataVoucher = async () => {
      const response = await fetch(`/api/voucher`);
      const newData = await response.json();
      setVoucherData(newData.data);
      setLoadingVoucher(false);
    };

    const fetchDataProduct = async () => {
      const response = await fetch(`/api/products`);
      const newData = await response.json();
      setProductData(newData.data);
      setLoadingProduct(false);
    };

    fetchDataProduct();
    fetchDataVoucher();
  }, []);

  const router = useRouter();
  const routers = useRouter();

  const routeChange = () => {
    router.push({ pathname: `reward/claim` });
  };

  const routeChangePoin = () => {
    router.push({ pathname: `reward/point` });
  };

  const detailChangeVoucher = (data) => {
    routers.push({
      pathname: `reward/voucher`,
      query: { coupon_id: data.coupon_id },
    });
  };

  const detailChangeProduct = (data) => {
    routers.push({
      pathname: `reward/product`,
      query: { product_id: data.id },
    });
  };

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={true}
      hasOuterNav={true}
      title="Reward"
      backable
      backUrl="/account"
    >
      <div style={referal}>
        <Image
          src={Banner}
          alt="banner_referal_am"
          width="100vw"
          height="30vw"
          layout="responsive"
          objectFit="cover"
        />
        <Card style={bannerState}>
          <div style={contain}>
            <div className="grid_banner">
              <span>Hi {profile.firstname}, hadiahmu saat ini ada:</span>
              <StyledTypography size="20px" weight="700" padding="0">
                {referalState.listReferals.points} Poin
              </StyledTypography>
            </div>
            <div className="grid_button">
              <StyledIconButton
                bgcolor="#A9CC70"
                width="30px"
                height="30px"
                onClick={routeChangePoin}
              >
                <ArrowRightIcon />
              </StyledIconButton>
            </div>
          </div>
        </Card>
      </div>

      <div style={reward}>
        <StyledTypography size="18px" weight="800" padding="15px 8px">
          Klaim Voucher Rewards
        </StyledTypography>
        {voucher.length > 0 || loadingVoucher ? (
          <>
            <Reward>
              {loadingVoucher
                ? [...new Array(4)].map((val, key) => (
                    <Skeleton
                      variant="rectangular"
                      height={275}
                      sx={{ borderRadius: '10px' }}
                      key={key}
                    />
                  ))
                : voucher.map(function (data, idx) {
                    return (
                      <div
                        onClick={() => {
                          data.status === 'open'
                            ? detailChangeVoucher(data)
                            : detailChangeVoucher(data);
                        }}
                        key={idx}
                      >
                        <Voucher
                          img={data.banner ? data.banner : icon_voucher}
                          bgcolor={data.bg_color}
                          fontcolor="#fff"
                          desc={data.description}
                          claimed={data.status === 'open' ? 0 : 1}
                          blade
                        >
                          <div className="point">{data.point} Point</div>
                          <Progress
                            resd={data.qty ? parseInt(data.qty) : 0}
                            total={
                              data.initial_qty ? parseInt(data.initial_qty) : 0
                            }
                          >
                            {data.qty ? parseInt(data.qty) : 0} Voucher Tersisa
                          </Progress>
                        </Voucher>
                      </div>
                    );
                  })}

              <div className="list viewVoucher">
                <div className="viewAllContent">
                  <StyledIconButton
                    bgcolor="#FFFFFFDD"
                    textcolor="#486140"
                    border="none"
                    minwidth="flat"
                    onClick={routeChange}
                  >
                    <ArrowRightIcon />
                  </StyledIconButton>
                  <StyledTypography
                    size="12px"
                    weight="800"
                    padding="8px"
                    fill="transparent"
                    align="center"
                    color="#FFFD"
                  >
                    Lihat Semua
                  </StyledTypography>
                </div>
              </div>
            </Reward>
          </>
        ) : (
          <StyledTypography size="13px" color="#666" padding="2px 8px">
            Tidak ada voucher tersedia
          </StyledTypography>
        )}
      </div>

      <div style={reward}>
        <StyledTypography size="18px" weight="800" padding="15px 8px">
          Klaim Produk Rewards
        </StyledTypography>

        {product.length > 0 || loadingProduct ? (
          <Reward>
            {loadingProduct
              ? [...new Array(4)].map((val, key) => (
                  <Skeleton
                    variant="rectangular"
                    height={230}
                    sx={{ borderRadius: '10px' }}
                    key={key}
                  />
                ))
              : product.map(function (data, idx) {
                  return (
                    <div
                      className="list"
                      key={idx}
                      onClick={() => {
                        detailChangeProduct(data);
                      }}
                    >
                      <img
                        src={data.image ? data.image : icon_products}
                        alt="image"
                      />
                      <div className="desc">{data.product_name}</div>
                      <div className="point">
                        {data.price ? data.price : 100} Point
                      </div>
                      <Progress
                        resd={data.qty ? parseInt(data.qty) : 0}
                        total={
                          data.initial_qty ? parseInt(data.initial_qty) : 0
                        }
                      >
                        {data.qty ? parseInt(data.qty) : 0} Produk Tersisa
                      </Progress>
                    </div>
                  );
                })}

            <div className="list viewProduct">
              <div className="viewAllProduct">
                <StyledIconButton
                  bgcolor="#FFFFFFDD"
                  textcolor="#486140"
                  border="none"
                  minwidth="flat"
                  onClick={routeChange}
                >
                  <ArrowRightIcon />
                </StyledIconButton>
                <StyledTypography
                  size="12px"
                  weight="800"
                  padding="8px"
                  fill="transparent"
                  align="center"
                  color="#FFFD"
                >
                  Lihat Semua
                </StyledTypography>
              </div>
            </div>
          </Reward>
        ) : (
          <StyledTypography size="13px" color="#666" padding="2px 8px">
            Tidak ada produk tersedia
          </StyledTypography>
        )}
      </div>
    </InnerLayout>
  );
};

export default Rewards;
