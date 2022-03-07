import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';

const ButtonTransaction = (props) => {
  const { sx, variant, ...restProps } = props;

  let color, background, borderColor;
  switch (variant) {
    case 'success':
      color = '#fff';
      background = 'linear-gradient(#B2D678, #A0C16B)';
      borderColor = 'linear-gradient(#B2D678, #A0C16B)';
      break;
    case 'success-outlined':
      color = '#A0C16B';
      background = 'transparent';
      borderColor = '#A0C16B';
      break;
    case 'warning':
      color = '#fff';
      background = 'linear-gradient(#FFA45A, #ED8734)';
      borderColor = 'linear-gradient(#FFA45A, #ED8734)';
      break;
    default:
      color = '#fff';
      background = 'linear-gradient(#aaaaaa, #a1a1a1)';
      borderColor = 'linear-gradient(#aaaaaa, #a1a1a1)';
      break;
  }

  return (
    <ButtonBase
      disableElevation
      variant="contained"
      sx={{
        background,
        borderColor,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        fontFamily: '"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        color,
        fontSize: '13px',
        fontWeight: 600,
        height: '34px',
        letterSpacing: '0.25px',
        lineHeight: '18px',
        minWidth: '0px',
        overflow: 'hidden',
        px: '12px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        ...sx,
      }}
      {...restProps}
    />
  );
};

ButtonTransaction.propTypes = {
  outlined: PropTypes.bool,
  sx: PropTypes.object,
  variant: PropTypes.oneOf([
    'default',
    'success',
    'success-outlined',
    'warning',
  ]),
};

ButtonTransaction.defaultProps = {
  outlined: false,
  sx: {},
  variant: 'default',
};

export default ButtonTransaction;
