import { AxiosResponse } from "axios";
import { api, upApi } from "./api"
import { REQUEST_ERROR, REQUEST_TOKEN } from "../constants/erros";
import { getUserToken } from "./utils";


interface ResponseCustom {
    ok: boolean;
    data: any;
    message: string
}

interface newTask {
    title: string;
    description?: string;
    categoryId?: number;
}

interface updateTask {
    title: string;
    description: string;
    id: number
}


const create = async (body: newTask): Promise<ResponseCustom> => {
    try {
        const token = getUserToken();

        if (!token) {
            return {
                ok: false,
                data: {},
                message: REQUEST_TOKEN,
            };
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response: AxiosResponse | void = await api.post("/tasks", body).then(response => response)
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

const list = async (): Promise<ResponseCustom> => {
    try {
        const token: string | null = getUserToken()

        if (!token) {
            return {
                ok: false,
                data: {},
                message: REQUEST_TOKEN,
            };
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response: AxiosResponse | void = await api.get("/tasks").then(response => response)
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

const update = async (body: updateTask): Promise<ResponseCustom> => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            return {
                ok: false,
                data: {},
                message: REQUEST_TOKEN,
            };
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response: AxiosResponse | void = await api.put("/tasks", body).then(response => response)
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

const remove = async (id: number): Promise<ResponseCustom> => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            return {
                ok: false,
                data: {},
                message: REQUEST_TOKEN,
            };
        }
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response: AxiosResponse | void = await api.delete(`/tasks/${id}`).then(response => response)
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



export default {
    create,
    update,
    // delete
}