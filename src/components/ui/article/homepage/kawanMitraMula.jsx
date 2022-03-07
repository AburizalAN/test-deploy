// react
import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import styled from 'styled-components';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MitramulaCard = '/assets/img/mitramula1.png';

const StyledParagraph = styled(Typography)`
  &&& {
    font-size: 11px;
  }
`;

const Card = (props) => {
  return (
    <Link href={`/artikel/${props.slug}`}>
      <Box
        sx={{
          minWidth: '350px',
          height: '177px',
          marginRight: '12px',
          marginTop: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 4px 0px #0000001A',
        }}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', padding: '4px 12px' }}
        >
          <Avatar></Avatar>
          <Box sx={{ marginLeft: '12px' }}>
            <Typography sx={{ fontSize: '13px' }}>{props.author}</Typography>
            <Typography sx={{ fontSize: '9px' }}>{props.date}</Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center', padding: '4px 12px' }}
        >
          <img src={props.img} width="141px" height="73px" />
          <Box sx={{ marginLeft: '13px', width: '175px' }}>
            <Typography variant="subtitle2" sx={{ fontSize: '13px' }}>
              {props.title}
            </Typography>
            <Typography
              id="kawan-mula-ellipsis"
              sx={{ fontSize: '9px' }}
              dangerouslySetInnerHTML={{ __html: props.text }}
            ></Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
const KawanMitraMula = () => {
  const postsState = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.posts.getListPostTemanLama());
  }, []);

  const temanLama = postsState.listTemanLama;
  // console.log('ini di kawan mula', temanLama);

  return (
    <Box sx={{ marginBottom: '30px', padding: '20px 0' }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: '700', margin: '0 0 0 12px' }}
      >
        Kawan & Mitra Mula
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflow: 'scroll',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {temanLama.map((item) => {
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

          const d = new Date(item.date);
          let monthName = month[d.getMonth()];
          let year = d.getFullYear();
          let day = d.getDate();
          let newDate = `${day}, ${monthName} ${year}`;
          return (
            <Card
              id={item.id}
              slug={item.slug}
              img={item.better_featured_image.source_url}
              title={item.title.rendered}
              text={item.excerpt.rendered}
              author={item.yoast_head_json.twitter_misc['Written by']}
              date={newDate}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default KawanMitraMula;
