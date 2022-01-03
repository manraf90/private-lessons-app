import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    Paper,
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
        justifyContent: 'center'
    },
    paper: {
        width: '100vw',
        height: '90vh',
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
            <Paper>
                <Typography variant='h1' className={classes.paper}>
                    Private lessons App
                </Typography>
            </Paper>
        </div>
    );
};
export default HomePage;
