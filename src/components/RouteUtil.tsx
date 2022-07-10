import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props): any => {
    const navigate = useNavigate();
    const isLoggedIn: boolean = localStorage.getItem('isAuthenticated') !== null;
    console.log('auth' + localStorage.getItem('isAuthenticated'));
    useEffect(() => {
        if(!isLoggedIn) {
            navigate('/login')
        }
    }, [isLoggedIn,navigate])
    return isLoggedIn && <>{children}</>
}

