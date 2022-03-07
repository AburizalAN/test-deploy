// react / next
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useState } from 'react';
// styled component
import Styled from './styled';

// mui
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
// custom
import BottomNav from '../../BottomNav';
// icon
import SearchLight from 'components/icons/search-light';
import { BookmarkLight } from 'components/icons/bookmark-light';
import BellLight from 'components/icons/bell-light';
import Cookie from 'js-cookie';

const TopNav = ({
  placeholder,
  isSearch,
  isNotification,
  isBookmark,
  isBack,
  modules,
}) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleRedirectBack = async () => {
    await router.back();
  };

  const handleRedirectBookmark = async () => {
    if (Cookie.get('AMToken') === undefined) {
      await router.push('/login');
      return;
    }

    await router.push('/bookmarks');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/${modules}/search/${search}`);
  };
  return (
    <Styled.Container>
      {isBack ? (
        <IconButton size="small" onClick={handleRedirectBack}>
          <img src="/assets/icons/arrow_left.svg" alt="" />
        </IconButton>
      ) : (
        ''
      )}
      {isSearch ? (
        <Styled.Searchbox>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/${modules}/search/${search}`);
            }}
          >
            <Styled.Searchbar
              placeholder={placeholder}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
          <Box
            sx={{ marginTop: 1 }}
            onClick={() => {
              // alert(search);
              router.push(`/${modules}/search/${search}`);
            }}
          >
            <SearchLight />
          </Box>
        </Styled.Searchbox>
      ) : (
        ''
      )}
      <Styled.Menubox>
        {/* hiddenProd */}
        {/* {isBookmark ? (
          <IconButton size="small" onClick={handleRedirectBookmark}>
            <BookmarkLight />
          </IconButton>
        ) : (
          ''
        )} */}
        {isNotification ? <BellLight /> : ''}
      </Styled.Menubox>
    </Styled.Container>
  );
};

const PostLayout = (props) => {
  const { children } = props;
  return (
    <Box sx={{ width: '100%' }}>
      <TopNav
        placeholder={props.placeholder}
        modules={props.modules}
        isSearch={props.search}
        isBookmark={props.bookmark}
        isNotification={false}
        isBack={props.back}
      />
      {children}
      <BottomNav />
    </Box>
  );
};

TopNav.propTypes = {
  placeholder: PropTypes.string,
  isSearch: PropTypes.bool,
  isNotification: PropTypes.bool,
  isBookmark: PropTypes.bool,
  modules: PropTypes.string,
};

PostLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default PostLayout;
