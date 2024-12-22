import axios from 'axios';
import { getAuthToken } from '@/services/authServices'; // Função para obter o token do localStorage

// Criação de uma instância do axios com configurações padrão
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para adicionar o token de autenticação em todas as requisições
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getAuthToken();  // Obtém o token armazenado
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  // Adiciona o token no cabeçalho
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
