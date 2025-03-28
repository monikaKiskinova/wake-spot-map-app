import request from "../utils/request"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        return await request.post(`${baseUrl}/login`, { email, password });
    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = async (email, username, password) => {
        return await request.post(`${baseUrl}/register`, { email, username, password });
    }

    return {
        register,
    }
}