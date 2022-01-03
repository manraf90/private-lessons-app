import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import config from '../../../config/index.js';

const useStyles = makeStyles(() => ({
    datagrid: {
        width: '100%'
    }
}));

const columns = [
    {
        field: 'firstName',
        headerName: 'Imię',
        flex: 1
    },
    {
        field: 'lastName',
        headerName: 'Nazwisko',
        flex: 1
    },
    {
        field: 'deadline',
        headerName: 'Termin',
        flex: 1
    },
    {
        field: 'class',
        headerName: 'Klasa',
        flex: 1
    },
    {
        field: 'amountLessonsPerWeek',
        headerName: 'Ilość lekcji',
        flex: 1
    },
    {
        field: 'rate',
        headerName: 'Stawka',
        flex: 1
    },
    {
        field: 'phoneNumber',
        headerName: 'Numer telefonu',
        flex: 1
    }
];

const getFiltredData = (students) => {
    const data = students.map((student) => ({
        id: student._id,
        firstName: student.firstName,
        lastName: student.lastName,
        deadline: student.deadline,
        class: student.class,
        amountLessonsPerWeek: student.amountLessonsPerWeek,
        rate: student.rate,
        phoneNumber: student.phoneNumber
    }));
    return data;
};

const Students = () => {
    const classes = useStyles();
    const [filtredStudentsData, setFiltredStudentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageSize, setPageSize] = useState(5);
    const [height, setHeight] = useState('');

    useEffect(() => {
        const headerHeight = document.querySelector('.MuiPaper-root') !== null ? (
            document.querySelector('.MuiPaper-root').getBoundingClientRect().height
        ) : (
            '64'
        );
        setHeight(String(headerHeight));
    }, []);

    useEffect(async () => {
        try {
            const response = await axios.get(`${config.backendHost}:${config.backendPort}/students`);
            const studentsInfo = getFiltredData(response.data);
            setFiltredStudentsData(studentsInfo);
            setIsLoading(false);
        } catch (error) {
            throw new Error(error);
        }
    }, []);

    return (
        <div className={classes.datagrid} style={{ height: `calc(100vh - ${height}px)` }}>
            <CssBaseline />
            <DataGrid
                paginationMode='server'
                rows={filtredStudentsData}
                columns={columns}
                loading={isLoading}
                autoHeight
                cursor='pointer'
                pagination
                rowsPerPageOptions={[5, 10, 20]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
        </div>
    );
};

export default Students;
