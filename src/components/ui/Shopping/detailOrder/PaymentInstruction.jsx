import styled from 'styled-components';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

// import AccordionComponent from 'components/ui/shopping/AccordionComponent';

const Container = styled.div`
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0px 0px 27px -6px rgba(0, 0, 0, 0.1);
`;

const TitleSection = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24.55px;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 20.46px;
  margin-bottom: 8px;
`;

const PaymentInstruction = ({ instruction }) => {
  return (
    <Container>
      <TitleSection>Instruksi Pembayaran</TitleSection>
      {/* <Paragraph>Pilihan cara pembayaran melalui VA BCA</Paragraph> */}
      {/* <div>
        {new Array(3).fill(0).map((_, index) => (
          <AccordionComponent
            key={index}
            title="ATM BCA"
            content={
              <Box p="12px">
                Lorem Ipsum dolor sit amet contextual lorem ipsum dolor sit amet
              </Box>
            }
          />
        ))}
      </div> */}
      {instruction ? (
        <div
          dangerouslySetInnerHTML={{
            __html: instruction,
          }}
        ></div>
      ) : (
        <Skeleton style={{ marginBottom: '12px' }} height={50} count={6} />
      )}
    </Container>
  );
};

PaymentInstruction.propTypes = {
  instruction: PropTypes.string,
};

export default PaymentInstruction;
