import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import NavBar from './routes/NavBar/NavBar.jsx';
import CreatePostPage from './components/PageView/CreatePostPage/CreatePostPage.jsx';
import UpdatePostPage from './components/PageView/UpdatePostPage/UpdatePostPage.jsx';
import DetailPostPage from './components/DetailPostPage/PostPage.jsx';
import { PostContextProvider } from './Context/PostContextProvider.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <PostContextProvider>
                <Routes>
                    <Route path='/' element={<NavBar />}>
                        <Route index={true} element={<App />}></Route>
                        <Route index={false} element={<CreatePostPage />} path='/createPost'></Route>
                        <Route index={false} element={<UpdatePostPage />} path='/updatePost/:id'></Route>
                        <Route index={false} element={<DetailPostPage />} path="/post/:id"></Route>
                    </Route>
                </Routes>
            </PostContextProvider>
        </BrowserRouter>
    </StrictMode>
);
