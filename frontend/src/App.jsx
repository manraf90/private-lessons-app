import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage.jsx';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
