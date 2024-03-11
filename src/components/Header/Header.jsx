import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoComponent } from '../../assets/images/logo.svg' 
import './styles.css';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '../../commons/constraints/routes-path';

function Header() {
    const location = useLocation();
    const [hasUser, setHasUser] = useState();

    useEffect(() => {
        debugger;
        setHasUser(location.pathname !== ROUTE_PATH.home && location.pathname !== `${ROUTE_PATH}/new-user`);
    },[location])

    return (
        <div className={`topnav ${hasUser ? '-has-user' : ''}`}>
            <div></div>
            <LogoComponent />
            {hasUser && (
                <UserInfo />
            )}
        </div>
    );
}

export default Header;