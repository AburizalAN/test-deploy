import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const ArticleImage = '/assets/img/articleContent.jpg';
// const ArticleImage2 = '/assets/img/articleContent2.jpg';

// const ArticleImages = styled.img`
//   width: 100%;
//   height: 167px;
// `;
const Container = styled.div`
  background-color: 'white';
  position: 'relative';
  /* top: '30px'; */
  z-index: '1';
  padding: '100px 0 0';
  border-radius: '12px 12px 0 0';
`;
const ArticleContent = (props) => {
  let { content = { rendered: 'detail' } } = props;

  if (!props.loading) {
    return (
      <Container id="container-posts">
        <Box
          variant="body1"
          sx={{
            marginTop: '80px',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.1px',
            padding: '12px',
          }}
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        ></Box>
      </Container>
    );
  } else {
    return (
      <Box sx={{ width: '100%', marginTop: '50px', padding: '12px' }}>
        <Skeleton />
        <Skeleton height={'100px'} />
        <Skeleton />
        <Skeleton height={'100px'} />
        <Skeleton />
        <Skeleton height={'100px'} />
      </Box>
    );
  }
};

export default ArticleContent;
