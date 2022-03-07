import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

// local imports
import BookIcons from 'components/icons/book';
import HomeIcons from 'components/icons/home';
import ShopIcons from 'components/icons/shop';
import UserIcon from 'components/icons/user';
import FileDockIcon from 'components/icons/file-dock';
import BookLightIcons from 'components/icons/book-light';
import FileDockLightIcon from 'components/icons/file-dock-light';
import HomeLightIcons from 'components/icons/home-light';
import ShopLightIcons from 'components/icons/shop-light';
import UserLightIcon from 'components/icons/user-light';

const navigations = [
  {
    key: 0,
    label: 'Home',
    icon: <HomeLightIcons />,
    iconActive: <HomeIcons />,
    url: '/',
  },
  {
    key: 1,
    label: 'Shopping',
    icon: <ShopLightIcons />,
    iconActive: <ShopIcons />,
    url: '/shopping',
  },
  {
    key: 2,
    label: 'Recipe',
    icon: <BookLightIcons />,
    iconActive: <BookIcons />,
    url: '/resep',
  },
  {
    key: 3,
    label: 'Articles',
    icon: <FileDockLightIcon />, // need fix
    iconActive: <FileDockIcon />,
    url: '/artikel',
  },
  {
    key: 4,
    label: 'Account',
    icon: <UserLightIcon />,
    iconActive: <UserIcon />,
    url: '/account',
    child: ['/reward', '/referal'],
  },
];

const StyledBottomNav = styled(BottomNavigation)`
  &.MuiBottomNavigation-root {
    height: 62px;
  }
`;

const StyledBottomNavAction = styled(BottomNavigationAction)`
  &.MuiBottomNavigationAction-root {
    color: ${({ theme: { palette } }) => palette.primary.main};

    .MuiBottomNavigationAction-label {
      font-size: 13px;
      margin-top: 2px;
    }

    transition: all 0.2s;
  }
  &.Mui-selected {
    font-weight: bold;
  }
`;

function getActive(pathname) {
  const currentNav = navigations.find((nav) => {
    const currentUrl = pathname.split('/')[1];
    return nav.url.includes(currentUrl);
  });

  return currentNav?.key;
}

const BottomNav = () => {
  const [value, setValue] = React.useState(null);
  const ref = React.useRef(null);
  const [path, setPath] = React.useState(null);

  React.useEffect(() => {
    const pathname = window?.location?.pathname;

    ref.current.ownerDocument.body.scrollTop = 0;
    setValue(getActive(pathname));
    setPath(pathname);
  }, [value]);

  const renderNavActions = React.useCallback(() => {
    return navigations.map((nav) => {
      const isSelected = nav.child?.filter((res) => res === path)?.length
        ? true
        : value === nav.key;
      const icon = isSelected ? nav.iconActive : nav.icon;

      return (
        <StyledBottomNavAction
          key={nav.key}
          href={nav.url}
          className={isSelected ? 'Mui-selected' : ''}
          showLabel
          label={nav.label}
          icon={icon}
        />
      );
    });
  }, [value]);

  return (
    <Box ref={ref} sx={{ pb: '62px' }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}
        elevation={3}
      >
        <Container maxWidth="sm">
          <StyledBottomNav
            showLabels
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
          >
            {renderNavActions()}
          </StyledBottomNav>
        </Container>
      </Paper>
    </Box>
  );
};

export default BottomNav;
