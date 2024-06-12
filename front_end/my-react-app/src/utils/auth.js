import { jwtDecode } from 'jwt-decode';

//Retrieve token from local storage
export const getToken = () => {
    return localStorage.getItem('jwt_token');
}

// Check if token exists
export const tokenExists = () => {
    return getToken() !== null;
}

// Check if token is expired
export const isTokenExpired = () => {
    const token = getToken();
    // Token doesn't exist, consider it expired
    if (!token) return true; 

    // Decode the token to get expiration time
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; 
    return decodedToken.exp < currentTime;
}
