import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircleClose from 'components/icons/circle-close';
import Backdrop from '@mui/material/Backdrop';

const ModalContainer = styled.div`
  padding: 12px;
  position: absolute;
  border: none;
  outline: none;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShowSelected = styled.div`
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 15px;
  line-height: 20.46px;
  color: #25282b;
  button {
    background: none;
    border: none;
    padding: 0px;
  }
`;

const List = styled.div`
  padding: 12px;
  div {
    font-size: 15px;
    line-height: 20.46px;
    letter-spacing: 0.15 px;
    color: #6f6f6f;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const style = {
  display: 'block',
  margin: 'auto',
  maxWidth: '480px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '2px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  p: '2px',
};

const ModalListSelect = ({ open, setOpen, list, setSelected, selected }) => {
  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <Box sx={style}>
            <Box p="12px">
              <ShowSelected>
                <span>{selected?.label}</span>
                <button onClick={() => setOpen(false)}>
                  <CircleClose
                    sx={{
                      stroke: '#000000',
                      strokeWidth: 2,
                      color: 'transparent',
                    }}
                  />
                </button>
              </ShowSelected>
            </Box>
            <List>
              {list?.map((item, index) => (
                <div key={index} onClick={() => handleSelect(item)}>
                  {item.label}
                </div>
              ))}
            </List>
          </Box>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

ModalListSelect.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  list: PropTypes.array,
  setSelected: PropTypes.func,
  selected: PropTypes.object,
};

export default ModalListSelect;
