// react
import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import dompurify from 'dompurify';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CategoryLink } from '../../components/ui/category';
import { TopNavDetail } from '../../components/ui/top-nav';
// import {CardDefault} from '../../components/ui/card'
import Box from '@mui/material/Box';
const Cards = dynamic(() => import('components/ui/recipe/card'));
const CatItemA = '/assets/img/CatItem-1.jpg';

export default function PlantBased() {
  const recipeState = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const categoryList = recipeState.listCategory;
  const recipeList = recipeState.listRecipes;

  const router = useRouter();
  //   const {catalog} = router.query
  let image = '';

  useEffect(() => {
    if (!router.isReady) return;
    // dispatch(ACTIONS.recipe.getListBahanUtama(catalog));
    dispatch(ACTIONS.recipe.getListRecipe());
  }, [router.isReady]);

  return (
    // <div>hello</div>
    <Box>
      <TopNavDetail title="Resep" />
      <CategoryLink categories={categoryList} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {recipeList.map((recipe) => {
          if (recipe.better_featured_image != null) {
            image = recipe.better_featured_image.source_url;
          } else {
            image = CatItemA;
          }
          return (
            <Link href={`/resep/${recipe.slug}`}>
              <Box sx={{ width: '45%', margin: '6px' }}>
                <Cards
                  title={recipe.title.rendered}
                  img={image}
                  time={recipe.acf.time}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
