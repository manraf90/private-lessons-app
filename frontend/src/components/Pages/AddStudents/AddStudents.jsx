import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Box,
    FormControl,
    Grid,
    TextField,
    InputAdornment,
    Button
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: theme.spacing(8),
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const AddStudents = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box} component='form'>
            <FormControl>
                <Grid container justifyContent='space-around' alignItems='center' rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={2}></Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Imię'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Nazwisko'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={2}></Grid>
                    <Grid item sm={2}></Grid>

                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Termin'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Klasa'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={2}></Grid>
                    <Grid item sm={2}></Grid>

                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Liczba lekcji w tygodniu'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Stawka'
                            variant='outlined'
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>zł</InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid item sm={2}></Grid>
                    <Grid item sm={2}></Grid>

                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Numer telefonu ucznia'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id='outlined-basic'
                            label='Numer telefonu rodzica'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={2}></Grid>
                    <Button
                        variant='contained'
                        sx={{ padding: '10px 20px', marginTop: '20px' }}
                        disableRipple
                    >
                        Zapisz
                    </Button>
                </Grid>
            </FormControl>
        </Box>
    );
};

export default AddStudents;
