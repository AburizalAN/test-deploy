import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTypography } from './typography';
import Coin from 'components/icons/coin-am';
import { Grid } from '@mui/material';
import CirclePoinBottom from 'components/icons/circle-poin-bottom';
import CirclePoinTop from 'components/icons/circle-poin-top';

const poinBg = '/assets/bg_point.png';

const Points = styled.div`
  padding: 25px 60px;
  color: ${(props) => (props.color ? props.color : '#000')};
  border-bottom: 10px solid #e5e5e5;
  position: relative;
  background: url('${poinBg}');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Cards = styled.div`
  height: 120px;
  background: linear-gradient(108.68deg, #486041 0.52%, #7ca770 113.56%);
  box-shadow: 0px 4px 4px rgba(72, 97, 64, 0.25);
  border-radius: 10px;
  position: relative;
`;

const InnerContent = styled.div`
  padding: 15px 20px;
  position: absolute;
  top: 0;
  left: 0;
  index: 9;
  width: 100%;
`;

const InnerBottom = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  index: 1;
`;

const InnerTop = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  index: 1;
`;

export const StyledPoints = ({ poin, color }) => {
  return (
    <Points color={color}>
      <Cards>
        <InnerBottom>
          <CirclePoinBottom sx={{ width: '130px', height: '100%' }} />
        </InnerBottom>
        <InnerTop>
          <CirclePoinTop sx={{ width: '100px', height: '100%' }} />
        </InnerTop>
        <InnerContent>
          <Grid container alignItems="center">
            <Grid xs={3} item>
              <StyledTypography align="left" fill="transparent">
                <Coin sx={{ height: '58px', width: '58px' }} />
              </StyledTypography>
            </Grid>
            <Grid xs={9} item>
              <StyledTypography align="right" color={color} fill="transparent">
                Mula Point kamu saat ini ada :
              </StyledTypography>
              <StyledTypography
                align="right"
                weight="700"
                size="18px"
                color={color}
                fill="transparent"
              >
                {poin} Poin
              </StyledTypography>
            </Grid>
          </Grid>
        </InnerContent>
      </Cards>
    </Points>
  );
};

StyledPoints.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  poin: PropTypes.string,
};
