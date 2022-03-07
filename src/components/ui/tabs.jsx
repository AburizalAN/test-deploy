import PropTypes from 'prop-types';
import React from 'react';
import { Box, Tabs, Tab, createTheme, ThemeProvider } from '@mui/material';
import styled, { css } from 'styled-components';

const Styled = {
  Tab: styled(Tab)`
    &&& {
      text-transform: none;
    }
  `,
  TabContentWrapper: styled.div`
    padding: ${(props) => props.padding ?? '26px 12px'};

    ${({ $noPadding: noPadding }) =>
      noPadding &&
      css`
        padding: 0;
      `}
  `,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#486140',
    },
  },
});

export function TabPanel({ noPadding, selected, index, padding, children }) {
  return (
    <div
      role="tabpanel"
      hidden={!selected}
      aria-labelledby={`simple-tab-${index}`}
      // {...other}
    >
      {selected && (
        <Styled.TabContentWrapper $noPadding={noPadding} padding={padding}>
          <div>{children}</div>
        </Styled.TabContentWrapper>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.any,
  selected: PropTypes.bool,
  noPadding: PropTypes.bool,
  index: PropTypes.number,
  padding: PropTypes.string,
  bgColors: PropTypes.string,
};

TabPanel.defaultProps = {
  noPadding: false,
};

export const FlashSaleTabs = ({ tabs = [], value, onChange, children }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={onChange}
            variant="fullWidth"
            // aria-label="basic tabs example"
          >
            {tabs.map((val, i) => (
              <Styled.Tab
                key={i}
                label={val.label}
                data={{ id: val.id, expired: val.endTime }}
                wrapped
              />
            ))}
          </Tabs>
        </Box>
        {children}
      </ThemeProvider>
    </Box>
  );
};

const BasicTabs = ({ tabName = [], value, onChange, children }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={onChange}
            variant="scrollable"
            // aria-label="basic tabs example"
          >
            {tabName.map((val, i) => (
              <Styled.Tab key={i} label={val.name} value={val.category} />
            ))}
          </Tabs>
        </Box>
        {children}
      </ThemeProvider>
    </Box>
  );
};

BasicTabs.propTypes = {
  tabName: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.any,
};

export default BasicTabs;
