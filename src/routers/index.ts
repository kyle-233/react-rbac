
export enum USER_ROLES {
    ADMIN = 'admin',
    TEST = 'test',
}

export type RouterItemProps<T> = {
    path: string;
    name?: string;
    roles: USER_ROLES[];
    redirect?: string;
    icon?: any;
    element: T
    children: RouterItemProps<T>[]
}

