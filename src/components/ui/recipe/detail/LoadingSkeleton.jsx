import React from 'react';
import Box from '@mui/material/Box';

import Skeleton from '@mui/material/Skeleton';

const LoadingSkeleton = () => {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Box sx={{ padding: '12px', marginTop: '24px' }}>
        <Box
          sx={{
            margin: '15px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Skeleton variant="circular" width={30} height={30} />
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: '12px' }}>
            <Skeleton variant="text" width={50} height={16} />
            <Skeleton variant="text" width={100} height={16} />
          </Box>
        </Box>
        <Box>
          <Skeleton variant="rectangular" width={424} height={300} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Skeleton variant="text" height={24} width={300} />
      </Box>
      <Box sx={{ my: '14px' }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={300} />
      </Box>
      <Box sx={{ my: '14px' }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={100} />
      </Box>
      {/* <CaraMembuat /> */}
      <Box sx={{ padding: '12px' }}>
        {/* <Share /> */}
        {/* <RecommendProduct recipes={recipeList} /> */}
        {/*<RelatedRecipe id={content.id} />*/}
      </Box>
    </Box>
  );
};

export default LoadingSkeleton;
