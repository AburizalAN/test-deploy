import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import { Box, SwipeableDrawer } from '@mui/material';

const SharePopup = ({ isShowSharePopup, setIsShowSharePopup }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsShowSharePopup(open);
  };

  return (
    <StyledSwipeableDrawer
      sx={{}}
      anchor="bottom"
      open={isShowSharePopup}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{ width: 'auto', borderRadius: '15px 15px 0px 0px' }}
        role="presentation"
      >
        <SmallNavigation />
        <Header>Bagikan ke Teman Kamu</Header>
        <IconWrapper>
          <WhatsappShareButton url={window.location.href}>
            <img
              src="/assets/logo/whatsapp.svg"
              alt="share_to_whatsapp"
              width="36px"
              height="36px"
            />
          </WhatsappShareButton>

          <TwitterShareButton url={window.location.href}>
            <img
              src="/assets/logo/twitter.svg"
              alt="share_to_twitter"
              width="36px"
              height="36px"
            />
          </TwitterShareButton>

          {/*Facebook share cannot be test in local*/}
          <FacebookShareButton url={window.location.href}>
            <img
              src="/assets/logo/facebook.svg"
              alt="share_to_facebook"
              width="36px"
              height="36px"
            />
          </FacebookShareButton>

          {/*TODO: Commented for now, not found anyway to share to instgram. I think it's not possible to share to instagram */}
          {/*<img src="/assets/logo/instagram.svg" alt="" />*/}

          <CopyToClipboard text={window.location.href}>
            <img
              src="/assets/logo/link.svg"
              alt="copy_link"
              width="36px"
              height="36px"
            />
          </CopyToClipboard>
        </IconWrapper>
        <Footer>
          <Button
            type="button"
            color="primary"
            variant="contained"
            disableElevation
            onClick={toggleDrawer(false)}
            sx={{
              width: '100%',
              borderRadius: '24px',
              py: '12px',
              lineHeight: '18px',
            }}
          >
            Batal
          </Button>
        </Footer>
      </Box>
    </StyledSwipeableDrawer>
  );
};

export default SharePopup;

SharePopup.propTypes = {
  isShowSharePopup: PropTypes.bool.isRequired,
  setIsShowSharePopup: PropTypes.func.isRequired,
};

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    border-radius: 15px 15px 0 0;
  }
`;
const SmallNavigation = styled.div`
  width: 50px;
  height: 6px;
  background: #d8d8d8;
  border-radius: 40px;
  margin: 4px auto 0;
`;
const Header = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.15px;
  margin: 20px 0 40px;
  color: #000000;
`;
const IconWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 28px;
  grid-template-columns: repeat(4, 36px);
  width: fit-content;
  img {
    cursor: pointer;
  }
  button {
    height: 36px;
    width: 36px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 19px 12px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0 0 1px #e0e0e0;
  margin-top: 39px;
`;
