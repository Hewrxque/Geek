import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Protected from '../RouterProtected';

//PAGES
import Events from '../../pages/Events';

export default function LoginRoutes(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Protected>
                        <Events />
                    </Protected>
                }
            />
        </Routes>
    );
}
