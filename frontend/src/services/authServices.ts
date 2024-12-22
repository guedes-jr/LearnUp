import axiosInstance from './axiosInstance';

export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

interface LoginData {
  username: string;
  password: string;
}

export const loginUser = async ({ username, password }: LoginData): Promise<string> => {
  try {
    const response = await axiosInstance.post('/login/', { username, password });
    const { token } = response.data;
    // Salva o token no localStorage
    localStorage.setItem('authToken', token);
    return token;
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.response?.data || error.message);
    throw error;
  }
};

export const logoutUser = (): void => {
  localStorage.removeItem('authToken');
};