import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Protected from '../RouterProtected';

//PAGES

import Subscription from '../../pages/Subscription';

export default function RegisterRoutes(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Protected>
                        <Subscription />
                    </Protected>
                }
            />
        </Routes>
    );
}
