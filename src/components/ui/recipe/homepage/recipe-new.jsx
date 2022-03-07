import React from 'react';
import styled from 'styled-components';
import RecipeHeaderSection from './recipe-header-section';

import BookmarkLight from 'components/icons/bookmark-light';

const NewRecipeImgA = '/assets/img/newRecipe-1.jpg';
const NewRecipeImgB = '/assets/img/newRecipe-2.jpg';
const NewRecipeImgC = '/assets/img/newRecipe-3.jpg';
const NewRecipeImgD = '/assets/img/newRecipe-4.jpg';

const Styled = {
  ItemWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
  Item: styled.div`
    position: relative;
    flex: none;
    width: 45%;
    min-height: 200px;
    background-color: pink;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    justify-content: center;
  `,
  ItemImg: styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  `,
  DescItem: styled.div`
    background-color: rgba(37, 40, 43, 0.5);
    min-width: 126px;
    height: 66px;
    position: absolute;
    bottom: 12px;
    text-align: center;
    padding: 4px 10px;
    border-radius: 8px;
  `,
  TitleItem: styled.p`
    max-width: 106px;
    font-size: 11px;
    font-weight: 700;
    color: white;
  `,
  Subtitle: styled.div`
    /* background-color:pink; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  `,
  SubtitleItem: styled.span`
    font-size: 11px;
    color: white;
  `,
  Bookmark: styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(37, 40, 43, 0.5);
    color: white;
    z-index: 1;
    position: absolute;
    top: 8px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default function RecipeNew() {
  return (
    <>
      <RecipeHeaderSection />
      <Styled.ItemWrapper>
        <Styled.Item>
          <Styled.Bookmark>
            <BookmarkLight />
          </Styled.Bookmark>
          <Styled.ItemImg src={NewRecipeImgA} />
          <Styled.DescItem>
            <Styled.TitleItem>Beras Kencur</Styled.TitleItem>
            <Styled.Subtitle>
              <Styled.SubtitleItem>Appetizer</Styled.SubtitleItem>
              <Styled.SubtitleItem>.</Styled.SubtitleItem>
              <Styled.SubtitleItem>24 mins</Styled.SubtitleItem>
            </Styled.Subtitle>
          </Styled.DescItem>
        </Styled.Item>
        <Styled.Item>
          <Styled.Bookmark>
            <BookmarkLight />
          </Styled.Bookmark>
          <Styled.ItemImg src={NewRecipeImgB} />
          <Styled.DescItem>
            <Styled.TitleItem>Rendang Sehat tanpa Santan</Styled.TitleItem>
            <Styled.Subtitle>
              <Styled.SubtitleItem>Main Course</Styled.SubtitleItem>
              <Styled.SubtitleItem>.</Styled.SubtitleItem>
              <Styled.SubtitleItem>24 mins</Styled.SubtitleItem>
            </Styled.Subtitle>
          </Styled.DescItem>
        </Styled.Item>
        <Styled.Item>
          <Styled.Bookmark>
            <BookmarkLight />
          </Styled.Bookmark>
          <Styled.ItemImg src={NewRecipeImgC} />
          <Styled.DescItem>
            <Styled.TitleItem>Nasi Pecel Plant based</Styled.TitleItem>
            <Styled.Subtitle>
              <Styled.SubtitleItem>Main Course</Styled.SubtitleItem>
              <Styled.SubtitleItem>.</Styled.SubtitleItem>
              <Styled.SubtitleItem>24 mins</Styled.SubtitleItem>
            </Styled.Subtitle>
          </Styled.DescItem>
        </Styled.Item>
        <Styled.Item>
          <Styled.Bookmark>
            <BookmarkLight />
          </Styled.Bookmark>
          <Styled.ItemImg src={NewRecipeImgD} />
          <Styled.DescItem>
            <Styled.TitleItem>Corn Dog Rendah Karbo</Styled.TitleItem>
            <Styled.Subtitle>
              <Styled.SubtitleItem>Main Course</Styled.SubtitleItem>
              <Styled.SubtitleItem>.</Styled.SubtitleItem>
              <Styled.SubtitleItem>24 mins</Styled.SubtitleItem>
            </Styled.Subtitle>
          </Styled.DescItem>
        </Styled.Item>
      </Styled.ItemWrapper>
    </>
  );
}
