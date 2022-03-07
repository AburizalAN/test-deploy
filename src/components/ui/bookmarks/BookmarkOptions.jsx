import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BookmarkOptions = ({ option, setOption }) => {
  const handleClickOptions = (value) => () => {
    setOption(value);
  };

  return (
    <Wrapper>
      <li
        className={`${option === 'all' ? 'active' : ''}`}
        onClick={handleClickOptions('all')}
      >
        All
      </li>
      <li
        className={`${option === 'artikel' ? 'active' : ''}`}
        onClick={handleClickOptions('artikel')}
      >
        Artikel Tersimpan
      </li>
      <li
        className={`${option === 'resep' ? 'active' : ''}`}
        onClick={handleClickOptions('resep')}
      >
        Resep Tersimpan
      </li>
    </Wrapper>
  );
};

export default BookmarkOptions;

BookmarkOptions.propTypes = {
  option: PropTypes.string,
  setOption: PropTypes.func,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  background: #ffffff;
  padding: 12px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);

  li {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #6f6f6f;
    margin-right: 20px;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
    font-size: 15px;
    color: #265329;
    padding: 4px 8px;
    background: #f6f6f6;
    border-radius: 8px;
  }
`;
