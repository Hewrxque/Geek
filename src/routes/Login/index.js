import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Protected from '../RouterProtected';

//PAGES
import Login from '../../pages/Login';

export default function LoginRoutes(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Protected>
                        <Login />
                    </Protected>
                }
            />
        </Routes>
    );
}
