// Protected Route to check if user is logged in
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenExists, isTokenExpired } from '../utils/auth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    if (!tokenExists() || isTokenExpired()) {
        return <Navigate to="/" />;
    }

    return children;
};

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
    const location = useLocation();

    if (tokenExists() && !isTokenExpired() &&(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup')) {
        return <Navigate to="/dashboard" />;
    }

    return children;
}

export  { ProtectedRoute, PublicRoute };
