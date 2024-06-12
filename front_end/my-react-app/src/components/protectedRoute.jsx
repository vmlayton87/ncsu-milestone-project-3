// Protected Route to check if user is logged in
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../utils/auth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const token = getToken();

    if (!token) {
        return <Navigate to="/" />;
    }

    return children;
};

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
    const token = getToken();
    const location = useLocation();

    if (token &&(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup')) {
        return <Navigate to="/dashboard" />;
    }

    return children;
}

export  { ProtectedRoute, PublicRoute };
