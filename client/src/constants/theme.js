import { createMuiTheme } from '@material-ui/core';
import { primaryColor, secondaryColor, tertiaryColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    tertiary: {
      main: tertiaryColor,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '10px',
      },
      outlinedPrimary: {
        border: '2px solid',
      },
      outlinedPrimaryHover: {
        border: '2px solid',
      },
      containedPrimary: {
        border: `2px solid ${primaryColor}`,
      },
      containedSecondary: {
        border: `2px solid ${secondaryColor}`,
      },
    },
    MuiTab: {
      root: {
        backgroundColor: tertiaryColor,
        fontWeight: 'bold',
      },
    },
  },
});

export default theme;
