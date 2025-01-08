import axios from 'axios';
function setupAxios() {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.timeout = 10000; // Thời gian chờ request (ms)
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.Accept = 'application/json';
    // Add interceptor for request
    axios.interceptors.request.use(
        (config) => {
            // Add token to request header
            // const token = localStorage.getItem('token');
            // if (token) {
            //     config.headers.Authorization = `Bearer ${token}`;
            // }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    // Add interceptor for response
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                // Remove token from store and redirect to login page
                // localStorage.removeItem('token');
                // window.location.href = '/login';
                console.error('Unauthorized');
            }
            return Promise.reject(error);
        }
    );
}
export default setupAxios;
