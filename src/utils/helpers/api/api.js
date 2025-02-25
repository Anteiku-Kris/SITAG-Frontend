import axios from "axios";

const API_BASE_URL = "tengo que revisar el github";

export const api = axios.create({
    baseURL : API_BASE_URL,
    headers: {
        "Content-Type":"application/json",
    }
});

api.interceptors.response.use( response => response, (error) => {
    console.error("Error al consumir la Api:", error.response?.data || error.message);
    return Promise.reject(error);
})