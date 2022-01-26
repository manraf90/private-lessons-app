import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid blue',
        flex: 1,
        right: '20px'
    },
    '& MuiAppBar-root': {
        backgroundColor: 'red'
    },
    link: {
        textDecoration: 'none',
        marginRight: theme.spacing(6),
        color: 'white',
        '&:hover': {
            color: 'lightgreen'
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='primary' enableColorOnDark>
                <Toolbar>
                    <Typography variant='h5'>
                        <Link to='/' className={classes.link}>
                            Strona główna
                        </Link>
                        <Link to='/students' className={classes.link}>
                            Uczniowie
                        </Link>
                        <Link to='/students/add' className={classes.link}>
                            Dodaj ucznia
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
