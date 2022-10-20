import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const api = axios.create({withCredentials:true});

export const register = async (user) => {
    const response = await api.post(`${API_BASE}/register`, user);
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${API_BASE}/profile`);
    return response.data;
}

export const login = async (email, password) => {
    const response = await api.post(`${API_BASE}/login`, {email, password});
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${API_BASE}/logout`);
    return response.data;
}
