import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    Paper,
    Typography,
    CssBaseline
} from '@mui/material';
import Header from './Header/Header.jsx';

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
        justifyContent: 'center'
    },
    paper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Paper className={classes.paper}>
                <Typography variant='h1'>
                    Private lessons App
                </Typography>
            </Paper>
        </div>
    );
};
export default HomePage;
