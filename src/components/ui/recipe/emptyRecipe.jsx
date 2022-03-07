import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const EmptyRecipe = '/assets/img/empty1.png';
const EmptyArticle = '/assets/img/empty2.png';

const Image = styled.img`
  max-width: 250px;
  margin-bottom: 22px;
`;

const Empty = ({ page }) => {
  const image = page == 'recipe' ? EmptyRecipe : EmptyArticle;
  return (
    <Box
      sx={{
        width: '100%',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
      }}
    >
      <Image src={image} />
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        Segera Hadir
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: '300px', textAlign: 'center', marginTop: '8px' }}
      >
        Resep yang Kamu cari belum tersedia. Nantinya bakal muncul disini.
      </Typography>
    </Box>
  );
};

export default Empty;
