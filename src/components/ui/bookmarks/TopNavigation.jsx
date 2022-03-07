import React from 'react';

import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const TopNavigation = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Navbar>
      <IconButton size="small" onClick={handleBack}>
        <img src="/assets/icons/arrow_left.svg" alt="" />
      </IconButton>

      <span className="title">Bookmark</span>
    </Navbar>
  );
};

export default TopNavigation;

const Navbar = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  padding: 12px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;

  .title {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.15px;
    color: #000000;
    margin-left: 24px;
  }
`;
