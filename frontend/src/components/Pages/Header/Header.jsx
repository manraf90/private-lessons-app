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
    link: {
        textDecoration: 'none',
        marginRight: theme.spacing(4),
        color: 'white'
    }
}));

const Header = () => {
    const classes = useStyles();
    console.log(classes);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Link to='/' className={classes.link}>
                        HOME
                    </Link>
                    <Typography variant='h5'>
                        <Link to='/students' className={classes.link}>
                            Students
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
