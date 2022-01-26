import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    Typography
} from '@mui/material';

const useStyles = makeStyles({
    '@global': {
        body: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        }
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    }
    // paper: {
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h1'>
                Private lessons App
            </Typography>
        </div>
    );
};
export default HomePage;
