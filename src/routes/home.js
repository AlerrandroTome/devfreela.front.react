import { lazy } from 'react';
import { ROUTE_PATH } from '../commons/constraints/routes-path';

const Home = lazy(async () => await import('../pages/Home'));

const home = [
    {
        path: ROUTE_PATH.home,
        component: Home,
        exact: true
    }
];

export default home;