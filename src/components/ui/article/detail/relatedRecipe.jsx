import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from 'react-loading-skeleton';
import TimerFill from 'components/icons/timer-fill';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { CardLeftImage } from 'components/ui/card';

// image
const FailedA = '/assets/img/load-failed/failed1.jpg';
const Banner = '/assets/img/articleBanner2.jpg';
const LogoPng = '/assets/logo_new.png';
let image = '';

const Item = (props) => {
  const CardHeader = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        {/* <LogoPng/> */}
        <img src={LogoPng} width="20px" and height="20px" />
        <Typography variant="caption" sx={{ marginLeft: '10px' }}>
          AwalMula
        </Typography>
      </Box>
    );
  };
  return (
    <Link href={`/artikel/${props.slug}`}>
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
          src={props.src}
          sx={{ width: '100px', height: '100px', borderRadius: '12px' }}
        />
        <CardContent>
          <CardHeader />
          <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
            {props.title}
          </Typography>
          <Box sx={{ marginTop: '12px' }}>
            <Typography variant="caption">{props.date}</Typography>
            <TimerFill />
            <Typography variant="caption">{props.time}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
const RelatedRecipe = (props) => {
  const postRelatedState = useSelector((state) => state.postsRelated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.postRelated.getListPostRelated(props.id));
  }, []);

  const related = postRelatedState.listPostRelated;
  const loading = postRelatedState.loading;

  if (!loading) {
    return (
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: '700', margin: '20px 0' }}>
          Artikel Terkait
        </Typography>
        <Box>
          {related.map((recipe, index) => {
            if (index <= 3) {
              if (recipe.better_featured_image != null) {
                image = recipe.better_featured_image.source_url;
              } else {
                image = FailedA;
              }
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

              const d = new Date(recipe.date);
              let monthName = month[d.getMonth()];
              let year = d.getFullYear();
              let day = d.getDate();
              let newDate = `${day}, ${monthName} ${year}`;
              return (
                <Item
                  key={index}
                  title={recipe.title.rendered}
                  src={image}
                  time={
                    recipe.yoast_head_json.twitter_misc['Est. reading time']
                  }
                  slug={recipe.slug}
                  date={newDate}
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
        <Typography variant="h6" sx={{ fontWeight: '700', margin: '20px 0' }}>
          Artikel Terkait
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
