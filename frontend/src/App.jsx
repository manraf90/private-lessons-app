import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './constants/theme.js';
import HomePage from './components/Pages/HomePage/HomePage.jsx';
import Students from './components/Pages/Students/Students.jsx';
import Header from './components/Pages/Header/Header.jsx';

function App() {
    return (
        <div>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/students' exact component={Students} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
