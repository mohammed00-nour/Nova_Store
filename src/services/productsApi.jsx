import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products?limit=12");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`https://dummyjson.com/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};

export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.patch(`https://dummyjson.com/products/${productId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error editing product:", error);
        throw error;
    }
};

export const addProduct = async (newProduct) => {
    try {
        const response = await axios.post("https://dummyjson.com/products/add", newProduct);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};

