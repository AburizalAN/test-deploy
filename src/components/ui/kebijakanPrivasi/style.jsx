import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Styled = {
  Container: styled(Box)`
    &&& {
      padding: 12px;
    }
  `,
  Title: styled(Typography)`
    &&& {
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      margin: 20px 0;
    }
  `,
  Text: styled(Typography)`
    &&& {
      margin-bottom: 12px;
      font-size: 14px;
    }
  `,
  List: styled(Typography)`
    &&& {
      display: flex;
      flex-direction: row;
    }
  `,
  NumberList: styled(Typography)`
    &&& {
      margin-right: 8px;
      /* font-weight: bold; */
      font-size: 14px;
    }
  `,
  ListContent: styled(Typography)`
    &&& {
      font-size: 14px;
      margin-bottom: 8px;
    }
  `,
  ListTitle: styled(Typography)`
    &&& {
      font-weight: bold;
      font-size: 16px;
      margin-right: 8px;
      margin: 12px 0;
    }
  `,
  MenuLink: styled.a`
    &&& {
      display: block;
      text-decoration: none;
      font-weight: 600;
      color: #25282b;
      margin: 6px 0;
    }
  `,
};

export default Styled;
