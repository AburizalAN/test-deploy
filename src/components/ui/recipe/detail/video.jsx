import ReactPlayer from 'react-player';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Video = () => {
  return (
    <Box sx={{ marginTop: '25px' }}>
      <Typography variant="subtitle1" sx={{ fontWeight: '700' }}>
        Video
      </Typography>
      <Box sx={{ marginTop: '12px' }}>
        {/* <img src={VidThumbnail} /> */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=uuXHbaP1X98"
          width="100%"
          height="195px"
        />
      </Box>
    </Box>
  );
};

export default Video;
