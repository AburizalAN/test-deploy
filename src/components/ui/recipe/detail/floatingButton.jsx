import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ArrowDownIcon from 'components/icons/arrow-down';
import { StyledButton } from 'components/ui/button';

const FloatingButton = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: '7',
        bottom: '75px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <StyledButton
        bgcolor="#84B27A"
        border="none"
        p="9px 32px"
        href="#videoResep"
      >
        <Typography
          sx={{
            textTransform: 'capitalize',
            color: 'white',
            marginRight: '8px',
            minWidth: '120px',
          }}
        >
          Cara Membuat
        </Typography>
        <ArrowDownIcon />
      </StyledButton>
    </Box>
  );
};

export default FloatingButton;
