import styled from 'styled-components';
import Link from 'next/link';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// icons
import { BookmarkLight } from 'components/icons/bookmark-light';

// image

const StyledBookmark = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(37, 40, 43, 0.5);
  border: none;
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookmarkButton = () => {
  return (
    <StyledBookmark>
      <BookmarkLight />
    </StyledBookmark>
  );
};
const Dots = () => {
  return (
    <Box
      sx={{
        width: '3px',
        height: '3px',
        backgroundColor: 'black',
        borderRadius: '50%',
        margin: '0 8px',
      }}
    ></Box>
  );
};
const Titles = styled(Typography)`
  &&& {
    font-weight: bold;
    max-width: 240px;
    line-height: 20px;
    margin: 8px 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Item = (props) => {
  return (
    <Link href={`/artikel/${props.slug}`}>
      <Card sx={{ boxShadow: 'none', position: 'relative' }}>
        <CardMedia
          component="img"
          src={props.src}
          sx={{ height: '150px', borderRadius: '12px' }}
        />
        {/* <BookmarkButton /> */}
        <CardContent sx={{ padding: '0' }}>
          <Titles>{props.title}</Titles>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" sx={{ fontSize: '11px' }}>
              {props.date}
            </Typography>
            <Dots />
            <Typography variant="caption" sx={{ fontSize: '11px' }}>
              {props.time}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Item;
