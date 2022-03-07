import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';

import { escapeHtml } from 'utils/helper';
import SearchLight from 'components/icons/search-light';
import Bookmark from './top-nav/Bookmark';

const SharePopup = dynamic(() => import('../SharePopup'), {
  ssr: false,
});

function TopNav(props) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRedirectSearch = async () => {
    await router.push(`/artikel/search/${search}`);
  };

  const handleRedirectBack = async () => {
    await router.back();
  };

  return (
    <Styled.Navbar>
      {props.back && (
        <IconButton size="small" onClick={handleRedirectBack}>
          <img src="/assets/icons/arrow_left.svg" alt="" />
        </IconButton>
      )}
      <Styled.Searchbox>
        <Styled.Search
          placeholder={props.placeholder}
          onChange={handleSearch}
        />
        <Box onClick={handleRedirectSearch}>
          <SearchLight />
        </Box>
      </Styled.Searchbox>

      {/* <Bag /> */}
    </Styled.Navbar>
  );
}

/*
 Make sure to import using dynamic with ssr false
 */

function TopNavDetail(props) {
  const {
    title = 'title',
    isNoShadow,
    isShowShareIcon,
    isShowBookmark = false,
    disableSearch = true,
  } = props;
  const router = useRouter();

  const [isShowSharePopup, setIsShowSharePopup] = useState(false);

  const handleRedirectBack = async () => {
    await router.back();
  };

  const handleOpenSharePopup = () => {
    setIsShowSharePopup((prevState) => !prevState);
  };

  return (
    <Styled.Navbar isNoShadow={isNoShadow}>
      <Styled.TitleWrapper>
        <IconButton size="small" sx={{ p: 0 }} onClick={handleRedirectBack}>
          <img src="/assets/icons/arrow_left.svg" alt="" />
        </IconButton>
        <Styled.PageTitle>{escapeHtml(`${title}`)}</Styled.PageTitle>
      </Styled.TitleWrapper>

      <Styled.IconWrapper>
        <IconButton size="small" onClick={handleOpenSharePopup}>
          <img src="/assets/icons/network.svg" alt="share" />
        </IconButton>
        {isShowBookmark && <Bookmark />}
      </Styled.IconWrapper>

      {isShowShareIcon && (
        <SharePopup
          isShowSharePopup={isShowSharePopup}
          setIsShowSharePopup={setIsShowSharePopup}
        />
      )}
      {!disableSearch && <SearchLight />}
    </Styled.Navbar>
  );
}

export { TopNav, TopNavDetail };

TopNavDetail.propTypes = {
  title: PropTypes.string,
  isNoShadow: PropTypes.bool,
  isShowShareIcon: PropTypes.bool,
  isShowBookmark: PropTypes.bool,
  disableSearch: PropTypes.bool,
};

const Styled = {
  Navbar: styled.div`
    /* width: 28rem; */
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: white;
    ${({ isNoShadow }) =>
      !isNoShadow
        ? css`
            box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
          `
        : css`
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          `}
  `,
  Searchbox: styled.div`
    width: 80%;
    height: 40px;
    background-color: #f7f7f7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Search: styled.input.attrs({
    // placeholderTextColor: "red"
  })`
    &:focus {
      outline: none;
    }
    width: 100%;
    height: 40px;
    background-color: #f7f7f7;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 10px; */
    /* color:black; */
  `,
  TitleWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  PageTitle: styled.h1`
    font-size: 18px;
    font-weight: 700;
    margin: 0 0.5rem 0;
    text-transform: capitalize;
    width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  BackButton: styled.button`
    text-decoration: none;
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
  `,
};
