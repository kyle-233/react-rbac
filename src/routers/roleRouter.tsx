import { ComponentType, lazy } from "react";
import { RouterItemProps, USER_ROLES } from ".";

const Home = lazy(() => import('../views/Home/Home'))
const PageA = lazy(() => import('../views/Home/PageA'))
const PageB = lazy(() => import('../views/Home/PageB'))

export const roleRouter: RouterItemProps<ComponentType>[] = [
    {
        path: '/',
        roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
        element: Home,
        name: 'routers.home',
        children: [
            {
                path: 'pageA',
                roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
                element: PageA,
                name: 'routers.homePageA',
                children: []
            },
            {
                path: 'pageB',
                roles: [USER_ROLES.ADMIN],
                element: PageB,
                name: 'routers.homePageB',
                children: []
            },
        ],
    },
]