import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const PRODUCT_API = `${API_BASE}/product`;

export const addItem = async (product) => { 
    const uid = product.sellerID;
    const response = await axios.post(`${PRODUCT_API}/${uid}`, product);
    return response.data;
};

export const findItemById = async (pid) => {
    const response = await axios.post(`${PRODUCT_API}/${pid}`);
    return response.data;
}

export const updateProduct = async (pid, product) => {
    const response = await axios.put(`${PRODUCT_API}/${pid}`, product);
    return response.data;
}