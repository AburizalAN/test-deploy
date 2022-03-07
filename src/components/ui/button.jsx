import React from 'react';
import styled from 'styled-components';

import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

const Button = styled(MuiButton)`
  &&& {
    box-shadow: none;
    text-transform: none;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#486140')};
    color: ${(props) => (props.textcolor ? props.textcolor : '#FFFFFF')};
    border-color: ${(props) =>
      props.textcolor ? props.textcolor : props.bgcolor};
    border: ${(props) => (props.border == 'none' ? '0px' : '1px solid')};
    border-radius: 10px;
    margin-top: ${(props) => props.mt ?? '10px'};
    padding: ${(props) => props.p ?? '10px'};
    font-size: ${(props) => props.fz ?? '11px'};
    // z-index: 1;
    position: ${(props) => (props.absolutecenter ? 'absolute' : '')};
    transform: ${(props) => (props.absolutecenter ? 'translateX(-50%)' : '')};
    left: ${(props) => (props.absolutecenter ? '50%' : '')};
    bottom: ${(props) => (props.absolutecenter ? '10px' : '')};
    background: ${(props) => (props.bgcolorbg ? props.bgcolorbg : '')};
    height: ${(props) => (props.height ? props.height : '')};
    width: ${(props) => props.width ?? ''};
    min-height: ${(props) => props.height ?? ''};
    background-color: ${(props) =>
      props.disabled ? '#d1d1d6 !important' : props.bgcolor};
  }
`;

const Styled = {
  Button: styled(MuiButton)`
    &&& {
      box-shadow: none;
      text-transform: none;
      background-color: ${(props) => props.bgcolor ?? ''};
      border-radius: 10px;
      margin-top: 10px;
      font-size: 11px;
    }
  `,
  Link: styled(Link)`
    &&& {
      color: #6f6f6f;
      font-size: 15px;
      text-decoration: none;
      font-weight: ${(props) => (props.status ? '700' : '400')};
      background-color: ${(props) => (props.status ? '#F6F6F6' : '')};
      color: ${(props) => (props.status ? '#265329' : '')};
      padding: ${(props) => (props.status ? '4px 8px' : '')};
      border-radius: ${(props) => (props.status ? '8px' : '')};
    }
  `,
};
export const StyledButton = ({
  bgcolor,
  textcolor,
  border,
  fullWidth,
  absolutecenter,
  height,
  width,
  mt,
  p,
  fz,
  size,
  bgcolorbg,
  onClick,
  variant = 'contained',
  children,
  disabled,
  href,
  sx,
}) => {
  console.log(sx);
  return (
    <Button
      variant={variant}
      bgcolor={bgcolor}
      textcolor={textcolor}
      border={border}
      fullWidth={fullWidth}
      size={size}
      bgcolorbg={bgcolorbg}
      height={height}
      onClick={onClick}
      absolutecenter={absolutecenter}
      width={width}
      mt={mt}
      disabled={disabled}
      p={p}
      href={href}
      fz={fz}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export const Links = ({ status, children }) => {
  return <Styled.Link status={status}>{children}</Styled.Link>;
};
StyledButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
  border: PropTypes.string,
  fullWidth: PropTypes.string,
  bgcolorbg: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  mt: PropTypes.string,
  fz: PropTypes.string,
  variant: PropTypes.string,
  absolutecenter: PropTypes.bool,
  size: PropTypes.oneOfType(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};
