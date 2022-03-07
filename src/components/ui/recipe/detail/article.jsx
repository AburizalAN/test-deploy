import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { escapeHtml } from 'utils/helper';

const Article = (props) => {
  let { title = 'title', content = { rendered: 'detail' } } = props;
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: 'center', fontWeight: '700' }}
      >
        {escapeHtml(title)}
      </Typography>
      <Box id="container-posts">
        <Box dangerouslySetInnerHTML={{ __html: content.rendered }}></Box>
      </Box>
    </Box>
  );
};

export default Article;
