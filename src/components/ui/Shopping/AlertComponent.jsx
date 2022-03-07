import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';

const ThisAlert = styled(Alert)`
  &.show {
    animation-name: fadeIn;
    animation-duration: 0.3s;
    z-index: 7;
  }
  &.close {
    animation-name: fadeOut;
    animation-duration: 0.3s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const AlertComponent = ({ open, onClose, message, severity }) => {
  useEffect(() => {
    const alertElement = document.querySelector('.show');
    if (open) {
      setTimeout(() => {
        alertElement.classList.remove('show');
        alertElement.classList.add('close');
        setTimeout(() => {
          onClose();
        }, 200);
      }, 2000);
    }
  }, [open]);

  return (
    open && (
      <ThisAlert
        className="show"
        sx={{ position: 'fixed', top: '50px', left: '0', width: '100%' }}
        severity={severity}
      >
        {message}
      </ThisAlert>
    )
  );
};

AlertComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.string,
  severity: PropTypes.string,
};

AlertComponent.defaultProps = {
  open: false,
  onClose: () => {},
  message: '',
  severity: 'success',
};

export default AlertComponent;
