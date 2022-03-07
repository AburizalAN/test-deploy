import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChevronRight } from '@mui/icons-material';

export const TitleWrapper = styled.div`
  // margin: 0;
  width: 55%;
  font-weight: 700;
  font-size: ${(props) => props.fontsize ?? '18px'};
`;
export const StyledTitle = styled.p`
  margin: 0;
  // max-width: 55%;
  font-weight: 800;
  font-size: 18px;
`;

export const StyledMoreWrapper = styled.div`
  display: flex;
  font-size: 15px;
  width: 45%;
  align-items: center;
  text-align: right;
  justify-content: flex-end;

  p {
    font-size: 13px;
    font-weight: 600;
    margin: 0;
  }
  svg {
    width: 16px;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  justify-content: ${(props) => props.justifyContent};
`;

export const TitleSection = (props) => {
  const { title, bgColor, padding, fontsize, more, mt, mb, ...rest } = props;

  return (
    <StyledFlexContainer
      padding={padding}
      mt={mt}
      mb={mb}
      style={{
        width: '100%',
        background: bgColor,
        alignItems: 'center',
        ...rest,
      }}
    >
      <TitleWrapper fontsize={fontsize}>
        <StyledTitle>{title}</StyledTitle>
      </TitleWrapper>
      {more ? (
        <StyledMoreWrapper>
          <p>Lihat Semua</p>
          <ChevronRight />
        </StyledMoreWrapper>
      ) : null}
    </StyledFlexContainer>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  more: PropTypes.bool,
  padding: PropTypes.string,
  fontsize: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
};
