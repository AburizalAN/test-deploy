import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { debounce } from 'utils/helper';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/registerActions';

import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MUIAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Search as SearchInput } from 'components/style';
import { InputAdornment } from '@mui/material';
import SearchIcon from 'components/icons/search';
import Typography from '@mui/material/Typography';

import NotificationLight from 'components/icons/notification-light';
import FavoriteLightIcon from 'components/icons/favorite-light';
import ExpandLeftLightIcon from 'components/icons/expand_left_light';

function AppBar(props) {
  const {
    backable,
    backUrl,
    noButton,
    buttonComponent,
    title,
    onBackClick,
    subAppBar = null,
  } = props;

  const ThisSearchInput = styled(SearchInput)`
    &&& {
      margin: 0;
      & .MuiInputBase-input {
        font-size: 13px !important;
        line-height: 17.73px !important;
        color: #6f6f6f !important;
        font-weight: 400 !important;
        padding: 8px 12px;
      }
    }
  `;

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router.isReady) return;
    document.getElementById('search-shopping').value = router.query?.s || '';
    dispatch(ACTIONS.search.getListSearch({ search: router.query.s || 'a' }));
  }, [router.isReady]);

  const handleChange = (value) => {
    dispatch(ACTIONS.search.getListSearch({ search: value }));
  };

  const optimizedFn = useCallback(debounce(handleChange, 1000), []);

  return (
    <MUIAppBar
      position="fixed"
      elevation={1}
      sx={{ backgroundColor: 'white', left: 'unset', right: 'unset' }}
    >
      <Container disableGutters maxWidth="sm">
        <Toolbar sx={{ minHeight: '100%', py: '8px' }} variant="dense">
          {backable &&
            (backUrl ? (
              <Link href={backUrl} passHref>
                <IconButton edge="start" sx={{ marginRight: 1 }}>
                  <ExpandLeftLightIcon sx={{ color: 'common.black' }} />
                </IconButton>
              </Link>
            ) : (
              <IconButton
                edge="start"
                sx={{ marginRight: 1 }}
                onClick={onBackClick}
              >
                <ExpandLeftLightIcon sx={{ color: 'common.black' }} />
              </IconButton>
            ))}
          <Box sx={{ flex: 1 }}>
            <ThisSearchInput
              fullWidth
              className="searchInput"
              id="search-shopping"
              variant="outlined"
              placeholder="Search"
              onChange={(e) => optimizedFn(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="iconWrap">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
  backUrl: PropTypes.string,
  backable: PropTypes.bool,
  noButton: PropTypes.bool,
  buttonComponent: PropTypes.node,
  onBackClick: PropTypes.func,
};

AppBar.defaultProps = {
  title: 'Title Here',
  backable: true,
  noButton: false,
  backUrl: '/',
  buttonComponent: null,
  onBackClick: () => {},
};

export default AppBar;
