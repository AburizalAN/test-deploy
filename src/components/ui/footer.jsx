import PropTypes from 'prop-types';
import { Card as MuiCard, Grid, IconButton } from '@mui/material';
import styled from 'styled-components';
import { StyledTypography } from './typography';
import { StyledButton } from 'components/ui/button';
import { StyledIconButton } from 'components/ui/iconButton';
import FacebookSquareLightIcon from 'components/icons/facebook-square-light';
import InstagramSquareLightIcon from 'components/icons/instagram-square-light';
import LinkedinSquareLightIcon from 'components/icons/linkedin-square-light';
import YoutubeSquareLightIcon from 'components/icons/youtube-square-light';
import { useState } from 'react';
import PlaystoreIcon from 'components/icons/playstore';
import AppstoreIcon from 'components/icons/appstore';
import { usePWAInstall } from 'react-use-pwa-install';

const AMLogoLight = '/assets/amLogoLight.png';
const AMLogo = '/assets/amLogo.png';

const FootContainer = styled.div`
  background-color: #265329;
  text-align: center;
  padding: 20px 0;

  img {
    width: 100px;
    objectfit: contain;
    margin-bottom: 20px;
  }
`;

const ListedRow = styled.div`
  justify-content: center;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 100%;
`;

const ListedTop = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: auto 5px;
    font-size: 12px;
  }

  &:first-child:before {
    content: ' ';
  }

  &:before {
    content: '•';
    width: 15px;
    height: 15px;
    color: #fff;
  }
`;

const ListedBottom = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: auto 5px;
    font-size: 12px;
  }

  &:first-child:before {
    content: ' ';
  }

  &:before {
    content: '•';
    width: 10px;
    height: 10px;
    color: #fff;
  }
`;

const AlertContent = styled.div`
  background: #e4f9c3;
  box-shadow: 0px -0.97561px 0px #e0e0e0;
  justify-content: center;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 5px;
  width: 100%;

  img {
    width: 46px;
    height: 46px;
    objectfit: cover;
  }
`;

const listNavigate1 = [
  { route: '/about', name: 'Tentang Kami' },
  { route: '/mitra', name: 'Bergabung Menjadi Mitra Mula' },
  { route: '/career', name: 'Karir' },
];

const listNavigate2 = [
  { route: '/faq', name: 'FAQ' },
  { route: '/sk', name: 'Syarat dan ketentuan' },
  { route: '/privacy', name: 'Kebijakan Privasi' },
];

export const StyledFooter = ({ bgcolor, children }) => {
  const [banners, setBanners] = useState(true);

  const onClickNav = (pannel) => {
    switch (pannel) {
      case 'fb':
        window.open('https://www.facebook.com/awalmula.idn/', '_blank');
        break;
      case 'li':
        window.open(
          'https://www.linkedin.com/company/awal-mula/mycompany/',
          '_blank'
        );
        break;
      case 'ig':
        window.open('https://www.instagram.com/awalmula_id/', '_blank');
        break;
      case 'yt':
        window.open(
          'https://www.youtube.com/channel/UCaHg0mPpZ8unLZ08PlMrunA',
          '_blank'
        );
        break;

      default:
        break;
    }
  };

  const install = usePWAInstall();

  return (
    <>
      <FootContainer>
        <img src={AMLogoLight} alt="footer" />
        <Grid
          container
          spacing={2}
          className="footerWrapper"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <StyledTypography
              color="#fff"
              fill="transparent"
              size="13px"
              weight="700"
              align="center"
            >
              Kini sehat lebih mudah bersama Awal Mula
            </StyledTypography>
            <StyledTypography
              color="#fff"
              fill="transparent"
              size="13px"
              weight="700"
              align="center"
            >
              Ikuti Kami di
            </StyledTypography>
          </Grid>

          <Grid item>
            <div onClick={() => onClickNav('fb')}>
              <FacebookSquareLightIcon sx={{ width: '32', height: '32' }} />
            </div>
          </Grid>
          <Grid item>
            <div onClick={() => onClickNav('li')}>
              <LinkedinSquareLightIcon sx={{ width: '32', height: '32' }} />
            </div>
          </Grid>
          <Grid item>
            <div onClick={() => onClickNav('yt')}>
              <YoutubeSquareLightIcon sx={{ width: '32', height: '32' }} />
            </div>
          </Grid>
          <Grid item>
            <div onClick={() => onClickNav('ig')}>
              <InstagramSquareLightIcon sx={{ width: '32', height: '32' }} />
            </div>
          </Grid>

          {/* hiddenProd */}
          {/* <Grid item xs={12}>
            <ListedRow>
              {listNavigate1.map((data, i) => {
                return (
                  <ListedTop key={i}>
                    <a href={data.route}>{data.name}</a>
                  </ListedTop>
                );
              })}
            </ListedRow>

            <ListedRow>
              {listNavigate2.map((data, i) => {
                return (
                  <ListedBottom key={i}>
                    <a href={data.route}>{data.name}</a>
                  </ListedBottom>
                );
              })}
            </ListedRow>
          </Grid> */}

          <Grid item xs={12}>
            <StyledTypography
              color="#fff"
              fill="transparent"
              size="13px"
              align="center"
            >
              Email : customercare@awalmula.co.id
            </StyledTypography>
            <StyledTypography
              color="#fff"
              fill="transparent"
              size="13px"
              align="center"
            >
              CS : +62 811-3223-9709
            </StyledTypography>
          </Grid>

          {/* hiddenProd */}
          {/* <Grid item>
            <PlaystoreIcon sx={{ width: '100px', height: '50px' }} />
          </Grid>

          <Grid item>
            <AppstoreIcon sx={{ width: '100px', height: '50px' }} />
          </Grid> */}
        </Grid>
      </FootContainer>
      {install ? (
        <AlertContent>
          <div>
            <img src={AMLogo} alt="footer" />
          </div>
          <div>
            <StyledTypography
              color="#265329"
              fill="transparent"
              size="15px"
              padding="0 10px"
            >
              Mula Apps
            </StyledTypography>
            <StyledTypography
              color="#265329"
              fill="transparent"
              size="11px"
              padding="0 10px"
            >
              Kini sehat lebih mudah Bersama Awal Mula.
            </StyledTypography>
          </div>
          <div>
            <StyledButton onClick={install} height="40px" bgcolor="#265329">
              INSTALL
            </StyledButton>
          </div>
          <div>
            <StyledIconButton
              bgcolor="transparent"
              border="none"
              height="30px"
              textcolor="#265329"
              onClick={() => setBanners(false)}
            >
              x
            </StyledIconButton>
          </div>
        </AlertContent>
      ) : null}
    </>
  );
};

StyledFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
};
