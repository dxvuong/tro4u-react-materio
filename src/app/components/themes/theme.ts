import { createTheme } from '@mui/material/styles';

export const themes = createTheme({
  palette: {
    primary: {
      main: '#9155fd',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: 'rgba(58, 53, 65, 0.68)',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});