import React from 'react';
import Box from '@mui/material/Box';

import Skeleton from '@mui/material/Skeleton';

const LoadingSkeleton = () => {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Box>
        <Skeleton variant="rectangular" width={448} height={280} />
      </Box>

      <Box sx={{ py: '14px', mt: '47px' }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={300} />
      </Box>
      <Box sx={{ py: '14px' }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={100} />
      </Box>
      <Box sx={{ padding: '12px' }}></Box>
    </Box>
  );
};

export default LoadingSkeleton;
