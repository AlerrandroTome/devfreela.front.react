import React from 'react';
import Header from '../../components/Header';

function AppLayout({ children }) {
    return (
        <div className="min-h-100v">
            <Header />
            {children}
        </div>
    );
};

export default AppLayout;