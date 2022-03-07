import React from 'react';
import PropTypes from 'prop-types';
import MuiAvatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { toBase64 } from 'utils/helper';
import EditSquareLightIcon from 'components/icons/edit-square-light';

const Avatar = (props) => {
  const { alt, edit, id, name, onChange, onSrcChange, src, ...restProps } =
    props;

  const [srcValue, setSrcValue] = React.useState('');

  React.useEffect(() => {
    setSrcValue(src);
  }, [src]);

  const avatarProps = { alt, src: srcValue };

  if (edit) {
    return (
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 4,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
            zIndex: 1,
            borderRadius: '50%',
          }}
        >
          <label htmlFor={id ?? name}>
            <input
              accept="image/*"
              id={id ?? name}
              name={name}
              type="file"
              style={{ display: 'none' }}
              onChange={async (e) => {
                const files = e.target.files;
                onChange(files);

                const image = await toBase64(files[0]);
                if (!files[0]) return;
                onSrcChange(image);
                setSrcValue(image);
              }}
            />
            <IconButton component="span" sx={{ p: '4px' }}>
              <EditSquareLightIcon
                sx={{ color: 'common.black', width: 20, height: 20 }}
              />
            </IconButton>
          </label>
        </Box>
        <MuiAvatar {...avatarProps} {...restProps} />
      </Box>
    );
  }

  return <MuiAvatar {...restProps} />;
};

Avatar.propTypes = {
  alt: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  value: PropTypes.object,
  edit: PropTypes.bool,
  onChange: PropTypes.func,
  onSrcChange: PropTypes.func,
};

Avatar.defaultProps = {
  alt: '',
  id: 'upload-avatar',
  name: '',
  src: '',
  value: null,
  edit: false,
  onChange: () => {},
  onSrcChange: () => {},
};

export default Avatar;
