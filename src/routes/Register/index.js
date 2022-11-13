import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Protected from '../RouterProtected';

//PAGES
import Register from '../../pages/Registration';

export default function RegisterRoutes(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Protected>
                        <Register />
                    </Protected>
                }
            />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
    );
}
