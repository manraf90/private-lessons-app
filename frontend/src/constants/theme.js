import { createTheme } from '@mui/material/styles';
import { deepOrange, green, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: deepOrange[900]
        },
        secondary: {
            main: green[500]
        },
        background: {
            paper: grey[400]
        }
    }
});

export default theme;
