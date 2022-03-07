import React from 'react';
import styled from 'styled-components/macro';
import CatItemA from '../../../../assets/img/CatItem-1.jpg';
import CatItemB from '../../../../assets/img/CatItem-2.jpg';
import CatItemC from '../../../../assets/img/CatItem-3.jpg';
import CatItemD from '../../../../assets/img/CatItem-4.jpg';
import CatItemE from '../../../../assets/img/CatItem-5.jpg';
import CatItemF from '../../../../assets/img/CatItem-6.jpg';
import CatItemG from '../../../../assets/img/CatItem-7.jpg';
import CatItemH from '../../../../assets/img/CatItem-8.jpg';
import { BookmarkLight } from '../../../icons/bookmark-light';
const Styled = {
  CardWrapper: styled.div`
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  Card: styled.div`
    min-height: 205px;
    width: 47%;
    /* background-color:pink; */
    margin: 5px;
    margin-bottom: 12px;
    position: relative;
  `,
  ImgCard: styled.img`
    position: relative;
    width: 100%;
    height: 150px;
    top: 0;
    border-radius: 8px;
  `,
  CardBody: styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: 13px;
  `,
  CardTitle: styled.p`
    margin: 8px 0;
    font-weight: 600;
  `,
  CardSubtitle: styled.span`
    margin-right: 8px;
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
export default function Detail() {
  return (
    <Styled.CardWrapper>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemA} />
        <Styled.CardBody>
          <Styled.CardTitle>Nasi kuning untuk diet vegan</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>14 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemB} />
        <Styled.CardBody>
          <Styled.CardTitle>Rendang Sehat Tanpa Santan</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>24 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemC} />
        <Styled.CardBody>
          <Styled.CardTitle>Nasi Pecel Plant Based</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>7 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemD} />
        <Styled.CardBody>
          <Styled.CardTitle>Corn Dog Rendah Karbo</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>14 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemE} />
        <Styled.CardBody>
          <Styled.CardTitle>Mie Ayam Sehat Warna-Warni</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>14 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemF} />
        <Styled.CardBody>
          <Styled.CardTitle>Rendang Sehat Tanpa Santan</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>14 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemH} />
        <Styled.CardBody>
          <Styled.CardTitle>Roti Bakar Rendah Kalori</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>14 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
      <Styled.Card>
        <Styled.Bookmark>
          <BookmarkLight color="none" />
        </Styled.Bookmark>
        <Styled.ImgCard src={CatItemG} />
        <Styled.CardBody>
          <Styled.CardTitle>Red Velvet</Styled.CardTitle>
          <Styled.CardSubtitle>Main Course</Styled.CardSubtitle>
          <Styled.CardSubtitle>.</Styled.CardSubtitle>
          <Styled.CardSubtitle>14 mins</Styled.CardSubtitle>
        </Styled.CardBody>
      </Styled.Card>
    </Styled.CardWrapper>
  );
}
