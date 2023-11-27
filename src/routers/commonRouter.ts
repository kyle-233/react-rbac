import { lazy } from "react";
import { USER_ROLES } from ".";

const Login = lazy(() => import('../views/Login/Login'))
const NotFound = lazy(() => import('../views/NotFound/NotFound'))


export const commonRouter = [
    {
        path: '*',
        roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
        element: NotFound,
        name: 'routers.notFound',
        children: [],
    },
    {
        path: '/login',
        roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
        element: Login,
        name: 'routers.login',
        children: [],
    },

]