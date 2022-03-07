import PropTypes from 'prop-types';
import { InputAdornment } from '@mui/material';
import React, { useEffect } from 'react';
import {
  Container,
  SearchContainer,
  Search as SearchInput,
  SectionBorder,
} from './style';
import BottomNav from 'components/ui/BottomNav';
import Wishlist from './icons/wishlist';
import BellIcon from './icons/bell';
import Cart from './icons/cart';
import Search from './icons/search';
import { BookmarkLight } from './icons/bookmark-light';
import { useRouter } from 'next/router';
import Badge from '@mui/material/Badge';
import Cookie from 'js-cookie';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';

// const Logo = "/assets/logo_main.png";

const BadgeCart = () => {
  const infoState = useSelector((state) => state.info);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookie.get('AMToken')) {
      console.log('otken');
      dispatch(ACTIONS.info.infoDetail());
    }
  }, []);

  return (
    <Badge badgeContent={infoState.info.items_qty} color="primary">
      <Cart />
    </Badge>
  );
};

export const ShoppingLayout = ({
  placeholder = '',
  type = 'shopping',
  children,
}) => {
  const router = useRouter();
  const [inputTypeState, setInputType] = React.useState('');
  return (
    <Container>
      <SearchContainer>
        <SearchInput
          className="searchInput"
          variant="outlined"
          placeholder={placeholder}
          onChange={(e) => setInputType(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              return router.push(`/search?s=${e.target.value}`);
            }
          }}
          InputProps={{
            endAdornment: (
              <div
                onClick={() => {
                  router.push(`/search?s=${inputTypeState}`);
                }}
              >
                <InputAdornment position="end" className="iconWrap">
                  <Search />
                </InputAdornment>
              </div>
            ),
          }}
        />
        <div className="icons">
          {type === 'recipe' ? <BookmarkLight /> : ''}
          {/* <BellIcon /> */}
          {type === 'shopping' ? (
            <dix
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <div onClick={() => router.push('/shopping/wishlist')}>
                <Wishlist />
              </div>
              <div onClick={() => router.push('/shopping/checkout')}>
                <BadgeCart />
              </div>
            </dix>
          ) : null}
        </div>
      </SearchContainer>
      <div>
        {children}
        <SectionBorder />
      </div>
      <BottomNav />
    </Container>
  );
};

ShoppingLayout.propTypes = {
  // children: PropTypes.oneOf([
  //   PropTypes.node,
  //   PropTypes.string,
  //   PropTypes.element
  // ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default ShoppingLayout;
