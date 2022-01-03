import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './constants/theme.js';
import HomePage from './components/Pages/HomePage/HomePage.jsx';
import Students from './components/Pages/Students/Students.jsx';
import AddStudents from './components/Pages/AddStudents/AddStudents.jsx';
import Header from './components/Pages/Header/Header.jsx';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/students' exact component={Students} />
                        <Route path='/students/add' exact component={AddStudents} />
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
