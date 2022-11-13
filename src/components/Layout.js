import React from 'react';
import { Outlet } from 'react-router-dom';

import '../styles.css';

export default function Index() {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
