// Protected Route to check if user is logged in
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { hasValidToken } from '../utils/auth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    if (!hasValidToken()) {
        return <Navigate to="/" />;
    }

    return children;
};

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
    const location = useLocation();

    if (hasValidToken() &&(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup')) {
        return <Navigate to="/dashboard" />;
    }

    return children;
}

export  { ProtectedRoute, PublicRoute };
