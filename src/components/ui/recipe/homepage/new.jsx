// react
import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import dompurify from 'dompurify';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button'

import { StyledButton } from 'components/ui/button';
const Cards = dynamic(() => import('components/ui/recipe/card'));
const CatItemA = '/assets/img/CatItem-1.jpg';
const FailedA = '/assets/img/load-failed/failed1.jpg';
let img = '';

const Button = styled.a`
  background-color: #265329;
  color: white;
  text-decoration: none;
  padding: 8px 32px;
  font-size: 13px;
  border-radius: 12px;
`;

const fetchItem = (data) => {
  if (data.length != 0) {
    return data.map((item, index) => {
      if (item.better_featured_image != null) {
        img = item.better_featured_image.source_url;
      } else {
        img = FailedA;
      }
      if (index < 4) {
        return (
          <Link href={`resep/${item.slug}`} passHref>
            <Box key={item.id} sx={{ width: '50%', padding: '12px 9px' }}>
              <Cards
                fill
                title={item.title.rendered}
                img={img}
                time={item.acf.time}
                ribbon={item.label_recipe_name}
              />
            </Box>
          </Link>
        );
      }
    });
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          marginTop: '20px',
          width: '100%',
        }}
      >
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
      </Box>
    );
  }
};

const New = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(163, 197, 151, 0.6)',
        width: '100%',
        padding: '12px',
        marginTop: '36px',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Resep Terbaru
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ margin: '12px 20px', fontWeight: 'bold' }}
        >
          Temukan Resep Terbaru untuk Inspirasi Menu Masakanmu
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          marginTop: '20px',
        }}
      >
        {fetchItem(props.items)}
      </Box>
      <Box
        sx={{ textAlign: 'center', marginBottom: '20px', marginTop: '30px' }}
      >
        {/* <StyledButton bgcolor="#265329" border="none" href="/recipe/resep_terbaru">
          Lihat Semua
        </StyledButton> */}
        <Button href="/resep/resep-terbaru">Lihat Semua</Button>
      </Box>
    </Box>
  );
};

export default New;
