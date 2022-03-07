import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import MUISelect from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import styled from '@mui/system/styled';

import ArrowDownIcon from 'components/icons/arrow-down';

export const globalInputStyle = ({ theme, value }) => {
  const { palette, shape, typography } = theme;

  const { common } = palette;
  const { fontFamily } = typography;

  return {
    border: '1px solid rgba(37, 40, 43, 0.25)',
    borderRadius: shape.borderRadius * 3,
    color: value ? common.black : 'rgba(37, 40, 43, 0.5)',
    fontFamily,
    fontSize: 13,
    lineHeight: '18px',
    outline: 'none',
    width: '100%',

    '& .MuiSelect-select': {
      padding: '10px 12px',
    },

    '&::placeholder': {
      color: 'rgba(37, 40, 43, 0.5)',
    },

    '&:focus': {
      boxShadow: '0 0 0 1px rgba(37, 40, 43, 0.75)',
    },
  };
};

const StyledInputBase = styled(InputBase)(globalInputStyle);

const Select = (props) => {
  const { options, placeholder, ...restProps } = props;

  return (
    <MUISelect
      displayEmpty
      input={<StyledInputBase {...restProps} />}
      MenuProps={{
        sx: {
          '& .MuiMenu-paper': {
            borderRadius: 2,
          },
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            fontSize: 13,
          },
        },
      }}
      IconComponent={ArrowDownIcon}
    >
      {placeholder && (
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
      )}
      {options.map((option, index) => {
        return (
          <MenuItem key={option?.key ?? index} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </MUISelect>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  placeholder: PropTypes.string,
};

Select.defaultProps = { options: [], placeholder: '' };

export default Select;
