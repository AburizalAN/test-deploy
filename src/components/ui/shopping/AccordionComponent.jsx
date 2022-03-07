import styled from 'styled-components';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandCircleDownOutlined } from '@mui/icons-material';

const ThisAccordion = styled(Accordion)({
  boxShadow: 'none !important',
  margin: '0 !important',
  '&:not(:first-child)::before': {
    display: 'block !important',
  },
  '&::before': {
    opacity: '1 !important',
    content: '"" !important',
    background: 'none !important',
    boxShadow: '0px 4px 1px 0px rgba(0, 0, 0, 0.1) !important',
  },
  '.MuiAccordionSummary-root': {
    boxShadow: '0px 4px 3px -4px rgba(0, 0, 0, 0.15) !important',
    padding: '14px 12px !important',
    minHeight: 'auto !important',
    '.MuiAccordionSummary-content': {
      margin: '0 !important',
    },
  },
  '.MuiAccordionDetails-root': {
    padding: '0 !important',
  },
});

const AccordionComponent = ({ title, content }) => {
  return (
    <ThisAccordion>
      <AccordionSummary
        expandIcon={<ExpandCircleDownOutlined sx={{ color: '#000000' }} />}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </ThisAccordion>
  );
};

AccordionComponent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
};

export default AccordionComponent;
