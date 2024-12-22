"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { loginUser } from '@/services/authServices';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário já está autenticado
    const token = localStorage.getItem('authToken');
    if (token) {
      router.push('/'); // Redireciona para a rota raiz se o usuário já estiver autenticado
    } else {
      setLoading(false); // Define o estado de carregamento como falso se não estiver autenticado
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      router.push('/'); // Redireciona para a rota raiz após o login
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  if (loading) {
    return <div>Carregando...</div>; // Tela de carregamento
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};