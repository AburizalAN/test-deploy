import PropTypes from 'prop-types';
import { Card as MuiCard } from '@mui/material';
import styled from 'styled-components';

const Card = styled(MuiCard)`
  &&& {
    box-shadow: none;
    text-transform: none;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#FFFFFF')};
    color: ${(props) => (props.textcolor ? props.textcolor : '#000000')};
    border-color: ${(props) => (props.border ? props.border : props.bgcolor)};
    border: ${(props) => (props.border ? props.border : '1px solid #A0C16B')};
    border-radius: 10px;
    padding: 10px 5px;
    min-width: ${(props) => (props.minWidth ? props.minWidth : '100%')};
    min-height: 100%;
    justify-content: center;
    text-align: center;
  }
`;

export const Contact = ({ bgcolor, children, textcolor, border, minWidth }) => {
  return (
    <Card
      bgcolor={bgcolor}
      textcolor={textcolor}
      border={border}
      minWidth={minWidth}
    >
      {children}
    </Card>
  );
};

Contact.propTypes = {
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
