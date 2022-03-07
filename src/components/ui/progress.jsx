import PropTypes from 'prop-types';
import styled from 'styled-components';
const Progresion = styled.div`
   {
    width: 100%;
    background-color: #d1d1d6;
    border-radius: 20px;
    position: relative;
  }
`;

const ProgBars = styled.div`
   {
    width: ${(props) =>
      props.total
        ? ((props.resd / props.total) * 100).toString() + '%'
        : '100%'};
    padding: 4px 10px;
    background: ${(props) =>
      props.resd === 0
        ? '#d1d1d6'
        : 'linear-gradient(270deg, #265329 -57.23%, rgba(93, 180, 99, 0.62) 116.27%)'};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: ${(props) =>
      props.resd === props.total ? '20px' : '5px'};
    border-bottom-right-radius: ${(props) =>
      props.resd === props.total ? '20px' : '5px'};
    margin: 10px 0;
    height: ${(props) => props.height || '30px'};
  }
`;

const Child = styled.div`
   {
    width: 100%;
    line-height: ${(props) => props.height || '30px'};
    padding: 0 10px;
    background-color: transparent;
    border-radius: 30px;
    color: #fff;
    font-size: 11px;
    height: ${(props) => props.height || '30px'};
    position: absolute;
    text-align: ${(props) => (props.centered ? 'center' : 'inherit')};
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }
`;

export const Progress = ({ children, total, resd, centered, height, bold }) => {
  return (
    <Progresion>
      <Child centered={centered} height={height} bold={bold}>
        {children}
      </Child>
      <ProgBars total={total} resd={resd} height={height}></ProgBars>
    </Progresion>
  );
};

Progress.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  total: PropTypes.number,
  resd: PropTypes.number,
  centered: PropTypes.bool,
  height: PropTypes.string,
  bold: PropTypes.bool,
};
