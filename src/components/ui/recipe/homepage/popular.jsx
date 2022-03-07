import dynamic from 'next/dynamic';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Skeleton from 'react-loading-skeleton';
import RecipeHeaderSection from 'components/ui/recipe/homepage/recipe-header-section';
// styled component
import styled from 'styled-components';

const Cards = dynamic(() => import('components/ui/recipe/card'));
const FailedA = '/assets/img/load-failed/failed1.jpg';
let img = '';

const Styled = {
  Container: styled(Box)`
    &&& {
      padding: 12px;
      display: flex;
      flex-wrap: nowrap;
      overflow: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
const Popular = (props) => {
  return (
    <>
      <RecipeHeaderSection
        title="Resep Terpopuler"
        href="/resep/resep-terpopuler"
      />
      {props.items.length != 0 ? (
        <Styled.Container>
          {props.items.map((item, index) => {
            if (item.better_featured_image != null) {
              img = item.better_featured_image.source_url;
            } else {
              img = FailedA;
            }
            if (index < 4) {
              return (
                <Link href={`/resep/${item.slug}`} key={item.id} passHref>
                  <Box
                    sx={{ maxWidth: '48%', flex: 'none', marginRight: '12px' }}
                  >
                    <Cards
                      fill
                      title={item.title.rendered}
                      img={img}
                      time={item.acf.time}
                      ribbon={item.label_recipe_name}
                    />
                  </Box>
                </Link>
              );
            }
          })}
        </Styled.Container>
      ) : (
        <Box sx={{ display: 'flex', padding: '12px' }}>
          <Box
            sx={{
              position: 'relative',
              fontSize: '4px',
              width: '180px',
              margin: '4px',
            }}
          >
            <Skeleton height={'200px'} />
          </Box>
          <Box
            sx={{
              position: 'relative',
              fontSize: '4px',
              width: '180px',
              margin: '4px',
            }}
          >
            <Skeleton height={'200px'} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Popular;
