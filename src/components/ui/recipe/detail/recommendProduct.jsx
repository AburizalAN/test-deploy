import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const DetailHead = '/assets/img/detailHead.jpg';

const Item = () => {
  return (
    <Box sx={{ margin: '4px' }}>
      <Card
        sx={{
          width: '135px',
          margin: '4px',
          flex: 'none',
          borderRadius: '10px',
        }}
      >
        <Box sx={{ position: 'relative', height: '132px' }}>
          <Box
            sx={{
              position: 'absolute',
              zIndex: '1',
              backgroundColor: '#A0C16B',
              borderRadius: '0 0 15px 0',
              padding: '0 12px',
            }}
          >
            <Typography
              variant="button"
              sx={{ color: 'white', fontWeight: '700' }}
            >
              Promo
            </Typography>
          </Box>
          <CardMedia
            component="img"
            src={DetailHead}
            sx={{ width: '100%', height: '132px', position: 'absolute' }}
          />
        </Box>
        <CardContent>
          <Typography
            sx={{ color: '#ED8734', fontWeight: '700', marginBottom: '12px' }}
          >
            Singabera
          </Typography>
          <Typography
            sx={{ height: '30px', marginBottom: '10px', fontWeight: '700' }}
          >
            Java Breakfast
          </Typography>
          <Typography variant="caption" sx={{ color: '#6F6F6F' }}>
            100gr
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: '700' }}>
            Rp 57.600
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const RecommendProduct = (props) => {
  return (
    <Box sx={{ margin: '24px 0' }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: '700', marginBottom: '12px' }}
      >
        Belanja Produk Ini Sekarang
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%',
          overflow: 'scroll',
        }}
      >
        {props.recipes.map((item) => {
          return <Item />;
        })}
      </Box>
    </Box>
  );
};

export default RecommendProduct;
