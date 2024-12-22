"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { logoutUser } from '@/services/authServices';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário já está autenticado
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/auth/login'); // Redireciona para a tela de login se não estiver autenticado
    } else {
      setLoading(false); // Define o estado de carregamento como falso se estiver autenticado
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push('/auth/login'); // Redireciona para a tela de login após o logout
  };

  if (loading) {
    return <div>Carregando...</div>; // Tela de carregamento
  }

  return (
    <div>
      <h2>Bem-vindo à Home</h2>
      {/* Conteúdo da página inicial */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};