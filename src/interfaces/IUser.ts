export interface IUser {
    id: number;
    username: string;
    name: string;
    created_at?: Date;
    updated_at?: Date;
}
export interface ILogin {
    user: IUser
    token: string;
}

export interface ILoginResponse {
    ok: boolean;
    data?: ILogin;
    message: string
}

export interface ISingupResponse {
    ok: boolean;
    data?: IUser;
    message: string
}
