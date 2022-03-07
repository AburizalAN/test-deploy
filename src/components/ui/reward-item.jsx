import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Progress } from 'components/ui/progress';
import { StyledButton } from 'components/ui/button';
import ClockIcon from 'components/icons/clock';

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 4px 10px;
  margin: 0px 0px 10px 0px;
  position: relative;

  ${({ used }) =>
    used &&
    `
    & img {
      filter: grayscale(90%);
    }
    & p,
    & h6 {
      color: #6F6F6F !important;
    }

    & path {
      fill: red !important;
    }
  `}
`;

const Ribbon = styled.div`
  width: 85px;
  height: 88px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  & .ribbon {
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    font-family: Nunito Sans;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    position: relative;
    padding: 4px 0;
    top: 15px;
    right: 0px;
    width: 120px;
    background-color: #6f6f6f;
    color: #fff;
  }
`;

function RewardItem({
  title,
  point,
  qty,
  initialQty,
  img,
  claimed,
  used,
  isVoucher,
  bgColor,
  status,
  handleClick,
}) {
  return (
    <Card used={used}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          {isVoucher ? (
            <Voucher
              img={img}
              bgcolor={bgColor}
              fontcolor="#fff"
              claimed={status === 'open' ? false : true}
              desc={title}
              contentHeight="50px"
              innerHeight="60px"
            />
          ) : (
            <img src={img} alt="product item" width="80%" height="100px" />
          )}
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography
              sx={{
                fontSize: '13px',
              }}
              noWrap
            >
              {title}
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '14px',
              color: '#BC4749',
              fontWeight: 'bold',
              mt: 0.5,
            }}
          >
            {point} Poin
          </Typography>
          {claimed ? (
            <Box display="flex" alignItems="center" gap={1}>
              <ClockIcon />
              <Box>
                <Typography sx={{ fontSize: '10px' }}>
                  Berlaku hingga
                </Typography>
                <Typography sx={{ fontSize: '12px' }}>20 Des 2021</Typography>
              </Box>
            </Box>
          ) : (
            <Grid container spacing={1}>
              <Grid
                item
                md={qty && parseInt(qty) > 0 ? 8.5 : 12}
                xs={qty && parseInt(qty) > 0 ? 8 : 12}
              >
                <Progress
                  resd={parseInt(qty)}
                  total={parseInt(initialQty)}
                  height="25px"
                  bold
                  centered
                >
                  {qty && parseInt(qty) > 0
                    ? `${parseInt(qty)} Produk Tersedia`
                    : 'Produk Habis'}
                </Progress>
              </Grid>
              {qty && parseInt(qty) > 0 ? (
                <Grid item>
                  <StyledButton
                    height="27px"
                    onClick={handleClick}
                    bgcolor="#265329"
                  >
                    Klaim
                  </StyledButton>
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
      {used && (
        <Ribbon>
          <div className="ribbon">Terpakai</div>
        </Ribbon>
      )}
    </Card>
  );
}

export const Voucher = ({
  children,
  bg,
  bgcolor,
  fontcolor,
  img,
  claimed,
  desc,
  blade,
  contentHeight,
  innerWidth,
  innerDetail,
  innerHeight,
}) => {
  const card = {
    margin: '5px 0',
    position: 'relative',
    padding: '0',
    width: '100%',
  };
  const backdrop = {
    backgroundColor: '#0003',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    zIndex: '99',
    display: claimed ? 'block' : 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const header = {
    background: bg ? "url('" + bg + "')" : 'none',
    backgroundColor: bgcolor ? bgcolor : '#E89A02',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: innerHeight ? innerHeight : '120px',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    borderBottom: '3.2px dashed #FFF',
    padding: '5px',
    textAlign: 'center',
  };
  const imgss = {
    width: '100%',
    height: '50px',
    objectFit: 'cover',
    flexGrow: '1',
    textAlign: 'center',
  };
  const circle1 = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    left: '0',
    top: innerHeight ? innerHeight : '120px',
    height: '20px',
    width: '12px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    backgroundColor: '#FFF',
    border: 'none',
  };
  const circle2 = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    right: '0',
    top: innerHeight ? innerHeight : '120px',
    height: '20px',
    width: '12px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: '#FFF',
    border: 'none',
  };
  const content = {
    backgroundColor: bgcolor ? bgcolor : '#E89A02',
    color: fontcolor ? fontcolor : 'white',
    padding: '8px',
    fontSize: '10px',
    fontWeight: 'bold',
    height: contentHeight ? contentHeight : '65px',
    textAlign: contentHeight ? 'center' : 'left',
    borderBottomLeftRadius: blade ? '0px' : '8px',
    borderBottomRightRadius: blade ? '0px' : '8px',
  };
  const detail = {
    backgroundColor: '#FFF',
    color: '#000',
    boxShadow: '0px 0px 7px 2px rgba(0, 0, 0, 0.07)',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    padding: '5px 10px',
    display: blade ? 'block' : 'none',
  };

  return (
    <div style={card}>
      <div style={header}>
        <img style={imgss} src={img} alt="icon_voucher" width="100%" />
        <div style={circle1}></div>
        <div style={circle2}></div>
      </div>
      <div style={content}>{desc}</div>
      <div style={detail}>{children}</div>
      <div style={backdrop}></div>
    </div>
  );
};

RewardItem.propTypes = {
  title: PropTypes.string,
  point: PropTypes.string,
  qty: PropTypes.number,
  initialQty: PropTypes.number,
  img: PropTypes.string,
  claimed: PropTypes.bool,
  used: PropTypes.bool,
  isVoucher: PropTypes.bool,
  bgColor: PropTypes.string,
  status: PropTypes.string,
  handleClick: PropTypes.func,
};

RewardItem.defaultProps = {
  title: 'Unknown',
  point: 0,
  qty: 0,
  initialQty: 0,
  img: null,
  claimed: false,
  used: false,
  isVoucher: false,
};

export default RewardItem;
