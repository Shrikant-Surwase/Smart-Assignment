import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: 'f00c38e0279b7bc85480c3fe775d518c',
        units: 'metric' // Specify units as metric for Celsius
    }
});

export default axiosInstance;
