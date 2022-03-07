import styled from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  primary: '#265329',
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  & > *:not(:last-child) {
    margin-right: 40px;
  }
  .image {
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 8px;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .content {
    flex: 1;
    font-weight: 700;
    .title1 {
      font-size: 13px;
      color: ${colors.primary};
    }
    .title2 {
      font-size: 15px;
      color: #1f1f1f;
    }
  }
  .price {
    font-size: 13px;
    color: #1f1f1f;
  }
`;

const Product = ({ productProps }) => {
  const { image, name, price } = productProps;

  return (
    <Container>
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        {/* <div className="title1">{name}</div> */}
        <div className="title2">{name}</div>
      </div>
      <div className="price">{price}</div>
    </Container>
  );
};

Product.propTypes = {
  productProps: PropTypes.object,
};

export default Product;
