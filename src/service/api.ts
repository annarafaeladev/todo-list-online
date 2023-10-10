import axios from "axios";
import { getUserToken } from "./utils";


export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 40000
});

// Levantar a api
export const upApi = async () => {
    try {
        await api.get("/users/api")
    } catch (error) {
        console.error("Erro ao tentar despertar api ")
    }
};


