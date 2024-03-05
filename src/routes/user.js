import { lazy } from 'react';
import { ROUTE_PATH } from '../commons/constraints/routes-path';

const RegisterUser = lazy(async () => await import('../pages/Users/Register'));

const user = [
    {
        path: `${ROUTE_PATH.user}/new-user`,
        component: RegisterUser,
        exact: true
    }
];

export default user;