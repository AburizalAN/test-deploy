import styled from 'styled-components';
import { useSelector } from 'react-redux';

const colors = {
  primary: '#265329',
};
const CounterWrapper = styled.div`
  font-size: 13px;
  line-heignt: 1.35;
  display: flex;
  button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: ${colors.primary};
    color: white;
    border-radius: 50%;
    &.disabled {
      background-color: #f7f7f7;
      color: #c4c4c4;
      box-shadow: 0px 0px 0px 1px #c4c4c4;
    }
  }
  span {
    display: inline-block;
    padding: 2px 7px;
    margin: 0px 8px;
  }
`;

const CounterComponent = ({ qty, setCounter, increment, decrement }) => {
  const { loadingCounter } = useSelector((state) => state.checkout);

  return (
    <CounterWrapper>
      <button
        disabled={qty <= 1 || loadingCounter}
        className={`decrement ${qty <= 1 || loadingCounter ? 'disabled' : ''}`}
        onClick={decrement}
      >
        -
      </button>
      <span>{qty}</span>
      <button
        disabled={loadingCounter}
        className={`increment ${loadingCounter ? 'disabled' : ''}`}
        onClick={increment}
      >
        +
      </button>
    </CounterWrapper>
  );
};

export default CounterComponent;
