import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import { css } from 'styled-components';

import Coin from 'components/icons/coin';
import Ticket from 'components/icons/ticket';
import Voucher from 'components/icons/voucher-2';

const StyledStack = styled(Stack)`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius * 2}px;
  height: 68px;

  ${() => {
    return css`
      &::before {
        content: '';
        position: absolute;
        width: 189px;
        height: 142px;
        border-radius: 50%;
        background-color: #244526;
        top: -4px;
        left: -${189 / 4}px;
      }
    `;
  }}
`;

const VDivider = styled(Box)(() => ({
  position: 'relative',
  width: '3.75px',
  height: '35px',
  backgroundColor: '#fff',
  borderRadius: `${3.75 / 2}px`,
  flexShrink: 0,
}));

const CardMulaPoint = (props) => {
  const { mulaPoints, mulaRewards, version, voucher, ...restProps } = props;

  switch (version) {
    case '1.0.0':
      return (
        <StyledStack
          direction="row"
          alignItems="center"
          backgroundColor="primary.main"
          borderRadius={2}
          {...restProps}
        >
          <Link href="" passHref>
            <ButtonBase
              sx={{ justifyContent: 'start', width: '100%', height: 68 }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                flexShrink={0}
                sx={{ position: 'relative' }}
                px="15px"
              >
                <Coin sx={{ width: 44, height: 44 }} />
              </Stack>
              <Box position="relative" py={1} pr="15px">
                <Typography
                  noWrap
                  variant="body2"
                  textAlign="left"
                  fontWeight="medium"
                  color="white"
                >
                  Poin
                </Typography>
                <Typography
                  noWrap
                  variant="subtitle1"
                  textAlign="left"
                  fontWeight="bold"
                  color="white"
                >
                  {mulaPoints} Poin
                </Typography>
              </Box>
            </ButtonBase>
          </Link>
          <VDivider />
          <ButtonBase
            sx={{
              width: '100%',
              height: 68,
              justifyContent: 'flex-end',
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              flexShrink={0}
              sx={{ position: 'relative' }}
              px="15px"
            >
              <Ticket sx={{ width: 44, height: 44 }} />
            </Stack>
            <Stack alignItems="flex-end" position="relative" py={1} pr="15px">
              <Typography
                noWrap
                variant="body2"
                textAlign="right"
                fontWeight="medium"
                color="white"
              >
                Reward
              </Typography>
              <Typography
                noWrap
                variant="subtitle1"
                textAlign="right"
                fontWeight="bold"
                color="white"
              >
                {mulaRewards} Voucher
              </Typography>
            </Stack>
          </ButtonBase>
        </StyledStack>
      );

    case '1.0.0-alpha':
      return (
        <StyledStack
          direction="row"
          alignItems="center"
          backgroundColor="primary.main"
          borderRadius={2}
          {...restProps}
        >
          <>
            <ButtonBase
              sx={{
                justifyContent: 'space-between',
                width: '100%',
                height: 68,
              }}
            >
              <Grid container justifyContent="space-between">
                <Link href="/reward/point" passHref>
                  <Grid item xs={6}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="start"
                    >
                      <Stack
                        direction="row"
                        justifyContent="center"
                        flexShrink={0}
                        sx={{ position: 'relative' }}
                        px="15px"
                      >
                        <Coin sx={{ width: 44, height: 44 }} />
                      </Stack>
                      <Box position="relative" py={1} pr="15px">
                        <Typography
                          noWrap
                          variant="body2"
                          textAlign="left"
                          fontWeight="medium"
                          color="white"
                        >
                          Poin
                        </Typography>
                        <Typography
                          noWrap
                          variant="subtitle1"
                          textAlign="left"
                          fontWeight="bold"
                          color="white"
                        >
                          {mulaPoints} Poin
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Link>
                <Link href="/reward/owned" passHref>
                  <Grid item xs={6}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="start"
                    >
                      <Stack
                        direction="row"
                        justifyContent="center"
                        flexShrink={0}
                        sx={{ position: 'relative' }}
                        px="15px"
                      >
                        <Voucher sx={{ width: 38, height: 38 }} />
                      </Stack>
                      <Box position="relative" py={1} pr="15px">
                        <Typography
                          noWrap
                          variant="body2"
                          textAlign="left"
                          fontWeight="medium"
                          color="white"
                        >
                          Voucher
                        </Typography>
                        <Typography
                          noWrap
                          variant="subtitle1"
                          textAlign="left"
                          fontWeight="bold"
                          color="white"
                        >
                          {voucher}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Link>
              </Grid>
            </ButtonBase>
          </>
        </StyledStack>
      );

    case '1.0.0-alpha.1':
      return (
        <StyledStack
          direction="row"
          alignItems="center"
          backgroundColor="primary.main"
          borderRadius={2}
          {...restProps}
        >
          <Link href="" passHref>
            <ButtonBase
              sx={{ justifyContent: 'start', width: '100%', height: 68 }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                flexShrink={0}
                sx={{ position: 'relative' }}
                px="15px"
              >
                <Coin sx={{ width: 44, height: 44 }} />
              </Stack>
              <Box position="relative" py={1} pr="15px">
                <Typography
                  noWrap
                  variant="body2"
                  textAlign="left"
                  fontWeight="medium"
                  color="white"
                >
                  Poin
                </Typography>
                <Typography
                  noWrap
                  variant="subtitle1"
                  textAlign="left"
                  fontWeight="bold"
                  color="white"
                >
                  {mulaPoints} Poin
                </Typography>
              </Box>
            </ButtonBase>
          </Link>
        </StyledStack>
      );

    default:
      console.error('invalid version props!');
      return null;
  }
};

CardMulaPoint.propTypes = {
  version: PropTypes.oneOf(['1.0.0', '1.0.0-alpha', '1.0.0-alpha.1']),
  mulaPoints: PropTypes.number,
  mulaRewards: PropTypes.number,
  voucher: PropTypes.number,
};

CardMulaPoint.defaultProps = {
  version: '1.0.0',
  mulaPoints: 0,
  mulaRewards: 0,
  voucher: 0,
};

export default CardMulaPoint;
