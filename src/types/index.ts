export type IUserLogin = {
    username?: string;
    password?: string;
}

export type IUser = IUserLogin & {
    id?: number;
    age?: number;
    address?: string;
    token?: string;
}

export type IAuthContextProps = {
    user?: IUser | null;
    setUser?: (payload: IUser) => void;
}

export type IAuthState = {
    token: string;
    user: IUser;
}