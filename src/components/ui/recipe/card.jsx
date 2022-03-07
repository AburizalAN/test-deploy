import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark, BookmarkLight } from 'components/icons/bookmark-light';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CatItemA = '/assets/img/CatItem-1.jpg';
// const Article = "/assets/img/article.png";
// const Article2 = "/assets/img/article2.png";
// const Logo = "/assets/logo/logo.png"
import TimerFill from '../../icons/timer-fill';
// import { useSetState, useToggle } from 'react-use';

import { escapeHtml } from 'utils/helper';

const TitleWrapper = styled.div`
  /* display: flex;
  justify-content: flex-start; */
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
  margin: 0;
  padding: 0;
`;
const IconButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
`;

const TitleText = styled(Typography)`
  &&& {
    display: block;
    display: -webkit-box;
    /* max-width: 75%; */
    height: 100%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.5;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
  }
`;

const Ribbon = ({ text }) => {
  return (
    <BoxCustomRadius sx={{ position: 'absolute', backgroundColor: '#265329' }}>
      <RibbonText>{text}</RibbonText>
    </BoxCustomRadius>
  );
};
export default function Cards(props) {
  const [toggle, setToggle] = useState(false);
  const active = toggle ? 'black' : 'none';

  // console.log(props.param)

  return (
    <Card
      sx={{
        borderRadius: '12px',
        position: 'relative',
        minHeight: '245px',
        padding: '0',
      }}
    >
      <Ribbon text={props.ribbon} />
      <CardMedia component="img" height="152" image={props.img} alt="test" />
      <CardContent
        sx={{
          padding: '12px 12px 0',
          margin: '0',
          position: 'relative',
          height: '100%',
        }}
      >
        <TitleWrapper>
          <TitleText>{escapeHtml(`${props.title}`)}</TitleText>
          {/* <IconButton
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <Bookmark fill={active} />
          </IconButton> */}
        </TitleWrapper>
      </CardContent>
      <Box
        sx={{
          position: 'absolute',
          bottom: '5px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TimerFill />
        <Typography
          variant="overline"
          sx={{ marginLeft: '5px', padding: '0px', fontSize: '9px' }}
        >
          {props.time}
        </Typography>
      </Box>
    </Card>
  );
}
