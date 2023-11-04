import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import NavBar from './routes/NavBar/NavBar.jsx';
import CreatePostPage from './components/CreatePostPage/CreatePostPage.jsx';
import PostPage from './components/PostPage/PostPage.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar />}>
                <Route index={true} element={<App />}></Route>
                <Route index={false} element={<CreatePostPage />} path='/createPost'></Route>
                <Route index={false} element={<PostPage />} path="/post/:id"></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
