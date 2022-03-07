import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

export const StyledAlert = ({
  bgcolor,
  variant,
  icon,
  align,
  children,
  border,
  textcolor,
}) => {
  const style = {
    borderRadius: '12px',
    justifyContent: align,
    textAlign: 'center',
    margin: '20px auto',
    backgroundColor: bgcolor,
    borderColor: border,
    color: textcolor,
  };

  return (
    <Alert icon={icon} variant={variant} style={style}>
      {children}
    </Alert>
  );
};

StyledAlert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
  icon: PropTypes.bool,
  align: PropTypes.string,
  border: PropTypes.string,
  textcolor: PropTypes.string,
};
