import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputCodeVoucher = ({ value, onChange, placeholder, isErrorVoucher }) => {
  const Input = styled.input`
    flex: 1;
    min-width: 0;
    padding: 8px;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 10px;
    border: none;
    margin-right: 20px;
    font-size: 13px;
    line-height: 1.35;
    &:focus-visible {
      border: none;
      outline: none;
    }
    box-shadow: ${isErrorVoucher ? '0 0 0 1px #b42519' : 'none'};
  `;

  return <Input value={value} onChange={onChange} placeholder={placeholder} />;
};

InputCodeVoucher.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isErrorVoucher: PropTypes.bool,
};

export default InputCodeVoucher;
