import * as React from 'react';
import PropTypes from 'prop-types';
import { Modal as MuiModal, Box } from '@mui/material';
import styled from 'styled-components';

const Modal = styled(MuiModal)`
  &&& {
    box-shadow: none;
  }
`;

export const StyledModal = ({
  children,
  title,
  open,
  handleClose,
  minWidth,
  yPosition,
  wrapperStyle,
}) => {
  const style = {
    position: 'absolute',
    top: yPosition ? yPosition : '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: minWidth ? minWidth : '40vw',
    bgcolor: 'background.paper',
    border: '1px solid #D5D5D5',
    borderRadius: '10px',
    boxShadow: 24,
    padding: yPosition ? '16px 16px 100px' : '16px',
    overflow: 'auto',
    maxHeight: '60vh',
    '&:focus-visible': {
      outline: 'none !important',
    },
    ...wrapperStyle,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

StyledModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  yPosition: PropTypes.string,
  wrapperStyle: PropTypes.object,
};
