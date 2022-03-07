import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListedRules = styled.div`
  padding: 0;
  color: ${(props) => (props.color ? props.color : '#000')};

  ol {
    padding: 0 0 0 15px;

    li {
      padding: 2px 0;

      &:first-child {
        padding-top: 0px;
      }
    }
  }
`;

export const StyledListedRules = ({ color, children, data }) => {
  return (
    <ListedRules color={color} data={data}>
      <ol>
        {data.map((datas, idx) => (
          <li key={idx}>{datas.desc}</li>
        ))}
      </ol>
    </ListedRules>
  );
};

StyledListedRules.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
};
