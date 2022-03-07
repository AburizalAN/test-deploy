import PropTypes from 'prop-types';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import ArrowRight from 'components/icons/arrow-right';

const StyledMenuItem = styled(ButtonBase)`
  padding: 8px 16px;
  justify-content: space-between;
  width: 100%;
`;

const MenuList = (props) => {
  const { menu: menus, ...restProps } = props;

  return (
    <Box {...restProps}>
      {menus.map((menu) => (
        <Link key={menu.key} href={menu.url} passHref>
          <StyledMenuItem>
            <Typography variant="subtitle1" textAlign="left">
              {menu.label}
            </Typography>
            <ArrowRight sx={{ color: '#6f6f6f', width: 20, height: 20 }} />
          </StyledMenuItem>
        </Link>
      ))}
    </Box>
  );
};

MenuList.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
MenuList.defaultProps = {
  menu: [
    { key: 'menu-1', label: 'Menu 1', url: '/menu-1' },
    { key: 'menu-2', label: 'Menu 2', url: '/menu-2' },
    { key: 'menu-3', label: 'Menu 3', url: '/menu-3' },
  ],
};

export default MenuList;
