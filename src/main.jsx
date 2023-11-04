import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import NavBar from './routes/NavBar/NavBar.jsx';
// import 

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar />}>
                <Route index={true} element={<App />}></Route>
                <Route index={false} element={<App />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
