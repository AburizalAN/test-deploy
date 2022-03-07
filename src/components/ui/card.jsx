import React from 'react';
import styled from 'styled-components';
import CatItemA from '../../assets/img/cat-item1.png';
// import {Bookmark} from '../icons/bookmark-light';
import TimerFill from '../icons/timer-fill';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Bookmark } from 'components/icons/bookmark-light';
import { BookmarkLight } from 'components/icons/bookmark-light';
import Link from 'next/link';

// const Article = "/assets/img/article.png";
const Article2 = '/assets/img/article2.png';
const Logo = '/assets/img/logo.png';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BoxCustomRadius = styled(Box)`
  &&& {
    border-radius: 12px 0;
    padding: 4px 8px;
  }
`;

const RibbonText = styled.p`
  font-size: 11px;
  color: white;
`;

const Titles = styled(Typography)`
  &&& {
    font-weight: bold;
    max-width: 240px;
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

const BadgeStyle = {
  Wrapper: styled.div`
    padding: 4px 8px;
    background-color: #749d6e;
    display: flex;
    align-items: center;
    border-radius: 10px;
  `,
  Text: styled.span`
    font-size: 9px;
    color: white;
  `,
};

const Ribbon = () => {
  return (
    <BoxCustomRadius
      sx={{ position: 'absolute', backgroundColor: '#486140', borderRadius: 4 }}
    >
      <RibbonText variant="overline" sx={{ color: 'white' }}>
        Main Course
      </RibbonText>
    </BoxCustomRadius>
  );
};
const Badge = () => {
  return (
    <BadgeStyle.Wrapper>
      <BadgeStyle.Text>Main Course</BadgeStyle.Text>
    </BadgeStyle.Wrapper>
  );
};

const CardHeader = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Typography variant="caption" sx={{ marginLeft: '8px' }}>
        Awalmula
      </Typography>
      {/* <BookmarkLight /> */}
    </Container>
  );
};

const CardDefault = (children) => {
  return (
    <Card sx={{ mb: 2, borderRadius: 4, position: 'relative' }}>
      <Ribbon />
      <CardMedia component="img" height="140" image={CatItemA} alt="test" />
      <CardContent>
        <TitleWrapper>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            Omelete Sayur Nan Sehat
          </Typography>
          <Bookmark />
        </TitleWrapper>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <TimerFill />
          <Typography variant="overline" sx={{ ml: 1 }}>
            {' '}
            45 Mins
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const CardLeftImage = (props) => {
  // console.log(date)
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
  return (
    <Link href={`/artikel/${props.slug}`}>
      <Box sx={{ width: '100%', margin: '0' }}>
        <Card
          sx={{
            display: 'flex',
            // justifyContent: 'space-between',
            // backgroundColor: 'pink',
            boxShadow: 'none',
            position: 'relative',
            // borderBottom: 1,
            color: '#C4C4C4',
            borderRadius: '0',
            padding: '12px 0',
          }}
        >
          {/* <CardMedia
            component="img"
            height="140"
            image={props.src}
            alt="test"
            sx={{ width: '110px', height: '100px', borderRadius: '8px' }}
          /> */}
          <CardContent
            sx={{
              padding: '0',
              backgroundColor: 'pink',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: '12px',
            }}
          >
            {/* <CardHeader /> */}
            <Titles>{props.title}</Titles>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0',
              }}
            >
              <Typography variant="caption">{props.date}</Typography>
              <Dots />
              <Typography variant="caption">{props.time}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
};

const CardRightImage = (children) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 1,
        borderRadius: '0',
        color: '#C4C4C4',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'black' }}>
            Rendang Sehat Tanpa Santan Yang Mudah dimasak
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <TimerFill />
            <Typography variant="overline" sx={{ ml: '4px', mr: '18px' }}>
              {' '}
              45 Mins
            </Typography>
            <Badge />
          </Box>
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        image={Article2}
        alt="ini tes dude"
        sx={{ width: '80px', height: '80px', borderRadius: '12px' }}
      />
    </Card>
  );
};

export { CardDefault, CardLeftImage, CardRightImage };
