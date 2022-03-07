import PropTypes from 'prop-types';
import { IconButton as MuiIconButton } from '@mui/material';
import styled from 'styled-components';

const IconButton = styled(MuiIconButton)`
  &&& {
    box-shadow: none;
    text-transform: none;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#ED8734')};
    color: ${(props) => (props.textcolor ? props.textcolor : '#FFFFFF')};
    border-color: ${(props) => (props.border ? props.border : props.bgcolor)};
    border: ${(props) => (props.border == 'none' ? '0px' : '1px solid')};
    margin: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StyledIconButton = ({
  bgcolor,
  children,
  textcolor,
  border,
  minwidth,
  onClick,
}) => {
  return (
    <IconButton
      variant="contained"
      bgcolor={bgcolor}
      textcolor={textcolor}
      border={border}
      minwidth={minwidth}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};

StyledIconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
};
