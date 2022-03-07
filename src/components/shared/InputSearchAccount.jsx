import React from 'react';
import PropTypes from 'prop-types';
import { useInput } from '@mui/base';
import styled from '@mui/system/styled';
import SearchIconly from 'components/icons/search-iconly';

export const globalInputStyle = ({ theme }) => {
  const { palette, shape, typography } = theme;

  const { common } = palette;
  const { fontFamily } = typography;

  return {
    border: 'none',
    borderRadius: shape.borderRadius + 1,
    color: common.black,
    backgroundColor: '#f5f5f5',
    fontFamily,
    fontSize: '15px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
    outline: 'none',
    padding: '0px 40px 0px 12px',
    width: '100%',
    height: '36px',

    '&::placeholder': {
      color: '#828282',
    },

    '&:focus': {
      boxShadow: '0 0 0 1px rgba(37, 40, 43, 0.25)',
    },
  };
};

const StyledInputEl = styled('input')(globalInputStyle);

const InputSearchAccount = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);
  const { ...restProps } = props;

  return (
    <label {...getRootProps()} style={{ position: 'relative' }}>
      <StyledInputEl {...restProps} {...getInputProps()} />
      <SearchIconly
        sx={{
          position: 'absolute',
          top: '50%',
          right: 12,
          transform: 'translateY(-50%)',
        }}
      />
    </label>
  );
});

InputSearchAccount.propTypes = {
  placeholder: PropTypes.string,
};

InputSearchAccount.defaultProps = {
  placeholder: 'Cari',
};

export default InputSearchAccount;
