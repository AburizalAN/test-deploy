import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { default as MuiAlert } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import ACTIONS from 'store/registerActions';

const Alert = () => {
  const dispatch = useDispatch();
  const alertState = useSelector((state) => state.alert);

  if (!alertState?.visible) return null;

  return (
    <Box position="fixed" top={48 + 16} left={0} right={0} zIndex={1000}>
      <Paper elevation={0}>
        <Container maxWidth="sm">
          <MuiAlert
            variant="outlined"
            iconMapping={{
              success: (
                <CheckCircleOutlineIcon
                  sx={{ fontSize: 28, color: 'primary.main' }}
                />
              ),
            }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                onClick={() => {
                  dispatch(ACTIONS.alert.closeAlert());
                }}
              >
                <CancelIcon sx={{ fontSize: 24, color: 'primary.main' }} />
              </IconButton>
            }
            sx={{
              '&.MuiAlert-root': {
                borderRadius: 2,
              },
              '&.MuiAlert-outlinedSuccess': {
                backgroundColor: '#EDF7ED',
                color: 'primary.main',
                borderColor: 'primary.main',
              },
              '& .MuiAlert-message': {
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            {alertState.message}
          </MuiAlert>
        </Container>
      </Paper>
    </Box>
  );
};

export default Alert;
