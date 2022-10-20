import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const CATEGORY_API = `${API_BASE}/category`;

export const getCategoryIdByName = async (name) => {
    const response = await axios.get(`${CATEGORY_API}/name/${name}`)
    return response.data;
};

export const getAllBrands = async (cid) => {
    const response = await axios.get(`${CATEGORY_API}/brands/${cid}`)
    return response.data;
}

export const addProductCategory = async (productCategory) => {
    const response = await axios.post(`${CATEGORY_API}/productCategory`, productCategory)
    return response.data;
}



