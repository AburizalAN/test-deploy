import React from 'react';
import PropTypes from 'prop-types';
import TabsUnstyled, { tabsUnstyledClasses } from '@mui/base/TabsUnstyled';
import TabsListUnstyled, {
  tabsListUnstyledClasses,
} from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Box from '@mui/material/Box';
import styled, { css } from 'styled-components';

const Styled = {
  Tabs: styled(TabsUnstyled)`
    &.${tabsUnstyledClasses.horizontal} {
      overflow: auto;

      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      & {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    }
  `,

  TabsList: styled(TabsListUnstyled)`
    &.${tabsListUnstyledClasses.horizontal} {
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
    }
  `,

  Tab: styled(TabUnstyled)`
    background-color: transparent;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.palette.common.black};
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.25px;
    line-height: 18px;
    padding: 8px 20px;
    margin-right: 8px;
    white-space: nowrap;

    &.${tabUnstyledClasses.selected} {
      background-color: #edf7ed;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  `,
};

const TabsTransaction = ({ tabName = [], value, onChange }) => {
  return (
    <Styled.Tabs value={value} onChange={onChange}>
      <Styled.TabsList>
        {tabName.map((val, i) => (
          <Styled.Tab key={i} value={val.category}>
            {val.name}
          </Styled.Tab>
        ))}
        <Box pr={1} />
      </Styled.TabsList>
    </Styled.Tabs>
  );
};

TabsTransaction.propTypes = {
  tabName: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TabsTransaction;
