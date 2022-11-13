import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { API_URL } from './util/constants';

//PAGES LAYOUTS
import IndexLayout from './components/Layout';

//MENUS PAGE
/* import Index from './routes/homeRoutes'; */
import Login from './routes/Login';
import Register from './routes/Register'
//import Loginpage from './pages/Login'


export default function AppRoutes(props) {
    return (
        <>
            <Routes>
                <Route path={API_URL + '/login'} element={<IndexLayout />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path={API_URL + '/register'} element={<Register />} />
                <Route path="*" element={<h1>Página não encontrada</h1>} />
            </Routes>
        </>
    );
}
