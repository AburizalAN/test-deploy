import React from 'react';
import PropTypes from 'prop-types';
import { useInput } from '@mui/base';
import styled from '@mui/system/styled';

export const globalInputStyle = ({ theme }) => {
  const { palette, shape, typography } = theme;

  const { common } = palette;
  const { fontFamily } = typography;

  return {
    border: '1px solid rgba(37, 40, 43, 0.25)',
    borderRadius: shape.borderRadius * 3,
    color: common.black,
    fontFamily,
    fontSize: 13,
    lineHeight: '18px',
    outline: 'none',
    padding: '10px 12px',
    width: '100%',

    '&::placeholder': {
      color: 'rgba(37, 40, 43, 0.5)',
    },

    '&:focus': {
      boxShadow: '0 0 0 1px rgba(37, 40, 43, 0.75)',
    },
  };
};

const StyledInputEl = styled('input')(globalInputStyle);

const StyledTextAreaEl = styled(styled('textarea')(globalInputStyle))`
  resize: none;
`;

const Input = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);
  const { multiline, ...restProps } = props;

  let input = <StyledInputEl {...restProps} {...getInputProps()} />;

  switch (true) {
    case multiline:
      input = <StyledTextAreaEl {...restProps} {...getInputProps()} />;
      break;
  }

  return <div {...getRootProps()}>{input}</div>;
});

Input.propTypes = { multiline: PropTypes.bool };

Input.defaultProps = { multiline: false };

export default Input;
