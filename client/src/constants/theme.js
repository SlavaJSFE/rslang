import { createMuiTheme } from '@material-ui/core';

const primary = '#885980';
const secondary = '#8AB94F';
const tertiary = '#FAF1DA';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
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
        border: `2px solid ${primary}`,
      },
      containedSecondary: {
        border: `2px solid ${secondary}`,
      },
    },
    MuiTab: {
      root: {
        backgroundColor: tertiary,
      },
    },
  },
});

export default theme;
