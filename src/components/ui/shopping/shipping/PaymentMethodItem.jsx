import styled from 'styled-components';
import { FlexContainer } from 'components/style';
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';

const Container = styled(FlexContainer)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
const Image = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  img {
    display: block;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    object-fit: contain;
    objcect-position: center;
  }
`;
const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 17.73px;
  color: black;
`;
const Desc = styled.div`
  font-size: 11px;
  line-height: 15px;
`;

const PaymentMethodItem = ({ image, label, desc, isSelected, onClick }) => {
  return (
    <Container onClick={onClick} justifyContent="start">
      <FlexItem>
        <Radio checked={isSelected} name="Radio Button" value="a" />
      </FlexItem>
      <FlexItem>
        <Image>
          <img src={image} alt="payment bca" />
        </Image>
      </FlexItem>
      <FlexItem>
        <Title>{label}</Title>
        <Desc>{desc}</Desc>
      </FlexItem>
    </Container>
  );
};

PaymentMethodItem.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PaymentMethodItem;
