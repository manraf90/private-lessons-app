import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Box,
    FormControl,
    Grid,
    TextField,
    InputAdornment,
    Button,
    Autocomplete
} from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import config from '../../../config/index.js';

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

const daysName = [
    { label: 'Poniedziałek', id: 1 },
    { label: 'Wtorek', id: 2 },
    { label: 'Środa', id: 3 },
    { label: 'Czwartek', id: 4 },
    { label: 'Piątek', id: 5 },
    { label: 'Sobota', id: 6 },
    { label: 'Niedziela', id: 7 },
    { label: 'Rezerwa', id: 8 }
];

const timeSlots = () => {
    const arr = [...new Array(24 * 4)];
    const timeArray = arr.map((_, index) => {
        const timeHour = `${index < 40 ? '0' : ''}${Math.floor(index / 4)}`;
        let timeMinutes = '';
        switch (index % 4) {
            case 0:
                timeMinutes = '00';
                break;
            case 1:
                timeMinutes = '15';
                break;
            case 2:
                timeMinutes = '30';
                break;
            case 3:
                timeMinutes = '45';
                break;
            default:
                break;
        }
        return `${timeHour}:${timeMinutes}`;
    }).slice(32, 86);
    return timeArray;
};

const initialValue = {
    firstName: '',
    lastName: '',
    amountLessonsPerWeek: '1',
    rate: '60',
    studentPhoneNumber: '',
    parentPhoneNumber: ''
};

const AddStudents = () => {
    const classes = useStyles();
    const [dayOfWeek, setdayOfWeek] = useState(null);
    const [hour, setHour] = useState(null);
    const [studentsData, setStudentsData] = useState(initialValue);
    const { enqueueSnackbar } = useSnackbar();

    const handleDataChange = (event) => {
        setStudentsData({
            ...studentsData,
            [event.target.name]: event.target.value
        });
    };

    const dataToSend = () => {
        const {
            firstName, lastName, amountLessonsPerWeek, rate, studentPhoneNumber, parentPhoneNumber
        } = studentsData;
        const data = {
            firstName,
            lastName,
            data: {
                amountLessonsPerWeek,
                rate,
                studentPhoneNumber,
                parentPhoneNumber,
                deadline: `${dayOfWeek !== null ? dayOfWeek.label : ''} ${hour !== null ? hour : ''}`
            }
        };
        return data;
    };
    const filtredStudentsData = dataToSend();

    const handleSubmitForm = async () => {
        try {
            await axios.post(`${config.backendHost}:${config.backendPort}/students/add`, filtredStudentsData);
            enqueueSnackbar('Uczeń został dodany do bazy danych', {
                variant: 'success',
                autoHideDuration: 3000
            });
            setStudentsData(initialValue);
            setHour(null);
            setdayOfWeek(null);
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <Box className={classes.box} component='form' autoComplete='off'>
            <FormControl>
                <Grid container justifyContent='space-around' alignItems='center' rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={3}></Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            id='outlined-basic'
                            label='Imię'
                            variant='outlined'
                            fullWidth
                            required
                            name='firstName'
                            value={studentsData.firstName}
                            onChange={handleDataChange}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            id='outlined-basic'
                            label='Nazwisko'
                            variant='outlined'
                            name='lastName'
                            fullWidth
                            required
                            value={studentsData.lastName}
                            onChange={handleDataChange}
                        />
                    </Grid>
                    <Grid item sm={3}></Grid>

                    <Grid item sm={3}></Grid>
                    <Grid item xs={3} sm={2}>
                        <Autocomplete
                            disablePortal
                            id='combo-box'
                            options={daysName}
                            value={dayOfWeek}
                            onChange={(event, newValue) => {
                                setdayOfWeek(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label='Dzień tygodnia' />}
                        />
                    </Grid>
                    <Grid item xs={3} sm={2}>
                        <Autocomplete
                            disablePortal
                            id='combo-box'
                            options={timeSlots()}
                            value={hour}
                            onChange={(event, newValue) => {
                                setHour(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label='Godzina' />}
                        />
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <TextField
                            required
                            id='outlined-basic'
                            type='number'
                            label='Liczba lekcji w tygodniu'
                            variant='outlined'
                            fullWidth
                            name='amountLessonsPerWeek'
                            value={studentsData.amountLessonsPerWeek}
                            onChange={handleDataChange}

                        />
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <TextField
                            id='outlined-basic'
                            variant='outlined'
                            label='Stawka'
                            name='rate'
                            value={studentsData.rate}
                            onChange={handleDataChange}
                            fullWidth
                            required
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>zł</InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid item sm={3}></Grid>

                    <Grid item sm={3}></Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            id='outlined-basic'
                            label='Numer telefonu ucznia'
                            variant='outlined'
                            fullWidth
                            name='studentPhoneNumber'
                            value={studentsData.studentPhoneNumber}
                            onChange={handleDataChange}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            id='outlined-basic'
                            label='Numer telefonu rodzica'
                            variant='outlined'
                            fullWidth
                            name='parentPhoneNumber'
                            value={studentsData.parentPhoneNumber}
                            onChange={handleDataChange}
                        />
                    </Grid>
                    <Grid item sm={3}></Grid>
                    <Button
                        variant='contained'
                        sx={{ padding: '10px 20px', marginTop: '20px' }}
                        disableRipple
                        onClick={handleSubmitForm}
                    >
                        Dodaj
                    </Button>
                </Grid>
            </FormControl>
        </Box>
    );
};

export default AddStudents;
