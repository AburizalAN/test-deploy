// react
import { useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
// import { Typography } from '@mui/material';

import { TopNav } from 'components/ui/top-nav';
import PostLayout from 'components/ui/article/layout';
import Item from 'components/ui/article/list/item';

const FailedA = '/assets/img/load-failed/failed1.jpg';

const ListItem = (props) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
      {props.list.map((post) => {
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
};

const SearchResult = () => {
  const recipeSearchedState = useSelector((state) => state.recipeSearch);
  const dispatch = useDispatch();
  const router = useRouter();
  const { keyword } = router.query;

  useEffect(() => {
    dispatch(ACTIONS.recipeSearch.getRecipeSearched(keyword));
  }, []);
  const result = recipeSearchedState.recipeSearched;
  const Loading = recipeSearchedState.loading;

  return (
    <PostLayout back={true}>
      {Loading != true ? (
        <ListItem list={result} />
      ) : (
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
      )}
    </PostLayout>
  );
};

export default SearchResult;
