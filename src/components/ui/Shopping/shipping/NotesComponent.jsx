import styled from 'styled-components';
import { CardContainer } from 'components/ui/shopping/checkout/checkout.style';

const Container = styled(CardContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .label {
    font-size: 15px;
  }
  .value {
    font-size: 13px;
    font-weight: 700;
    color: #6f6f6f;
  }
`;

const NotesComponent = () => {
  return (
    <Container p="12px">
      <div className="label">Catatan</div>
      <div className="value">Tidak Ada</div>
    </Container>
  );
};

export default NotesComponent;
