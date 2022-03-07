// react
import { useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TopNavDetail } from 'components/ui/top-nav';
import Empty from '../../../components/ui/recipe/emptyRecipe';

// import { Bookmark } from 'components/icons/bookmark-light';

const ImageTips = '/assets/img/recipeTips.jpg';

const Image = styled.img`
  width: 100%;
  height: 200px;
`;
const Item = () => {
  return (
    <Box>
      <Image src={ImageTips} />
      <Box
        sx={{
          padding: '12px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ fontWeight: '700' }}>
            TIPS & TRIK
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: '700', lineHeight: '20.46px' }}
          >
            Cara Memotong Buah Dengan Baik
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const TipsList = () => {
  return (
    <Box>
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
};

export default function index() {
  const recipeTipsAndTrickState = useSelector(
    (state) => state.recipeTipsAndTrick
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.recipeTipsAndTrick.getTipsAndTrick());
  }, []);
  const tipsAndTrick = recipeTipsAndTrickState.listRecipesTrickAndTrick;
  console.log(tipsAndTrick);
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <TopNavDetail title="tips and trick" />
      {tipsAndTrick.length != 0 ? <TipsList /> : <Empty page="recipe" />}
    </Box>
  );
}
