// next
import Link from 'next/link';
// mui
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { SimpleSlider } from 'components/ui/slider';

import Skeleton from 'react-loading-skeleton';

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FailedC = '/assets/img/load-failed/failed3.jpg';
let images = ' ';
const BannerSlider = (props) => {
  if (!props.loading) {
    return (
      <SimpleSlider>
        {props.articles.map((article, index) => {
          if (article.better_featured_image != null) {
            images = article.better_featured_image.source_url;
          } else {
            images = FailedC;
          }
          if (index <= 3) {
            return (
              <Link href={`/artikel/${article.slug}`} key={index}>
                <BannerImage src={images} alt="banner" />
              </Link>
            );
          }
        })}
      </SimpleSlider>
    );
  } else {
    return (
      <Box sx={{ width: '100%', height: '200px' }}>
        <Skeleton height={'100%'} />
      </Box>
    );
  }
};

export default BannerSlider;
