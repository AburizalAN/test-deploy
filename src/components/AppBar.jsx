import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MUIAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
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
    subAppBar,
    bgColor,
    elevation,
    color,
  } = props;

  return (
    <MUIAppBar
      position="fixed"
      elevation={elevation}
      sx={{ backgroundColor: bgColor, left: 0 }}
    >
      <Container disableGutters maxWidth="sm">
        <Toolbar variant="dense">
          {backable &&
            (backUrl ? (
              <Link href={backUrl} passHref>
                <IconButton edge="start" sx={{ marginRight: 1 }}>
                  <ExpandLeftLightIcon
                    sx={{ color: color || 'common.black' }}
                  />
                </IconButton>
              </Link>
            ) : (
              <IconButton
                edge="start"
                sx={{ marginRight: 1 }}
                onClick={onBackClick}
              >
                <ExpandLeftLightIcon sx={{ color: color || 'common.black' }} />
              </IconButton>
            ))}
          <Typography variant="h6" sx={{ color: color || 'common.black' }}>
            {title}
          </Typography>
          <Stack flexGrow={1} />
          {!noButton && (
            <Box>
              {!buttonComponent ? (
                <>
                  {/* <IconButton>
                    <FavoriteLightIcon
                      sx={{ width: 24, height: 24, color: 'primary.main' }}
                    />
                  </IconButton> */}
                  {/* <Link href="/notification" passHref>
                    <IconButton edge="end">
                      <NotificationLight
                        sx={{ width: 24, height: 24, color: 'primary.main' }}
                      />
                    </IconButton>
                  </Link> */}
                </>
              ) : (
                buttonComponent
              )}
            </Box>
          )}
        </Toolbar>
        {subAppBar ? <>{subAppBar}</> : null}
      </Container>
    </MUIAppBar>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
  backUrl: PropTypes.string,
  backable: PropTypes.bool,
  noButton: PropTypes.bool,
  subAppBar: PropTypes.node,
  buttonComponent: PropTypes.node,
  onBackClick: PropTypes.func,
  bgColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  elevation: PropTypes.number,
  color: PropTypes.string,
};

AppBar.defaultProps = {
  title: 'Title Here',
  backable: false,
  noButton: false,
  backUrl: '/',
  subAppBar: null,
  buttonComponent: null,
  onBackClick: () => {},
  bgColor: 'white',
  elevation: 1,
};

export default AppBar;
