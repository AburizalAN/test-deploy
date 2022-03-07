import Head from 'next/head';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import AppBar from 'components/AppBar';
import BottomNav from 'components/ui/BottomNav';

export const AccountLayout = ({
  appBar,
  backable,
  backUrl,
  bottomNav,
  buttonComponent,
  children,
  noButton,
  subAppBar,
  title,
  onBackClick,
}) => {
  const docTitle = title ? title + ' - Awal Mula' : 'Awal Mula';
  const appBarProps = {
    backable,
    backUrl,
    buttonComponent,
    noButton,
    subAppBar,
    title,
    onBackClick,
  };

  return (
    <>
      <Head>
        <title>{docTitle}</title>
      </Head>
      {appBar && <AppBar {...appBarProps} />}
      <Box pt={appBar ? 6 : 0}>{children}</Box>
      {bottomNav && <BottomNav />}
    </>
  );
};

AccountLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  buttonComponent: PropTypes.node,
  subAppBar: PropTypes.node,
  title: PropTypes.string,
  backUrl: PropTypes.string,
  appBar: PropTypes.bool,
  backable: PropTypes.bool,
  bottomNav: PropTypes.bool,
  noButton: PropTypes.bool,
  onBackClick: PropTypes.func,
};

AccountLayout.defaultProps = {
  children: null,
  buttonComponent: null,
  subAppBar: null,
  title: '',
  backUrl: '/',
  appBar: true,
  backable: false,
  bottomNav: true,
  noButton: false,
  onBackClick: () => {},
};

export default AccountLayout;
