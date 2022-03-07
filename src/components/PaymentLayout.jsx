import PropTypes from 'prop-types';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import {
  Search as SearchInput,
  ContentSection,
  ToolbarContainer,
} from './style';
import BottomNav from 'components/ui/BottomNav';
import Search from './icons/search';
import BellIcon from './icons/bell';
import Logo from 'assets/img/logo-main.png';
import { Container } from '@mui/material';

export const PaymentLayout = ({
  placeholder = 'Search something...',
  children,
}) => {
  return (
    <ContentSection>
      <ToolbarContainer>
        <Image priority src={Logo} alt="logo" />
        <SearchInput
          className="searchInput"
          variant="outlined"
          size="medium"
          placeholder={placeholder}
          InputProps={{
            // inputComponent: <input className="inputSearch" />,
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
      <Container maxWidth="lg">{children}</Container>
    </ContentSection>
  );
};

PaymentLayout.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default PaymentLayout;
