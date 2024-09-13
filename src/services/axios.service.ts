import axios from 'axios';

const createAxiosInstance = () => {
    return axios.create({
        timeout: 60000,
        baseURL: 'http://192.168.99.122:3000',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export const axiosInstance = createAxiosInstance();