import { lazy } from 'react';
import { ROUTE_PATH } from '../commons/constraints/routes-path';

const RegisterProject = lazy(async () => await import('../pages/Projects/Register'));
const EditProject = lazy(async () => await import('../pages/Projects/Edit'));
const ListProject = lazy(async () => await import('../pages/Projects/List'));

const project = [
    {
        path: ROUTE_PATH.project,
        component: ListProject,
        exact: true
    },
    {
        path: `${ROUTE_PATH.project}/new-project`,
        component: RegisterProject,
        exact: true
    },
    {
        path: `${ROUTE_PATH.project}/:projectId`,
        component: EditProject,
        exact: true
    }
];

export default project;