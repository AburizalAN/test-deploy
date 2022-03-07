import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Facebook from 'components/icons/facebook';
import Twitter from 'components/icons/twitter';
import Whatsapp from 'components/icons/whatsapp';
import ShareAlt from 'components/icons/share-alt';

const Share = () => {
  return (
    <Box sx={{ marginTop: '12px' }}>
      <Typography variant="subtitle1">Share</Typography>
      <Box
        sx={{
          borderRadius: '12px',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)',
          marginTop: '16px',
        }}
      >
        <Link href="https://www.facebook.com/">
          <Box
            sx={{
              borderRight: 1,
              color: '#D8D8D8',
              padding: '5px 25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Facebook />
          </Box>
        </Link>
        <Link href="https://www.twitter.com/">
          <Box
            sx={{
              borderRight: 1,
              color: '#D8D8D8',
              padding: '5px 25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Twitter />
          </Box>
        </Link>
        <Link href="https://www.whatsapp.com/">
          <Box
            sx={{
              borderRight: 1,
              color: '#D8D8D8',
              padding: '5px 25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Whatsapp />
          </Box>
        </Link>
        <Link href="https://www.awalmula.co.id/">
          <Box
            sx={{
              padding: '5px 25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShareAlt />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Share;
