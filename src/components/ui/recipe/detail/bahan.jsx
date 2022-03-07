import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Bahan = () => {
  return (
    <Box sx={{ marginTop: '20px' }} id="videoResep">
      <Typography variant="subtitle1" sx={{ fontWeight: '700' }}>
        Bahan
      </Typography>
      <Box sx={{ marginTop: '15px' }}>
        <Typography>
          4 scoops Vanilla or chocolate ice cream (about 2 cups)
        </Typography>
        <Typography>1/2 cup milk (cold)</Typography>
        <Typography>1 Teh Singabera Jasmine</Typography>
        <Typography>1 Teh Singabera Java Breakfast</Typography>
      </Box>
    </Box>
  );
};

export default Bahan;
