import { ComponentType, ReactNode, Suspense } from "react"
import { Loading } from "../components"
import { AuthRouter } from "./AuthRouter"
import { RouterItemProps } from "."
import { commonRouter } from "./commonRouter"
import { roleRouter } from "./roleRouter"
import { useRoutes } from "react-router-dom"

const packingRouter = (routers: RouterItemProps<ComponentType>[], isRoleRouter: boolean) => {
    const newArr: RouterItemProps<ReactNode>[] = []
    routers.map((routerItem) => {
        const {path, roles, element: Element, children} = routerItem
        newArr.push({
            path,
            roles,
            element: isRoleRouter 
            ? (
                <Suspense fallback={<Loading /> }>
                    <AuthRouter roles={roles} redirce={routerItem}>
                        <Element /> 
                    </AuthRouter>
                </Suspense>
            )
            : (
                <Suspense fallback={<Loading /> }>
                    <Element />
                </Suspense>
            ),
            children: packingRouter(children, isRoleRouter)
        })
    })
    return newArr
}

export const routerMenus = [
    ...packingRouter(roleRouter, true),
    ...packingRouter(commonRouter, false)
]


export const RouterViews = () => {
    return useRoutes(routerMenus);
}

