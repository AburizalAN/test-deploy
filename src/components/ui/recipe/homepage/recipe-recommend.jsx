import Typography from '@mui/material/Typography';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { escapeHtml } from 'utils/helper';
const ImageA = '/assets/img/khas-indonesia.png';
const ImageB = '/assets/img/quick-easy.png';

const Styled = {
  Header: styled.div`
    padding: 12px;
    /* max-width: 75%; */
  `,
  Title: styled.h1`
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  `,
  Subtitle: styled.p`
    font-size: 15px;
    margin: 8px 0 0 0;
    padding: 0;
  `,
  ItemWrapper: styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Item: styled.div`
    flex: none;
    width: 60%;
    min-height: 300px;
    margin: 6px;
    position: relative;
    border-radius: 8px;
  `,
  Overlay: styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.45) 49.05%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    z-index: 1;
    padding: 12px;
  `,
  ItemImg: styled.img`
    position: absolute;
    min-width: 100px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
    border-radius: 12px;
  `,
};
export default function RecipeRecommend(props) {
  return (
    <Box sx={{ marginBottom: '30px', marginTop: '24px' }}>
      <Styled.Header>
        <Styled.Title>Setelah ini Kamu mau masak apa?</Styled.Title>
        <Styled.Subtitle>
          Rekomendasi resep sehat lainnya untuk Kamu
        </Styled.Subtitle>
      </Styled.Header>
      <Styled.ItemWrapper>
        <Link href="/resep/categories/khas indonesia">
          <Styled.Item>
            <Typography
              sx={{
                position: 'absolute',
                color: 'white',
                zIndex: '1',
                bottom: '12px',
                left: '12px',
                fontSize: '22px',
                fontWeight: '700',
              }}
            >
              Khas Indonesia
            </Typography>
            <Styled.ItemImg src={ImageA} />
          </Styled.Item>
        </Link>
        <Link href="/resep/categories/quick & easy">
          <Styled.Item>
            <Typography
              sx={{
                position: 'absolute',
                color: 'white',
                zIndex: '1',
                bottom: '12px',
                left: '12px',
                fontSize: '22px',
                fontWeight: '700',
              }}
            >
              Quick & Easy
            </Typography>
            <Styled.ItemImg src={ImageB} />
          </Styled.Item>
        </Link>
      </Styled.ItemWrapper>
    </Box>
  );
}
