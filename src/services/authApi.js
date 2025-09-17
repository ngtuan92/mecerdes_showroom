import axios from "axios";

export const API_URL = "http://localhost:9999";

const login = async ({ username, password }) => {
    try {
        const response = await axios.get(`${API_URL}/users`, {
            params: { username, password }
        });
        if (response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
        }
    } catch (error) {
        throw error;
    }
};

const signup = async(username, full_name,phone, email, address, password) => {
    try {
        const response = await axios.post(`${API_URL}/users`, {
            username,
            full_name,
            phone,
            email,
            address,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}   
const authApi = {
    login,
};

export default authApi;
