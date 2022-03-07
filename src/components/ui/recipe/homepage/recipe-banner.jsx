// import { Styled } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Banner = '/assets/img/menu-primary.png';
const MenuA = '/assets/img/menu-1.png';
const MenuB = '/assets/img/menu-2.png';
const MenuC = '/assets/img/menu-3.png';

const Styled = {
  Menu: styled.div`
    display: grid;
    grid-template-areas: 'primary primary primary';
    grid-gap: 10px;
    padding: 10px;
  `,
  MenuItem: styled.div`
    /* background-color: ${(props) => (props.primary ? 'pink' : 'green')}; */
    border-radius: 8px;
    padding: 10px;
    min-height: ${(props) => (props.primary ? '100px' : '136px')};
    /* min-width: ${(props) => (props.primary ? '100%' : '33.3%')}; */
    grid-area: ${(props) => (props.primary ? 'primary' : '')};
    position: relative;
  `,
  Image: styled.img`
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    max-width: ${(props) => (props.primary ? 'none' : '120px')};
    height: ${(props) => (props.primary ? '100px' : '160px')};
    object-fit: cover;
  `,
};

function RecipeBanner() {
  return (
    <Styled.Menu>
      <Styled.MenuItem primary>
        <Styled.Image src={Banner} primary />
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.Image src={MenuA} />
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.Image src={MenuB} />
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.Image src={MenuC} />
      </Styled.MenuItem>
    </Styled.Menu>
  );
}

export default RecipeBanner;
