import axios from 'axios';

const createAxiosInstance = () => {
    return axios.create({
        timeout: 60000,
        baseURL: 'http://192.168.1.167:3000',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export const axiosInstance = createAxiosInstance();