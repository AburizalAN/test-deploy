import styled from 'styled-components';

// mui
import Box from '@mui/material/Box';

const Styled = {
  Container: styled(Box)`
    &&& {
      height: 56px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 12px;
    }
  `,
  Searchbox: styled(Box)`
    &&& {
      width: 80%;
      height: 100%;
      background-color: #f7f7f7;
      border-radius: 10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
    }
  `,
  Searchbar: styled.input`
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    border: none;
    &:focus {
      outline: none;
    }
  `,
  Menubox: styled(Box)`
    &&& {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15%;
    }
  `,
};

export default Styled;
