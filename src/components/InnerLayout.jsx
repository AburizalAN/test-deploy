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
import { Card, Container, Grid } from '@mui/material';
import ContainerSection from './shared/ContainerSection';
import AppBar from 'components/AppBar';
import DynamicMenuList from 'components/MenuList';

export const InnerLayout = ({
  placeholder = 'Search something...',
  children,
  hasToolbar,
  hasSideBar,
  hasFoot,
  hasBottomNav,
  bgAutoLayout,
  autoLayout,
  hasOuterNav,
  bgOuterNav,
  backable,
  backUrl,
  buttonComponent,
  noButton,
  onBackClick,
  title,
  elevation,
  color,
}) => {
  const gridStyled = {
    backgroundColor: bgAutoLayout ? bgAutoLayout : '#FFFFFF',
    padding: '50px 0px',
    minHeight: '50vh',
    boxShadow: bgAutoLayout ? '0px 0px 7px 2px rgba(0, 0, 0, 0.07)' : 'none',
  };

  const sideStyled = {
    padding: '20px 0px',
  };

  const inners = {
    padding: '70px',
  };

  const appBarProps = {
    backable,
    backUrl,
    buttonComponent,
    noButton,
    title,
    onBackClick,
    elevation,
    color,
  };

  return (
    <MainContainer>
      {hasOuterNav ? <AppBar bgColor={bgOuterNav} {...appBarProps} /> : ''}
      {hasToolbar ? (
        <ToolbarContainer>
          <Image priority src={Logo} alt="logo" />
          <SearchInput
            className="searchInput"
            variant="outlined"
            size="medium"
            placeholder={placeholder}
            InputProps={{
              inputProps: { className: 'inputSearch' },
              endAdornment: (
                <InputAdornment position="end" className="iconWrap">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <div className="icons">
            <BellIcon />
          </div>
        </ToolbarContainer>
      ) : (
        ''
      )}
      <Grid container spacing={0}>
        {hasSideBar ? (
          <Grid item xs={0} md={hasSideBar ? 3 : 0}>
            <Card style={gridStyled}>
              <div style={sideStyled}>
                <ContainerSection
                  disableGutters
                  title="Pembelian"
                  sx={{ pb: 3 }}
                >
                  <DynamicMenuList
                    menu={[
                      {
                        key: 'daftar-transaksi',
                        label: 'Daftar Transaksi',
                        url: '/daftar-transaksi',
                      },
                      {
                        key: 'konfirmasi-pembayaran',
                        label: 'Konfirmasi Pembayaran',
                        url: '/konfirmasi-pembayaran',
                      },
                      {
                        key: 'wishlisth-bookmark',
                        label: 'Wishlist & Bookmark',
                        url: '/wishlisth-bookmark',
                      },
                    ]}
                  />
                </ContainerSection>
                <ContainerSection disableGutters title="Customer">
                  <DynamicMenuList
                    menu={[
                      {
                        key: 'informasi-pribadi',
                        label: 'Referal Program',
                        url: '/account/informasi-pribadi',
                      },
                    ]}
                  />
                </ContainerSection>
              </div>
            </Card>
          </Grid>
        ) : (
          <></>
        )}
        <Grid item xs={12} md={hasSideBar ? 9 : 12}>
          {autoLayout ? (
            <Card style={gridStyled}>{children}</Card>
          ) : (
            <div style={inners}>{children}</div>
          )}
          <SectionBorder />
        </Grid>
      </Grid>

      {hasBottomNav ? <BottomNav /> : null}
    </MainContainer>
  );
};

InnerLayout.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  hasSideBar: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  hasFoot: PropTypes.bool,
  hasBottomNav: PropTypes.bool,
  autoLayout: PropTypes.bool,
  color: PropTypes.string,
  secondaryAction: PropTypes.any,
};

InnerLayout.defaultProps = {
  hasSideBar: true,
  hasToolbar: true,
  hasFoot: false,
  hasBottomNav: true,
  autoLayout: true,
};

export default InnerLayout;
