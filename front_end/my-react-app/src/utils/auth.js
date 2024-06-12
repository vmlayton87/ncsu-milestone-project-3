//Retrieve token from local storage
export const getToken = () => {
    return localStorage.getItem('jwt_token');
}
