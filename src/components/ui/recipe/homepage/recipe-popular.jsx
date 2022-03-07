import * as React from 'react';
import styled from 'styled-components';
import RecipeHeaderSection from './recipe-header-section';

import TimerFill from 'components/icons/timer-fill';
import BookmarkLight from 'components/icons/bookmark-light';

const PopularRecipeA = '/assets/img/PopularRecipe-1.png';
const PopularRecipeB = '/assets/img/PopularRecipe-2.png';

// import { StyledButton } from './button';

const Styled = {
  MenuWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  `,
  ItemWrapper: styled.div`
    display: flex;
    width: 100vw;
    overflow: scroll;
    /* justify-content:center; */
  `,
  Item: styled.div`
    /* min-width:100px; */
    flex: none;
    width: 45%;
    min-height: 250px;
    background-color: white;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  ItemBody: styled.div`
    height: 70%;
    width: 100%;
    padding: 60px 0;
    background: #f7f7f7;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    position: absolute;
    bottom: 0;
  `,
  ImageItem: styled.img`
    width: 110px;
    height: 110px;
    position: absolute;
    z-index: 1;
    top: 20px;
  `,
  DescItem: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
  `,
  TitleItem: styled.span`
    width: 65%;
  `,

  CTAItem: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    position: absolute;
    bottom: 0;
    /* background-color:pink; */
  `,
};
const Button = styled.button`
  border: none;
  background-color: ${(props) => (props.primary ? '#FFC480' : '#B6CFB1')};
  color: ${(props) => (props.primary ? '#D26C19' : '#486140')};
  font-size: 9px;
  padding: 4px 9px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function PopularRecipe() {
  return (
    <>
      <RecipeHeaderSection />
      <Styled.ItemWrapper>
        <Styled.Item>
          <Styled.ImageItem src={PopularRecipeA} />
          <Styled.ItemBody>
            <Styled.DescItem>
              <Styled.TitleItem>Omelete Sayur nan Sehat</Styled.TitleItem>
              <BookmarkLight />
            </Styled.DescItem>
            <Styled.CTAItem>
              <Button>
                <TimerFill /> 45 min
              </Button>
              <Button primary>Main Course</Button>
            </Styled.CTAItem>
          </Styled.ItemBody>
        </Styled.Item>
        <Styled.Item>
          <Styled.ImageItem src={PopularRecipeB} />
          <Styled.ItemBody>
            <Styled.DescItem>
              <Styled.TitleItem>Salad Sehat</Styled.TitleItem>
              <BookmarkLight />
            </Styled.DescItem>
            <Styled.CTAItem>
              <Button>
                <TimerFill /> 45 min
              </Button>
              <Button primary>Main Course</Button>
            </Styled.CTAItem>
          </Styled.ItemBody>
        </Styled.Item>
        <Styled.Item>
          <Styled.ImageItem src={PopularRecipeA} />
          <Styled.ItemBody>
            <Styled.DescItem>
              <Styled.TitleItem>Omelete Sayur nan Sehat</Styled.TitleItem>
              <BookmarkLight />
            </Styled.DescItem>
            <Styled.CTAItem>
              <Button>
                <TimerFill /> 45 min
              </Button>
              <Button primary>Main Course</Button>
            </Styled.CTAItem>
          </Styled.ItemBody>
        </Styled.Item>
      </Styled.ItemWrapper>
    </>
  );
}
