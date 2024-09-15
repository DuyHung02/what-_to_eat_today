type Gender = 'male' | 'female' | 'other';

export type IUserLogin = {
    username?: string;
    password?: string;
}

export type IUser = IUserLogin & {
    id?: number;
    birthday?: number;
    phone_number?: string;
    gender?: Gender;
    address?: string;
    token?: string;
}

export type IAuthState = {
    token: string;
    user: IUser;
}

export type IFormProfile = IUser;