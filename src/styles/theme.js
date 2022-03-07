import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#666',
          '&.MuiInputLabel-standard.MuiInputLabel-shrink': {
            transform: 'translate(0, -3px) scale(1)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // Input variant="standard"
          '& > input:not(.MuiInputBase-inputSizeSmall):not(.MuiOutlinedInput-input):not(.MuiFilledInput-input)':
            {
              paddingTop: 10,
              fontSize: 13,
            },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    allVariants: {
      color: '#25282B',
    },
    body2: {
      lineHeight: '17.73px',
      letterSpacing: '0.25px',
    },
    caption: {
      lineHeight: '15px',
      letterSpacing: '0.4px',
    },
    subtitle1: {
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    subtitle2: {
      fontSize: '13px',
      lineHeight: '17.73px',
      letterSpacing: '0.1px',
    },
    subtitle3: {
      fontSize: '13px',
      lineHeight: '18px',
      letterSpacing: '0.1px',
      color: '#25282B',
    },
    overline3: {
      fontSize: '9px',
      lineHeight: '12px',
      letterSpacing: '0.1px',
      color: '#25282B',
    },
    button: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '32px',
      letterSpacing: 0.25,
      textTransform: 'initial',
    },
    decorative1: {
      fontFamily: 'Balivia Free',
      fontWeight: 'bold',
      fontSize: 31,
      lineHeight: '37px',
      textAlign: 'center',
      letterSpacing: 0.25,
    },
  },
  palette: {
    common: { black: '#25282B' },
    primary: { main: '#265329' },
    secondary: { main: '#3dc2ff' },
    error: { main: red.A400 },
    background: { paper: '#fff', default: '#fff' },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 4px rgba(0, 0, 0, 0.15)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
});

export default theme;
