import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface OwnProps {
    isAuth: boolean;
}

const ProtectedRoute: React.FC<OwnProps> = ({ isAuth }) => {

    return !isAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute;