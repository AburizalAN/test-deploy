import React, { useState, useEffect } from 'react';
import { ChildWrapper, MainContainer } from 'components/style';
import styled from 'styled-components';
import AppBarSearch from 'components/ui/search/AppBarSearch';

import {
  SectionArtikelResep,
  SectionPopularProduct,
  SectionRecipe,
} from 'components/ui/search/style';

const list = [
  'Resep Plant-Based',
  'Your workout buddy',
  'Realfood',
  '5 Kesehatan Yoga untuk Tubuh',
  'Hair power program 12 hari',
];

const ThisChildWrapper = styled(ChildWrapper)`
  padding-top: 12px;
`;

const Search = () => {
  return (
    <MainContainer>
      <AppBarSearch />
      <ThisChildWrapper>
        {/* <SectionSearchPopuler list={list} /> */}
        <SectionPopularProduct limit={3} />
        <SectionArtikelResep />
        <SectionRecipe />
      </ThisChildWrapper>
    </MainContainer>
  );
};

export default Search;
