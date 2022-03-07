import { useState } from 'react';
import styled from 'styled-components';
import { FlexContainer } from 'components/style';
import { useRouter } from 'next/router';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircleClose from 'components/icons/circle-close';
import AccordionComponent from 'components/ui/shopping/AccordionComponent';
import Button from '@mui/material/Button';
import PaymentMethodItem from 'components/ui/shopping/shipping/PaymentMethodItem';
import LoadingButton from '@mui/lab/LoadingButton';
import PropTypes from 'prop-types';

const Header = styled(FlexContainer)`
  padding: 12px;
  font-size: 18px;
  line-height: 24.55px;
  font-weight: 600;
  justify-content: space-between;
  color: black;
  button {
    padding: 0;
    margin_0;
    background: none;
    border: none;
  }
`;

const Container = styled.div`
  padding: 12px;
  position: absolute;
  border: none;
  outline: none;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const style = {
  display: 'block',
  margin: 'auto',
  maxWidth: '480px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '12px',
  p: '2px',
};

const PaymentModal = ({
  handleClose,
  open,
  data,
  submitOrder,
  selected,
  setSelected,
  isLoading,
  total,
  disabled,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Container>
          <Box sx={style}>
            <Header>
              <div>Pembayaran</div>
              <button onClick={handleClose}>
                <CircleClose
                  sx={{
                    stroke: '#000000',
                    strokeWidth: 2,
                    color: 'transparent',
                  }}
                />
              </button>
            </Header>
            <Box>
              {Object.values(data).map((item, index) => {
                const filteredMethods = item?.methods?.filter(
                  ({ min_order_total, max_order_total }) =>
                    min_order_total <= total &&
                    (max_order_total >= total || max_order_total == null)
                );
                return filteredMethods.length !== 0 ? (
                  <AccordionComponent
                    key={index}
                    title={item.title}
                    content={
                      <Box py="12px">
                        {filteredMethods.map((method, index) => (
                          <PaymentMethodItem
                            key={index}
                            image={method.logo_url}
                            label={method.title}
                            desc={method.text_below_logo}
                            isSelected={selected === method.method}
                            onClick={() => setSelected(method.method)}
                          />
                        ))}
                      </Box>
                    }
                  />
                ) : null;
              })}
            </Box>
            <Box p="12px">
              <LoadingButton
                sx={{ borderRadius: '12px' }}
                disableElevation
                fullWidth
                variant="contained"
                loading={isLoading}
                loadingPosition="start"
                onClick={submitOrder}
                disabled={disabled}
              >
                Bayar
              </LoadingButton>
            </Box>
          </Box>
        </Container>
      </Fade>
    </Modal>
  );
};

PaymentModal.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  data: PropTypes.object,
  order_data: PropTypes.object,
  submitOrder: PropTypes.func,
  selected: PropTypes.string,
  setSelected: PropTypes.func,
  isLoading: PropTypes.bool,
  total: PropTypes.any,
  disabled: PropTypes.bool,
};

PaymentModal.defaultProps = {
  data: {},
  disabled: false,
};

export default PaymentModal;
