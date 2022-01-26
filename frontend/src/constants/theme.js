import { createTheme } from '@mui/material/styles';
import { deepOrange, grey } from '@mui/material/colors';
import { plPL } from '@mui/material/locale';

const theme = createTheme({
    palette: {
        divider: deepOrange[200],
        mode: 'dark',
        background: {
            default: grey[700]
        },
        primary: {
            main: deepOrange[700]
        },
        secondary: {
            main: '#388e3c'
        }
    },
    // it is not working
    MuiTablePagination: {
        labelDisplayedRows: ({ from, to, count }) => `${from}–${to} z ${count !== -1 ? count : `more than ${to}`}`
    }
},
plPL);

export default theme;
