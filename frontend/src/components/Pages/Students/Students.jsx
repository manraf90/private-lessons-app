import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import {
    DataGrid,
    GridFooterContainer,
    GridFooter
} from '@mui/x-data-grid';
import axios from 'axios';
import config from '../../../config/index.js';

const useStyles = makeStyles((theme) => ({
    datagrid: {
        width: '100%'
    },
    main: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
        height: '80vh'
    },
    footerSum: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
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
        field: 'studentPhoneNumber',
        headerName: 'Numer telefonu ucznia',
        flex: 1
    },
    {
        field: 'parentPhoneNumber',
        headerName: 'Numer telefonu rodzica',
        flex: 1
    }
];

const modifiedPhoneNumber = (phoneNumber) => {
    const modifiedNumber = phoneNumber !== 'undefined' ? `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6, 9)}` : null;
    return modifiedNumber;
};

const getFiltredData = (students) => {
    const studentsData = students.map(({
        _id, firstName, lastName, data
    }) => ({
        id: _id,
        firstName,
        lastName,
        deadline: data.deadline,
        amountLessonsPerWeek: data.amountLessonsPerWeek,
        rate: data.rate,
        studentPhoneNumber: modifiedPhoneNumber(String(data.studentPhoneNumber)),
        parentPhoneNumber: modifiedPhoneNumber(String(data.parentPhoneNumber))
    }));
    return studentsData;
};

const Students = () => {
    const classes = useStyles();
    const [filtredStudentsData, setFiltredStudentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(0);
    const [height, setHeight] = useState('');
    const [sortModel, setSortModel] = useState([
        {
            field: 'deadline',
            sort: 'asc'
        }
    ]);

    const getMoneyPerWeek = () => {
        let sumOfMoney = 0;
        let sumOfLessons = 0;
        filtredStudentsData.forEach((item) => {
            sumOfLessons += Number(item.amountLessonsPerWeek);
            sumOfMoney += Number(item.amountLessonsPerWeek) * Number(item.rate);
        });
        return [sumOfMoney, sumOfLessons];
    };

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
        <div className={classes.main} style={{ height: `calc(100vh - ${height}px)` }}>
            <CssBaseline />
            <DataGrid
                paginationMode='server'
                rows={filtredStudentsData}
                columns={columns}
                loading={isLoading}
                autoHeight
                cursor='pointer'
                pagination
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
                pageSize={pageSize}
                page={page}
                onPageChange={(selectedPage) => setPage(selectedPage)}
                onPageSizeChange={(params) => {
                    console.log(params);
                    return setPageSize(params);
                }}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                components={{
                    Footer: () => (
                        <GridFooterContainer>
                            <div className={classes.footerSum}>
                                Liczba lekcji w tygodniu: &nbsp;
                                {getMoneyPerWeek()[1]} h &nbsp; &nbsp;
                                Tygodniowo: &nbsp;
                                {getMoneyPerWeek()[0]} zł &nbsp; &nbsp;
                                Miesięcznie: &nbsp;
                                {getMoneyPerWeek()[0] * 4} zł
                            </div>
                            <GridFooter />
                        </GridFooterContainer>
                    )
                }}
            />
        </div>
    );
};

export default Students;
