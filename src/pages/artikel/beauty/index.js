// react
import { useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

// mui
import Box from '@mui/material/Box';
// custom
import { TopNavDetail } from 'components/ui/top-nav';
import Item from 'components/ui/article/list/item';
const FailedA = '/assets/img/load-failed/failed1.jpg';

const CardList = () => {
  const postCategoryState = useSelector((state) => state.postsCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.postCategory.getCategoryPost('beauty'));
  }, []);
  const posts = postCategoryState.listCategoryPost;
  const postsLoading = postCategoryState.loading;

  if (!postsLoading) {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {posts.map((post) => {
          let img = '';
          if (post.better_featured_image != null) {
            img = post.better_featured_image.source_url;
          } else {
            img = FailedA;
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

          const d = new Date(post.date);
          let monthName = month[d.getMonth()];
          let year = d.getFullYear();
          let day = d.getDate();
          let newDate = `${day}, ${monthName} ${year}`;

          return (
            <Box sx={{ width: '50%', padding: '6px' }} key={post.id}>
              <Item
                title={post.title.rendered}
                slug={post.slug}
                src={img}
                date={newDate}
                time={post.yoast_head_json.twitter_misc['Est. reading time']}
              />
            </Box>
          );
        })}
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '12px' }}>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
        <Box sx={{ width: '50%', padding: '6px' }}>
          <Skeleton height={'200px'} />
        </Box>
      </Box>
    );
  }
};

function ArticleList() {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <TopNavDetail title={'Beauty'} disableSearch />
      <CardList />
    </Box>
  );
}

export default ArticleList;
