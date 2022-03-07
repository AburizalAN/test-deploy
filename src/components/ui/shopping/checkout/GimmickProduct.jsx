import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  background-color: #d2dac3;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  .card-image {
    width: 80px;
    height: 80px;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
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
    margin-right: 40px;
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
    }
  }
  .gratis-banner {
    position: absolute;
    color: white;
    background: linear-gradient(90deg, #f7a718 0%, #fdc333 100%);
    width: 200px;
    display: flex;
    align-item: center;
    justify-content: center;
    letter-spacing: 4px;
    font-weight: 700;
    padding: 3px;
    font-size: 10px;
    transform: rotate(45deg);
    right: -70px;
    top: 20px;
  }
`;

const GimmickProduct = ({ image, name, desc }) => {
  return (
    <Container>
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <h6>{name}</h6>
        <p>{desc}</p>
        {/* <div className="card-content__info">
          <div className="weight">{weight}</div>
          <div className="price">{price}</div>
        </div> */}
      </div>
      <div className="gratis-banner">GRATIS</div>
    </Container>
  );
};

GimmickProduct.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
};

export default GimmickProduct;
