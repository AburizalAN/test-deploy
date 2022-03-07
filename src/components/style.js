import { TextField } from '@mui/material';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Styled = {
  MainContainer: styled.div``,
  ToolbarContainer: styled.div`
    position: sticky;
    top: 0;
    margin-top: 0;
    z-index: 1;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 100%;
    position: sticky;

    align-items: center;
    justify-content: center;
    padding: 15px 0;
    background: #ffffff;
    img {
      // margin-left: auto;
      justify-content: center;
      // position: absolute;
      // left: 50%;
      // margin-left: -50px !important; /* 50% of your logo width */
      // display: block;
      // width: 100px;
      // transform: translateX(-50%);
      // left: 50%;
      // position: absolute;
    }
    div.icons {
      font-weight: 300;
      svg {
        margin-right: 10px;
      }
      display: flex;
      align-items: center;
      margin-left: auto;
    }
  `,
  Container: styled.div`
    width: 100vw;
    // display: flex;
    // width: 100%;
    // flex-direction: column;
  `,
  SearchContainer: styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    // width: 50%;
    padding: 20px 0;
    z-index: 1;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

    div.icons {
      justify-content: space-around;
      width: 30%;

      svg {
        margin-right: 10px;
      }
      display: flex;
      align-items: center;
      margin-left: auto;
    }
  `,
  Search: styled(TextField)`
    &&& {
      font-size: 13px;
      margin: 0 10px;
      width: 100%;
      // border: 1px solid #25282b;
      div:first-child {
        max-height: 40px;
        border-radius: 10px;
        // border: 1px solid #25282b;
      }
      fieldset.MuiOutlinedInput-notchedOutline {
        border: 1px solid #25282b;
      }
      input.MuiOutlinedInput-input {
        font-size: 13px;
        color: #6f6f6f;
        font-weight: 700;
      }
    }
  `,
  SectionBorder: styled.section`
    margin: 10px 0 0;
  `,
};

export const MainContainer = styled.div`
  body {
    background: white;
  }
`;
export const ToolbarContainer = styled.div`
  position: sticky;
  top: 0;
  margin-top: 0;
  z-index: 1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  position: sticky;

  align-items: center;
  justify-content: center;
  padding: 15px 0;
  background: #ffffff;
  img {
    // margin-left: auto;
    justify-content: center;
    // position: absolute;
    // left: 50%;
    // margin-left: -50px !important; /* 50% of your logo width */
    // display: block;
    // width: 100px;
    // transform: translateX(-50%);
    // left: 50%;
    // position: absolute;
  }
  div.icons {
    font-weight: 300;
    svg {
      margin-right: 10px;
    }
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;
export const Container = styled.div`
  // width: 100vw;
  // display: flex;
  // width: 100%;
  // flex-direction: column;
`;
export const CustomContainer = styled.div`
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`;
export const FlexContainer = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
  margin-bottom: ${({ mb }) => (mb ? mb : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
`;
export const SearchContainer = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  position: sticky;
  background: #fff;
  padding: 8px 0;
  z-index: 1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

  div.icons {
    justify-content: space-around;
    width: 20%;

    svg {
      ${'' /* margin-right: 10px; */}
    }
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;
export const FixedContainer = styled.div`
  position: fixed;
  max-width: 28rem;
  width: 100%;
  z-index: 1;
  top: 0;
`;
export const BottomFixedContainer = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
`;
export const ProductContainer = styled.div`
  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }
  background: #fff;
  display: flex;
  // width: 100vw;
  // position: fixed;
  // width: 50%;
  padding: 8px 0;
  z-index: 1;
  top: 0;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  ${'' /* margin-top: 10px; */}
  padding-right: 20px;

  div.chevronWrapper {
    svg {
      // font-size: 24px;
      width: 32px;
    }
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-right: 33px;
    width: fit-content;
  }

  div.icons {
    justify-content: flex-end;
    width: 20%;

    ${
      '' /* svg {
      margin-right: 10px;
      margin-top: 10px;
    } */
    }
    display: flex;
    align-items: center;
  }

  div.headWrapper {
    font-weight: 400;
    display: flex;
    align-items: center;
    width: 65%;
    p {
      font-size: 22px;
      margin: 0;
    }
  }
`;
export const Search = styled(TextField)`
  &&& {
    font-size: 13px;
    margin: 0 20px;
    width: 100%;
    div:first-child {
      max-height: 40px;
      border-radius: 10px;
    }
    fieldset.MuiOutlinedInput-notchedOutline {
      border: 0px solid #25282b;
      background: #f5f5f5;
      z-index: -1;
    }
    input.MuiOutlinedInput-input {
      font-size: 13px;
      color: #6f6f6f;
      font-weight: 700;
    }
    input.inputSearch {
      padding: 16.5px 14px;
      font-weight: 400;
    }
    div.iconWrap {
      padding: 0;
      svg {
        padding: 0;
      }
    }
    ${({ sx }) => sx ?? ''}
  }
`;
export const SectionBorder = styled.section`
  margin: 5px 0 0 0;
`;

export const ContentSection = styled.section`
  margin: 10px 0 0;
  background-color: #fff;
`;

export const ChildWrapper = styled.div`
  margin-top: ${(props) => (props.filter ? '100px' : '50px')};
  margin-bottom: ${(props) => (props.filter ? '65px' : '12px')};
  overflow: auto;
`;

export default Styled;
