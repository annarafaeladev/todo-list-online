import { AxiosResponse } from "axios";
import { api } from "./api"
import { REQUEST_ERROR } from "../constants/erros";


interface ResponseCustom {
    ok: boolean;
    data: any;
    message: string
}

// Levantar a api
const upApi = async () => {
    try {
        await api.get("/users/api")
    } catch (error) {
        console.error("Erro ao tentar despertar api ")
    }
};


const signup = async (username: string, password: string, name: string): Promise<ResponseCustom> => {
    try {
        const response: AxiosResponse | void = await api.post("/users", {
            username,
            password,
            name,
        }).then(response => response)
            .catch(error => {
                if (error.code === 'ECONNABORTED') {
                    upApi();
                } else {
                    console.log(error.message);
                }
            });


        return {
            data: response?.data ?? {},
            ok: response?.status === 200,
            message: response?.data?.message ?? response?.statusText ?? ''
        }
    } catch (error) {
        return {
            ok: false,
            data: {},
            message: REQUEST_ERROR,
        };
    }
};

const login = async (username: string, password: string): Promise<ResponseCustom> => {
    try {
        const response: AxiosResponse | void = await api.post("/login", {
            username,
            password
        }).then(response => response)
            .catch(async error => {
                if (error.code === 'ECONNABORTED') {
                    await upApi();
                } else {
                    console.log(error.message);
                }
            });


        return {
            data: response?.data ?? {},
            ok: response?.status === 200,
            message: response?.data?.message ?? response?.statusText ?? ''
        }


    } catch (error) {
        return {
            ok: false,
            data: {},
            message: REQUEST_ERROR
        }
    }
}

export default {
    signup,
    login
}