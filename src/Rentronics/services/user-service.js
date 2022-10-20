import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const USER_API = `${API_BASE}/users`;

export const findAllUsers = async () => {
    const response = await axios.get(USER_API);
    const users = response.data;
    return users;
};

export const findUserById = async (uid) => {
    const response = await axios.get(`${USER_API}/${uid}`)
    return response.data;
};

export const findUsersByEmail = async (email) => {
    const response = await axios.get(`${USER_API}/email/${email}`)
    return response.data;
};

export const findUserByCredentials = async (credentials) => {
    const response = await axios.post(`${USER_API}/credentials`, credentials);
    return response.data;
};


export const createUser = async (user) => {
    const response = await axios.post(USER_API, user);
    return response.data;
};

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USER_API}/${uid}`)
    return response.data;
};

export const updateUser = async (uid, user) => {
    const response = await axios.put(`${USER_API}/${uid}`, user);
    return response.data;
};