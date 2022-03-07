import React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { rupiah } from 'utils/currency';
import Slider from 'react-slick';

const relDiff = (price, specialPrice) =>
  parseInt(((price - specialPrice) / price) * 100);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt={1.5}>{children}</Box>}
    </div>
  );
};

export function SliderCategoryHeader({ slider, tabSlider, setTabSlider }) {
  return (
    <>
      <Tabs
        value={tabSlider}
        onChange={(_, value) => setTabSlider(value)}
        variant="scrollable"
        scrollButtons={false}
        className="productSliderTab"
      >
        {slider?.map((data, i) => (
          <Tab
            label={data?.slider_title ?? 'Unknown'}
            key={i}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
    </>
  );
}

export function SliderCategoryMain({ slider, tabSlider, setTabSlider }) {
  return (
    <>
      {slider?.map((data, i) => (
        <TabPanel value={tabSlider} key={i} index={i}>
          <Slider
            slidesToScroll={1}
            slidesToShow={3}
            speed={500}
            infinite={false}
          >
            {data?.products
              ?.filter((res) => res.price)
              ?.map((detail, _i) => (
                <div key={`product-slider-${_i}`}>
                  <Box my={1} width="160px">
                    <Card className="cardProduct" sx={{ minHeight: '330px' }}>
                      <Link href={`/produk/${detail?.url_key}`} passHref>
                        <a style={{ textDecoration: 'none' }}>
                          <CardActionArea>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              className="cardTopPromo"
                            >
                              {detail?.special_price && (
                                <Box>
                                  <Box className="promoBox">
                                    <Typography className="promoTitle" noWrap>
                                      PROMO
                                    </Typography>
                                  </Box>
                                </Box>
                              )}
                            </Box>
                            <CardMedia
                              component="img"
                              height="170"
                              image={`https://staging-cuan.awalmula.co/pub/media/catalog/product${detail?.image}`}
                              alt="Product Image"
                              className="productImage"
                            />
                          </CardActionArea>

                          <CardContent className="cardContent">
                            <Typography className="storeName" noWrap>
                              {detail?.brand_name}
                            </Typography>
                            <Box height="50px">
                              <Typography className="productName" variant="h6">
                                {detail?.name}
                              </Typography>
                            </Box>
                            <Typography
                              className="locationName"
                              variant="body2"
                              noWrap
                              gutterBottom
                            >
                              {detail?.warehouse_data?.city}
                            </Typography>

                            {detail?.special_price && (
                              <Box display="flex" gap={1} alignItems="center">
                                <Box className="discountBox">
                                  {`${relDiff(
                                    detail?.price,
                                    detail?.special_price
                                  )}%`}
                                </Box>
                                <Typography className="discountPrice" noWrap>
                                  {detail?.price
                                    ? rupiah(detail?.price)
                                    : 'Rp -'}
                                </Typography>
                              </Box>
                            )}

                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Typography className="priceLabel" noWrap>
                                {detail?.price
                                  ? rupiah(
                                      detail?.special_price ?? detail?.price
                                    )
                                  : 'Rp -'}
                              </Typography>
                              <IconButton size="small">
                                <FavoriteIcon
                                  fontSize="small"
                                  htmlColor="#D8D8D8"
                                />
                              </IconButton>
                            </Box>
                          </CardContent>
                        </a>
                      </Link>
                    </Card>
                  </Box>
                </div>
              ))}
          </Slider>
        </TabPanel>
      ))}
    </>
  );
}
