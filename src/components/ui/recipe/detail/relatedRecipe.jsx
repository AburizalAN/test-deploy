import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';

import TimerFill from 'components/icons/timer-fill';

import { escapeHtml } from 'utils/helper';

const LogoPng = '/assets/logo_new.png';
const DetailHead = '/assets/img/detailHead.jpg';
const FailedA = '/assets/img/load-failed/failed1.jpg';
let image = '';

const RelatedRecipe = (props) => {
  const router = useRouter();
  const recipeRelatedState = useSelector((state) => state.recipeRelated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.recipeRelated.getListRecipeRelated(props.id));
  }, []);

  const related = recipeRelatedState.listRecipesRelated;
  const relatedLoading = recipeRelatedState.loading;

  const Item = (props) => {
    const CardHeader = () => {
      return (
        <Box
          sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
        >
          <img src={LogoPng} width="20px" and height="20px" />
          <Typography variant="caption" sx={{ marginLeft: '10px' }}>
            AwalMula
          </Typography>
        </Box>
      );
    };

    return (
      <Link href={`/resep/${props.href}`}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: '0',
            borderBottom: '1px solid #C4C4C4',
          }}
        >
          <CardMedia
            component="img"
            src={props.img}
            sx={{ width: '100px', height: '100px', borderRadius: '12px' }}
          />
          <CardContent>
            <CardHeader />
            <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
              {escapeHtml(`${props.title}`)}
            </Typography>
            <Box sx={{ marginTop: '12px' }}>
              <TimerFill />
              <Typography variant="caption">{props.time}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    );
  };

  if (!relatedLoading) {
    return (
      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: '700', margin: '30px 0', textAlign: 'center' }}
        >
          Resep Terkait
        </Typography>
        <Box>
          {related.map((item, index) => {
            if (item.better_featured_image != null) {
              image = item.better_featured_image.source_url;
            } else {
              image = FailedA;
            }

            if (index < 3) {
              return (
                <Item
                  title={item.title.rendered}
                  time={item.acf.time}
                  img={image}
                  href={item.slug}
                />
              );
            }
          })}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ width: '100%' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: '700', margin: '30px 0', textAlign: 'center' }}
        >
          Resep Terkait
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <Box sx={{ width: '30%' }}>
            <Skeleton height={'100px'} />
          </Box>
          <Box sx={{ width: '65%' }}>
            <Skeleton height={'100px'} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <Box sx={{ width: '30%' }}>
            <Skeleton height={'100px'} />
          </Box>
          <Box sx={{ width: '65%' }}>
            <Skeleton height={'100px'} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <Box sx={{ width: '30%' }}>
            <Skeleton height={'100px'} />
          </Box>
          <Box sx={{ width: '65%' }}>
            <Skeleton height={'100px'} />
          </Box>
        </Box>
      </Box>
    );
  }
};

export default RelatedRecipe;
