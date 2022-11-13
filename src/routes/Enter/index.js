import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Protected from '../RouterProtected';

//PAGES
import Enter from '../../pages/Enter';

export default function EnterRoutes(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Protected>
                        <Enter />
                    </Protected>
                }
            />
        </Routes>
    );
}
