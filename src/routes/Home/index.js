import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Protected from '../RouterProtected';

//PAGES
import Home from '../../pages/Home';

export default function LoginRoutes(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Protected>
                        <Home />
                    </Protected>
                }
            />
        </Routes>
    );
}
