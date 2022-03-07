import styled from 'styled-components';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

import ArrowRight2 from 'components/icons/arrow-right2';
const Banner = '/assets/img/articleBanner.jpg';

const CustomBox = styled.div`
  background: linear-gradient(90deg, #b6cfb1 -17.2%, #89ae83 111.6%);
  width: 100%;
  min-height: 100px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Images = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 12px;
`;

const Text = styled.div`
  line-height: 20px;
  margin-bottom: 7px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Title = styled(Typography)`
  &&& {
    line-height: 20px;
    margin-bottom: 7px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ColoredSection = (props) => {
  return (
    <CustomBox>
      <Box sx={{ color: 'white', width: '50%' }}>
        <Title variant="subtitle1" sx={{ fontWeight: '700', color: 'white' }}>
          {props.article.title.rendered}
        </Title>
        <Text
          sx={{ color: 'white' }}
          dangerouslySetInnerHTML={{ __html: props.article.excerpt.rendered }}
        ></Text>
        {/* <Typography variant="body2">
        </Typography> */}
        <Box
          sx={{
            marginTop: '8px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href={`/artikel/${props.article.slug}`}>
            <Typography sx={{ color: 'white' }}>Lihat Selengkapnya</Typography>
          </Link>
          <ArrowRight2 />
        </Box>
      </Box>
      <Box sx={{ width: '45%' }}>
        <Images src={props.article.better_featured_image.source_url} />
      </Box>
    </CustomBox>
  );
};

export default ColoredSection;
