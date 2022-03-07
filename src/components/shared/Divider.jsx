import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)`
  position: relative;
  border: none;
  border-top: 1px solid #828282;
  padding: 0;
  > legend {
    padding: 0 12px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.25px;
    text-align: center;
    color: #828282;
  }
`;

const Divider = (props) => {
  const { children, ...restProps } = props;

  return (
    <StyledBox component="fieldset" {...restProps}>
      {children && <legend>{children}</legend>}
    </StyledBox>
  );
};

Divider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Divider;
