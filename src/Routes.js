import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { API_URL } from './util/constants';

//PAGES LAYOUTS
import IndexLayout from './components/Layout';

//MENUS PAGE
/* import Index from './routes/homeRoutes'; */
import Login from './routes/Login';
import Register from './routes/Register';
import Enter from './routes/Enter';
import Home from './pages/Home';
import Subscription from './pages/Subscription';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function AppRoutes(props) {
    return (
        <>
            <Routes>
                <Route path={API_URL + '/'} element={<IndexLayout />}>
                    <Route index element={<Enter />} />
                </Route>
                <Route path={API_URL + '/login'} element={<IndexLayout />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path={API_URL + '/enter'} element={<IndexLayout />}>
                    <Route index element={<Enter />} />
                </Route>

                <Route path={API_URL + '/home'} element={<IndexLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path={API_URL + '/subscription'} element={<Subscription />} />
                <Route path={API_URL + '/register'} element={<Register />} />
                <Route path="*" element={<h1>Página não encontrada</h1>} />
            </Routes>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
