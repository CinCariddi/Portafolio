import { createTheme } from '@mui/material/styles'
const theme = createTheme({
    palette: {
      primary: {
        light: '#6746c3',
        main: '#311b92',
        dark: '#000063',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#e6ceff',
        main: '#b39ddb',
        dark: '#836fa9',
        contrastText: '#000000',
      },
    },
  });
  console.log(theme)

  export default theme
