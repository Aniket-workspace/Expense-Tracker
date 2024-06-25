import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import '@fontsource/poppins/400.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#26a69a",
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: [
      'Roboto', // default Material-UI font
      'Your Custom Font', // add your custom font here
      'sans-serif',
    ].join(','),
  },
  
});
export default theme