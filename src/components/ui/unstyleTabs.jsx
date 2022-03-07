import * as React from 'react';
import PropTypes from 'prop-types';
import TabsUnstyled from '@mui/base/TabsUnstyled';

export default function UnstyledTabsCustomized({ children, onChange }) {
  return (
    <TabsUnstyled defaultValue={0} onChange={onChange} centered>
      {children}
    </TabsUnstyled>
  );
}

UnstyledTabsCustomized.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
};
