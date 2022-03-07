import React from 'react';
import styled from 'styled-components';

const BookmarkEmpty = () => {
  return (
    <Wrapper>
      <img src="/assets/img/bookmark.png" alt="" />
      <p className="title">Belum ada bookmark </p>
      <p className="desc">
        Ketuk icon bookmark untuk menambahkan ke dalam daftar
      </p>
    </Wrapper>
  );
};

export default BookmarkEmpty;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
  }
  .desc {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #6f6f6f;
    width: 300px;
  }
`;
