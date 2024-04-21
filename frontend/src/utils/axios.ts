import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.PROD ? '' : 'http://localhost:8123'
})

export default axiosInstance;