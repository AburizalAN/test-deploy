import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

import { CardLeftImage } from 'components/ui/card';
const ArticleCardImg = '/assets/img/articleCard1.jpg';
const FailedA = '/assets/img/load-failed/failed1.jpg';

let image = '';

const Dots = () => {
  return (
    <Box
      sx={{
        width: '3px',
        height: '3px',
        backgroundColor: 'black',
        borderRadius: '50%',
        margin: '0 10px',
      }}
    ></Box>
  );
};

const Styled = {
  Card: styled.div`
    display: flex;
    margin: 10px 0;
  `,
  CardImage: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  `,

  CardDescription: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 24px;
    padding-top: 8px;
  `,
  CardTitle: styled(Typography)`
    &&& {
      font-weight: bold;
      max-width: 240px;
      line-height: 20px;
      margin-bottom: 7px;
      /* line-height: 1.5; */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  CardDate: styled.div`
    display: flex;
    align-items: center;
  `,
  CardLines: styled.div`
    width: 100%;
    height: 1px;
    background-color: #e9eaea;
    margin: 8px 0 12px;
  `,
};
const ArticleCard = (props) => {
  return (
    <Link href={`/artikel/${props.slug}`}>
      <Styled.Card>
        <Styled.CardImage src={props.src} />
        <Styled.CardDescription>
          <Styled.CardTitle>{props.title}</Styled.CardTitle>
          <Styled.CardDate>
            <Typography variant="caption">{props.date}</Typography>
            <Dots />
            <Typography variant="caption">{props.time}</Typography>
          </Styled.CardDate>
        </Styled.CardDescription>
      </Styled.Card>
      {/* <Styled.CardLines /> */}
    </Link>
  );
};

const Educational = (props) => {
  if (!props.loading) {
    return (
      <Box sx={{ padding: '12px' }}>
        {props.articles.map((article, index) => {
          if (article.better_featured_image != null) {
            image = article.better_featured_image.source_url;
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

          const d = new Date(article.date);
          let monthName = month[d.getMonth()];
          let year = d.getFullYear();
          let day = d.getDate();
          let newDate = `${day}, ${monthName} ${year}`;

          if (index <= 3) {
            return (
              <ArticleCard
                key={index}
                id={article.id}
                slug={article.slug}
                title={article.title.rendered}
                src={image}
                time={article.yoast_head_json.twitter_misc['Est. reading time']}
                date={newDate}
              />
            );
          }
        })}
      </Box>
    );
  } else {
    return (
      <Box sx={{ width: '100%', padding: '12px 12px 32px' }}>
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

export default Educational;
