import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Dot = styled(Box)`
  width: 3.33px;
  height: 3.33px;
  border-radius: 50%;
  margin: 8.33px;
  background-color: #6f6f6f;
`;

const CardNotification = (props) => {
  let { unread, imageUrl, title, desc, date, time, ...restProps } = props;

  title = title ? title : '-';
  desc = desc ? desc : '-';
  date = date ? date : '-';
  time = time ? time : '-';

  return (
    <ButtonBase
      sx={{
        display: 'block',
        textAlign: 'left',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: unread ? '#D2DAC3' : 'initial',
      }}
      {...restProps}
    >
      <Container disableGutters maxWidth="sm">
        <Stack direction="row" gap="20px" p="10px" sx={{ width: '100%' }}>
          <Box
            width={80}
            height={80}
            sx={{
              overflow: 'hidden',
              borderRadius: 1,
              backgroundColor: '#eee',
              flexShrink: 0,
            }}
          ></Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              lineHeight="20.46px"
              sx={{
                display: 'block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle3"
              sx={() => {
                const lineClamp = 2;

                return {
                  display: '-webkit-box',
                  '-webkit-line-clamp': `${lineClamp}`,
                  '-webkit-box-orient': 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  height: `${lineClamp * 18}px`,
                };
              }}
              mb="6px"
            >
              {desc}
            </Typography>
            <Stack direction="row" gap="5px">
              <Typography variant="subtitle3" sx={{ color: '#6f6f6f' }}>
                {date}
              </Typography>
              <Dot />
              <Typography variant="subtitle3" sx={{ color: '#6f6f6f' }}>
                {time}
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Box
          borderBottom={1}
          borderColor={unread ? 'white' : '#d8d8d8'}
          mx="10px"
        />
      </Container>
    </ButtonBase>
  );
};

CardNotification.propTypes = {
  unread: PropTypes.bool,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
};

CardNotification.defaultProps = {
  unread: false,
  imageUrl: '',
  title: '',
  desc: '',
  date: '',
  time: '',
};

export default CardNotification;
