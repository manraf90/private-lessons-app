import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        divider: deepOrange[200],
        mode: 'dark',
        primary: {
            main: deepOrange[900]
        },
        secondary: {
            main: '#388e3c'
        }
    }
});

export default theme;
