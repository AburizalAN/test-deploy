import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Banner = '/assets/img/articleBanner2.jpg';

const BannerImage = styled.img`
  position: 'absolute';
  width: 100%;
  /* height: 280px; */
  z-index: 0;
  object-fit: cover;
`;

const BannerSection = (props) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date(props.date);
  let monthName = month[d.getMonth()];
  let year = d.getFullYear();
  let day = d.getDate();
  let newDate = `${day} ${monthName} ${year}`;

  return (
    <Box sx={{ position: 'relative' }}>
      <BannerImage src={props.img} />
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '16px 24px',
          width: '310px',
          borderRadius: '12px',
          position: 'absolute',
          bottom: '-90px',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%)',
          zIndex: '1',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Typography variant="subtitle2" sx={{ marginBottom: '8px' }}>
          {newDate}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            fontSize: '15px',
            marginBottom: '8px',
            lineHeight: '20px',
          }}
        >
          {props.title}
        </Typography>
        <Typography variant="overline">BY Awal Mula</Typography>
      </Box>
    </Box>
  );
};

export default BannerSection;
