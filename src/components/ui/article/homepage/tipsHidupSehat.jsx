import Link from 'next/link';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Skeleton from 'react-loading-skeleton';

import { escapeHtml } from 'utils/helper';
import RecipeHeaderSection from 'components/ui/recipe/homepage/recipe-header-section';

const BannerImage = styled.img`
  width: 100%;
`;
const Text = styled(Box)`
  &&& {
    font-size: 12px;
    /* max-width: 240px; */
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

const Article1 = '/assets/img/articleRecomen.jpg';
const TipsHidupSehat = (props) => {
  console.log(props);
  return (
    <Box>
      <RecipeHeaderSection title="Lifestyle" href="/artikel/lifestyle" />
      {props.loading ? (
        <Box sx={{ padding: '0 12px' }}>
          <Box>
            <Skeleton height={'150px'} />
          </Box>
          <Box sx={{ marginTop: '8px' }}>
            <Skeleton height={'30px'} />
          </Box>
        </Box>
      ) : (
        <Box>
          {props.items.map((item, index) => {
            if (index == 0) {
              return (
                <Link href={`/artikel/${item.slug}`}>
                  <Box sx={{ padding: '0 12px', borderRadius: '12px' }}>
                    <BannerImage src={item.better_featured_image.source_url} />
                    <Typography variant="subtitle1" sx={{ fontWeight: '700' }}>
                      {item.title.rendered}
                    </Typography>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: item.excerpt.rendered,
                      }}
                    ></Text>
                  </Box>
                </Link>
              );
            }
          })}
        </Box>
      )}
    </Box>
  );
};
// const TipsHidupSehat = (props) => {
//   return (
//     <Box>
//       <RecipeHeaderSection title="Lifestyle" href="/article/lifestyle" />
// <Link href={`/article/detail/${props.item.slug}`}>
//   <Box sx={{ padding: '0 12px', borderRadius: '12px' }}>
//     <BannerImage src={props.item.better_featured_image.source_url} />
//     <Typography variant="subtitle1" sx={{ fontWeight: '700' }}>
//       {props.item.title.rendered}
//     </Typography>
//     <Text
//       dangerouslySetInnerHTML={{ __html: props.item.excerpt.rendered }}
//     ></Text>
//   </Box>
// </Link>
//     </Box>
//   );
// };

export default TipsHidupSehat;
