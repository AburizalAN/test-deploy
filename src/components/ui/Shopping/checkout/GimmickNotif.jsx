import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseIcon from 'components/icons/close-icon';

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  background-color: #7ea73d;
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
`;
const ImageWrapper = styled.div`
  width: 61px;
  height: 61px;
  border-radius: 8px;
  background-color: #fff;
  padding: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 12px;
  margin-right: 24px;
  header {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 17.73px;
  }
`;
const CloseButton = styled.button`
  padding: 0;
  background: none;
  position: absolute;
  border: none;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

const GimmickNotif = ({ name, image, desc }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <Container>
        <ImageWrapper>
          <img src={image} alt="booklet" />
        </ImageWrapper>
        <ContentWrapper>
          <header>{name}</header>
          <p>{desc}</p>
        </ContentWrapper>
        <CloseButton onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </CloseButton>
      </Container>
    )
  );
};

GimmickNotif.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
};

export default GimmickNotif;
