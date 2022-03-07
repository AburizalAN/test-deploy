import PropTypes from 'prop-types';
import { Accordion as MuiAccordion } from '@mui/material';
import styled from 'styled-components';
import ExpandMore from 'components/icons/expand-more';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { StyledTypography } from './typography';

const Accordion = styled(MuiAccordion)`
  &&& {
    box-shadow: none;
    text-transform: none;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#FFFFFF')};
    color: ${(props) => (props.textcolor ? props.textcolor : '#000000')};
    border-color: #dddddd;
    border-radius: 0;
    margin: 8px 0;
    padding: 0px 0px;
    font-size: 13px;
  }
`;

export const StyledAccordion = ({ title, children, key }) => {
  const summary = {
    padding: '0px',
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={key}
        id={key}
        style={summary}
      >
        <StyledTypography>{title}</StyledTypography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

StyledAccordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string,
  key: PropTypes.string,
};
