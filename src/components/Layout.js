import React from 'react';
import { Outlet } from 'react-router-dom';

import '../styles.css';

export default function Index() {
    return (
        <>
    
                    <Outlet />
               
        </>
    );
}
