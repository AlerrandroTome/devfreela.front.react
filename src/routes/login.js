import { lazy } from 'react';
import { ROUTE_PATH } from '../commons/constraints/routes-path';

const Login = lazy(async () => await import('../pages/Login'));

const login = [
    {
        path: ROUTE_PATH.home,
        component: Login,
        exact: true
    }
];

export default login;