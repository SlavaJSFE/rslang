import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#885980',
    },
    secondary: {
      main: '#FAF1DA',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '15px',
      },
      outlinedPrimary: {
        border: '2px solid',
      },
      outlinedPrimaryHover: {
        border: '2px solid',
      },
      containedPrimary: {
        border: '2px solid #885980',
      },
      containedSecondary: {
        border: '2px solid #8AB94F',
      },
    },
  },
});

export default theme;
