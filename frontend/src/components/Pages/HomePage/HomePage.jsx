import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    Paper,
    Typography,
    CssBaseline
} from '@mui/material';
// import img from '../../../images/img1.jpg';
import Header from './components/Header/Header.jsx';

const useStyles = makeStyles({
    '@global': {
        body: {
            margin: 0,
            padding: 0
        }
    },
    // div: {
    //     position: 'relative',
    //     zIndex: -1
    // },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '6rem'
    }
    // bg: {
    //     '& ::before': {
    //         backgroundImage: `url(${img})`,
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover',
    //         position: 'absolute',
    //         backgroundAttachment: 'fixed',
    //         width: '100vw',
    //         height: '100vh',
    //         opacity: 0.2,
    //         zIndex: -1,
    //         content: ''
    //     }
    // }
});

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <CssBaseline />
            <Header />
            <Paper className={classes.bg}>
                <Typography variant='h1'>
                    Hello sagas gsgsdhsdhs hsdhsdhsh
                </Typography>
            </Paper>
        </div>
    );
};
export default HomePage;
