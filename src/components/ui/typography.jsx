import React from 'react';
import Typography from '@mui/material/Typography';

const H1 = ({ children }) => {
  return <Typography variant="h1">{children}</Typography>;
};
const H2 = ({ children }) => {
  return <Typography variant="h2">{children}</Typography>;
};
const H3 = ({ children }) => {
  return <Typography variant="h3">{children}</Typography>;
};
const H4 = ({ children }) => {
  return <Typography variant="h4">{children}</Typography>;
};
const H5 = ({ children }) => {
  return <Typography variant="h5">{children}</Typography>;
};
const H6 = ({ children }) => {
  return <Typography variant="h6">{children}</Typography>;
};
const Subtitle1 = ({ children }) => {
  return <Typography variant="subtitle1">{children}</Typography>;
};
const Subtitle2 = ({ children }) => {
  return (
    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
      {children}
    </Typography>
  );
};
const Body1 = ({ children }) => {
  return <Typography variant="body1">{children}</Typography>;
};
const Body2 = ({ children }) => {
  return <Typography variant="body2">{children}</Typography>;
};
const Button = ({ children }) => {
  return <Typography variant="button">{children}</Typography>;
};
const Caption = ({ children }) => {
  return <Typography variant="caption">{children}</Typography>;
};
const Overline = ({ children }) => {
  return <Typography variant="overline">{children}</Typography>;
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Button,
  Caption,
  Overline,
};
// export default function TypographyAM() {
//     return (
//         <div>
//             <H1>Goodbye world</H1>
//             <H2>Goodbye world</H2>
//             <H3>Goodbye world</H3>
//             <H4>Goodbye world</H4>
//             <H5>Goodbye world</H5>
//             <H6>Goodbye world</H6>
//             <Subtitle1>Goodbye world</Subtitle1>
//             <Subtitle2>Goodbye world</Subtitle2>
//             <Body1>Goodbye world</Body1>
//             <Body2>Goodbye world</Body2>
//             <Button>Goodbye world</Button>
//             <Caption>Goodbye world</Caption>
//             <Overline>Goodbye world</Overline>

//         </div>
//     )
// }
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledTypography = ({
  children,
  fill,
  color,
  underlined,
  size,
  weight,
  padding,
  align,
}) => {
  const div = {
    backgroundColor: fill ? fill : '#FFFFFF',
    color: color ? color : '#000000',
    borderBottom: underlined ? underlined : '',
    borderRadius: '3px',
    padding: padding ? padding : '5px',
    margin: 'auto 0',
    fontSize: size ? size : '13x',
    fontWeight: weight ? weight : '',
    textAlign: align ? align : '',
  };

  return <div style={div}>{children}</div>;
};

StyledTypography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  fill: PropTypes.string,
  underlined: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  padding: PropTypes.string,
};
