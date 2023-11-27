import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const AuthRouter = ({children, roles, redirce}: {children?: any; roles: any; redirce: any}) => {
    const token = sessionStorage.getItem('token');
    const location = useLocation();
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);
    useEffect(() => {
        if(
            Object.is(
                location.pathname.replace('/', ''),
                redirce.path.replace('/', ''),
            )
        ) {
            const reds = redirce.children.length > 0 ? redirce.children[0].path : false;
            setStatus(reds);
            if(reds) {
                navigate(status as any, {replace: true});
            }
        }
    }, [location]);

    if(token) {
        return roles.indexOf(token) > -1 ? children : <Navigate to='/NotFound' />;
    } else {
        return <Navigate to='/login' />;
    }
}