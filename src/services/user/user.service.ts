import {IUser, IUserLogin} from "../../types";
import {axiosInstance} from "../axios.service";

const PREFIX_URL = '/users';

export const apiGetUser = async () => {
    try {
        return await axiosInstance.get(`${PREFIX_URL}`)
    } catch (err) {
        throw err;
    }
};

export const apiLogin = async (payload: IUserLogin) => {
    try {
        const response = await axiosInstance.get(`${PREFIX_URL}`);
        const user = response.data.find((u: IUser) => u.username === payload.username && u.password === payload.password)
        if (user) {
            delete user.password;
            return {
                status: 200,
                data: user,
            };
        } else {
            return {
                status: 404,
                data: 'user not found'
            };
        }
    } catch (err) {
        console.log(err)
        throw err;
    }
};

export const apiLogout = async () => {
    try {
    } catch (err) {
        console.log(err)
        throw err;
    }
}