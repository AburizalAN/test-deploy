import { useState } from 'react';
import ArrowBottom from 'components/icons/arrow-bottom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalListSelect from 'components/ui/shopping/shipping/ModalListSelect';

const colors = {
  primary: '#265329',
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px solid #26532980;
  border-radius: 8px;
  .value {
    flex: 1;
    width: 100%;
    font-size: 12.8px;
    line-height: 17px;
    color: ${colors.primary};
    &:focus-visible {
      outline: none;
    }
  }
`;

const Select = ({ selected, setSelected, list }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container onClick={() => setOpen(true)}>
        <div className="value">{selected?.label}</div>
        <ArrowBottom />
      </Container>
      <ModalListSelect
        open={open}
        setOpen={setOpen}
        list={list}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

Select.propTypes = {
  selected: PropTypes.object,
  setSelected: PropTypes.func,
  list: PropTypes.array,
};

export default Select;
