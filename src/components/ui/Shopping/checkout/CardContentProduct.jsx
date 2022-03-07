import styled from 'styled-components';
import CounterComponent from './CounterComponent';
import PropTypes from 'prop-types';
import ACTIONS from 'store/modules/checkout/actions';
import { useDispatch } from 'react-redux';

import TrashIcon from 'components/icons/trash';

const colors = {
  primary: '#265329',
};

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  display: flex;
  .card-tick {
    height: 80px;
    display: flex;
    align-items: center;
    button {
      padding: 0;
      margin: 0;
      border: none;
      background: none;
    }
    svg {
      margin-right: 12.75px;
    }
  }
  .card-image {
    width: 80px;
    height: 80px;
    padding: 10px;
    border: 1px solid #f7f7f7;
    margin-right: 12px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .card-content {
    flex: 1;
    h6 {
      margin-bottom: 2px;
      font-size: 15px;
      line-height: 1.3;
      font-weight: 700;
    }
    p {
      font-size: 13px;
      margin: 0;
      margin-bottom: 4px;
      line-height: 1.35;
    }
    &__info {
      line-height: 1.35;
      font-size: 13px;
      > *:not(:last-child) {
        margin-bottom: 4px;
      }
      .weight {
        color: #6f6f6f;
      }
      .price {
        color: ${colors.primary};
        font-weight: 800;
      }
    }
  }
`;
const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;
const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const CardContentProduct = ({ productProps, onSelect, status, updateQty }) => {
  const { image, name, price, weight, qty, quote_id, item_id } = productProps;
  const dispatch = useDispatch();

  const increment = () => {
    updateQty({
      item_id,
      qty: qty + 1,
      quote_id,
    });
  };

  const decrement = () => {
    updateQty({
      item_id,
      qty: qty - 1,
      quote_id,
    });
  };

  const DeleteButton = () => (
    <Button onClick={() => dispatch(ACTIONS.checkout.deleteCartItem(item_id))}>
      <TrashIcon />
    </Button>
  );

  return (
    <Container>
      {/* <div className="card-tick">
        <button onClick={() => onSelect()}>
          {status ? <TickboxIcon /> : <TickAltIcon />}
        </button>
      </div> */}
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <h6>{name}</h6>
        {/* <p>{desc}</p> */}
        <div className="card-content__info">
          {/* <div className="weight">{weight}</div> */}
          <div className="price">{price}</div>
        </div>
        <CardActions>
          <CounterComponent
            qty={qty}
            increment={increment}
            decrement={decrement}
          />
          <DeleteButton />
        </CardActions>
      </div>
    </Container>
  );
};

CardContentProduct.propTypes = {
  productProps: PropTypes.object,
  onSelect: PropTypes.func,
  status: PropTypes.bool,
  updateQty: PropTypes.func,
};

export default CardContentProduct;
