import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import styleds from 'styled-components';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const ChildWrap = styleds.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  p {
    margin:0;
  }
  overflow-y: scroll;
`;

function SwipeableEdgeDrawer({
  visible,
  onDismiss,
  onVisible,
  height = '80%',
  children,
}) {
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(${height} - ${drawerBleeding}px)`,
            // height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
      <SwipeableDrawer
        // container={container}
        anchor="bottom"
        open={visible}
        onClose={onDismiss}
        onOpen={onVisible}
        swipeAreaWidth={drawerBleeding}
        // disableSwipeToOpen={false}
        // ModalProps={{
        //   keepMounted: true,
        // }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Puller />
          <ChildWrap>{children}</ChildWrap>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  visible: PropTypes.bool,
  onVisible: PropTypes.func,
  onDismiss: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  height: PropTypes.string,
};

export default SwipeableEdgeDrawer;
