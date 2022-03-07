import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import {
  Search as SearchInput,
  MainContainer,
  SectionBorder,
  ToolbarContainer,
} from './style';
import BottomNav from 'components/ui/BottomNav';
import Search from './icons/search';
import BellIcon from './icons/bell';
import Logo from 'assets/img/logo-main.png';
import { useRouter } from 'next/router';
import Notification from './firebase-notif';

export const MainLayout = ({
  placeholder = 'Search something...',
  children,
}) => {
  const router = useRouter();
  const [inputTypeState, setInputType] = React.useState('');
  return (
    <MainContainer>
      <ToolbarContainer>
        <Image priority src={Logo} alt="logo" />
        <SearchInput
          className="searchInput"
          variant="outlined"
          size="medium"
          placeholder={placeholder}
          onChange={(e) => setInputType(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              return router.push(`/search/all?s=${e.target.value}`);
            }
          }}
          InputProps={{
            inputProps: { className: 'inputSearch' },
            endAdornment: (
              <div
                onClick={() => {
                  router.push(`/search/all?s=${inputTypeState}`);
                }}
              >
                <InputAdornment position="end" className="iconWrap">
                  <Search />
                </InputAdornment>
              </div>
            ),
          }}
        />
        {/* <div className="icons">
          <BellIcon />
        </div> */}
      </ToolbarContainer>
      <div>
        {children}
        <SectionBorder />
      </div>

      <BottomNav />
      <Notification />
    </MainContainer>
  );
};

MainLayout.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default MainLayout;
