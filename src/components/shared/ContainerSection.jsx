import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContainerSection = (props) => {
  const { children, title, noTitle, ...restProps } = props;

  return (
    <Container maxWidth="sm" {...restProps}>
      {!noTitle && (
        <Box sx={{ mb: 1, px: props.disableGutters ? 2 : 0 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
      )}
      {children}
    </Container>
  );
};

ContainerSection.propTypes = {
  disableGutters: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  noTitle: PropTypes.bool,
};
ContainerSection.defaultProps = {
  disableGutters: false,
  title: 'Title',
  children: <></>,
  noTitle: false,
};

export default ContainerSection;
