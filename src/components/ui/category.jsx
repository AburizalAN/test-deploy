import { React, useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';

import { Links } from '../ui/button';
import Box from '@mui/material/Box';

let clicked = '';
const getActiveTag = (id) => {
  clicked = id;
};

const CategoryLink = (props) => {
  const recipeCatalogState = useSelector((state) => state.recipeCatalog);
  const dispatch = useDispatch();
  const recipeList = recipeCatalogState.listRecipes;

  return (
    <Box
      sx={{
        padding: '12px',
        backgroundColor: 'white',
        display: 'flex',
        overflow: 'auto',
      }}
    >
      {props.categories.map((category, index) => {
        let active = '';
        if (clicked != '') {
          if (category.id == clicked) {
            active = 'active';
          } else {
            active = '';
          }
        } else {
          if (index == 0) {
            active = 'active';
          } else {
            active = '';
          }
        }
        console.log(index, active, clicked);
        return (
          <Box
            key={category.id}
            sx={{ flex: 'none', margin: '0 4px' }}
            onClick={function () {
              getActiveTag(category.id);
              dispatch(
                ACTIONS.recipeCatalog.getListRecipeCatalog(
                  props.headCategory,
                  category.id
                )
              );
            }}
          >
            <Links status={active}>{category.name}</Links>
          </Box>
        );
      })}
    </Box>
  );
};
export {
  // Category,
  CategoryLink,
};

// const CatImgA = '/assets/img/catImg-1.png';
// const CatImgB = '/assets/img/catImg-2.png';
// const CatImgC = '/assets/img/catImg-3.png';
// const CatImgD = '/assets/img/catImg-4.png';

// const Styled = {
//   CategoryWrapper: styled.div`
//     display: flex;
//     align-items: center;
//     width: 100%;
//     overflow: scroll;
//     margin: 10px;
//   `,
//   CategoryItemWithImage: styled.div`
//     flex: none;
//     width: 80px;
//     height: 80px;
//     background-color: #f7f7f7;
//     margin-right: 10px;
//     border-radius: 8px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   `,
//   CatImg: styled.img`
//     max-width: 35px;
//     max-height: 35px;
//   `,
//   CatTitle: styled.span`
//     font-size: 9px;
//     font-weight: 400;
//     margin-top: 8px;
//   `,
// };

// const Category = (props) => {
//   return (
//     <Styled.CategoryWrapper>
//       <Styled.CategoryItemWithImage>
//         <Styled.CatImg src={CatImgA} />
//         <Styled.CatTitle>Sayuran</Styled.CatTitle>
//       </Styled.CategoryItemWithImage>
//       <Styled.CategoryItemWithImage>
//         <Styled.CatImg src={CatImgB} />
//         <Styled.CatTitle>Buah-buahan</Styled.CatTitle>
//       </Styled.CategoryItemWithImage>
//       <Styled.CategoryItemWithImage>
//         <Styled.CatImg src={CatImgC} />
//         <Styled.CatTitle>Biji & kacangan</Styled.CatTitle>
//       </Styled.CategoryItemWithImage>
//       <Styled.CategoryItemWithImage>
//         <Styled.CatImg src={CatImgD} />
//         <Styled.CatTitle>Minuman</Styled.CatTitle>
//       </Styled.CategoryItemWithImage>
//       <Styled.CategoryItemWithImage>
//         <Styled.CatImg src={CatImgD} />
//         <Styled.CatTitle>Minuman</Styled.CatTitle>
//       </Styled.CategoryItemWithImage>
//     </Styled.CategoryWrapper>
//   );
// };
