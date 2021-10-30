import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        color: 'red'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={ classes.root }>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
