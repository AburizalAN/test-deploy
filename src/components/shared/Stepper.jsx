import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import CheckCircleIcon from 'components/icons/check-circle';

const Connector = styled(Box)(({ color, orientation }) => {
  const globalStyle = {
    flexGrow: 1,
    backgroundColor: color ? color : '#c4c4c4',
  };

  switch (orientation) {
    case 'horizontal':
      return {
        ...globalStyle,
        minWidth: '12px',
        width: '100%',
        height: '3px',
        margin: '0 -14px',
      };

    case 'vertical':
    default:
      return {
        ...globalStyle,
        width: '3px',
        minHeight: `${120}px`,
        margin: '-200% 0',
      };
  }
});

const Stepper = (props) => {
  const { orientation, reverse, steps, step, size, ...restProps } = props;

  let sizeIcon = 40;
  switch (size) {
    case 'large':
      sizeIcon = 50;
      break;

    case 'medium':
      sizeIcon = 40;
      break;

    case 'small':
      sizeIcon = 26;
      break;

    default:
      sizeIcon = 40;
      break;
  }

  const styleStackHorizontal = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    mt: '12px',
  };

  const styleStackVertical = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  };

  return (
    <Box {...restProps}>
      {orientation === 'horizontal' && (
        <Stack>
          <Stack {...styleStackHorizontal}>
            {steps.map((s, index) => {
              const isLastChild = steps[index] === steps[steps.length - 1];

              const activeStep = steps.findIndex((s) => s.value === step);

              return (
                <React.Fragment key={s.value}>
                  <Stack
                    alignItems="center"
                    flexShrink={0}
                    width="100%"
                    minWidth={sizeIcon}
                    maxWidth={60}
                  >
                    <CheckCircleIcon
                      sx={{
                        width: sizeIcon,
                        height: sizeIcon,
                        color: activeStep >= index ? '#A7BD84' : '#c4c4c4',
                      }}
                    />
                  </Stack>
                  {!isLastChild && (
                    <Connector
                      orientation={orientation}
                      color={activeStep >= index ? '#A7BD84' : '#c4c4c4'}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Stack>

          <Stack {...styleStackHorizontal}>
            {steps.map((s, index) => {
              const isLastChild = steps[index] === steps[steps.length - 1];

              return (
                <React.Fragment key={s.value}>
                  <Typography
                    variant="overline3"
                    width="100%"
                    minWidth={sizeIcon}
                    maxWidth={60}
                    textAlign="center"
                  >
                    {s.label}
                  </Typography>
                  {!isLastChild && (
                    <Connector
                      style={{ height: 0, backgroundColor: 'transparent' }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Stack>
        </Stack>
      )}

      {orientation === 'vertical' && (
        <Stack
          direction={reverse ? 'column-reverse' : 'column'}
          overflow="hidden"
          width="100%"
        >
          {steps.map((s, index) => {
            const isLastChild = steps[index] === steps[steps.length - 1];

            const activeStep = steps.findIndex((s) => s.value === step);

            return (
              <React.Fragment key={s.value}>
                <Stack {...styleStackVertical}>
                  <Stack width="100%">
                    <Typography variant="overline3" textAlign="right">
                      {s.label2}
                    </Typography>
                  </Stack>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    width={sizeIcon}
                  >
                    <CheckCircleIcon
                      sx={{
                        width: sizeIcon,
                        height: sizeIcon,
                        color: activeStep >= index ? '#A7BD84' : '#c4c4c4',
                        transform: 'scale(1.2)',
                        position: 'absolute',
                        zIndex: 600,
                      }}
                    />
                    <Stack
                      backgroundColor="white"
                      width={sizeIcon}
                      height={sizeIcon}
                      position="relative"
                      zIndex={500}
                    />
                  </Stack>
                  <Stack width="100%">
                    <Typography variant="overline3">{s.label}</Typography>
                  </Stack>
                </Stack>

                {!isLastChild && (
                  <Stack {...styleStackVertical}>
                    <Stack width="100%" />
                    <Stack alignItems="center" flexShrink={0} width={sizeIcon}>
                      <Connector
                        orientation={orientation}
                        color={activeStep >= index ? '#A7BD84' : '#c4c4c4'}
                      />
                    </Stack>
                    <Stack width="100%" />
                  </Stack>
                )}
              </React.Fragment>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};

Stepper.propTypes = {
  reverse: PropTypes.bool,
  step: PropTypes.string,
  steps: PropTypes.arrayOf([
    PropTypes.shape({
      label: PropTypes.string,
      label2: PropTypes.string,
      value: PropTypes.string,
    }),
  ]),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

Stepper.defaultProps = {
  reverse: false,
  step: '',
  steps: [{ label: 'Step 1', label2: 'Step 1', value: 'step-1' }],
  size: 'medium',
  orientation: 'horizontal',
};

export default Stepper;
