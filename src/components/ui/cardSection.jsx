import PropTypes from 'prop-types';
import { Card as MuiCard } from '@mui/material';
import styled from 'styled-components';

const Card = styled(MuiCard)`
  &&& {
    display: inline-flex;
    box-shadow: none;
    text-transform: none;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#FFFFFF')};
    color: ${(props) => (props.textcolor ? props.textcolor : '#000000')};
    border-color: ${(props) => (props.border ? props.border : props.bgcolor)};
    border: ${(props) => (props.border == 'none' ? '0px' : '1px solid')};
    border-radius: 10px;
    padding: 0 10px;
    min-width: ${(props) => (props.minWidth ? props.minWidth : '250px')};
    justify-content: space-between;
    height: ${(props) => (props.height ? props.height : 'fit-content')};
  }
`;

export const StyledCardSection = ({
  bgcolor,
  children,
  textcolor,
  border,
  minWidth,
  height,
}) => {
  return (
    <Card
      bgcolor={bgcolor}
      textcolor={textcolor}
      border={border}
      minWidth={minWidth}
      height={height}
    >
      {children}
    </Card>
  );
};

StyledCardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
  border: PropTypes.string,
  minWidth: PropTypes.string,
};
