"use client";

import { useState } from 'react';

export default function Navbar() {
  const [message, setMessage] = useState('');

  // Функция для отображения сообщения
  const showAccessDenied = () => {
    setMessage('Sie haben keinen Zugriff');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      {/* Навигация */}
      <nav className="fixed top-0 left-0 w-full text-white p-4 flex justify-center space-x-4 z-20">
        <a href="https://dulsonparfum.com" target="_blank" rel="noopener noreferrer">Dulson Parfum</a>
        <span className="cursor-pointer" onClick={showAccessDenied}>Dulson Digital</span>
        <a href="https://dulsongroup.com" target="_blank" rel="noopener noreferrer">Dulson Group</a>
        <span className="cursor-pointer" onClick={showAccessDenied}>Dulson Art</span>
        <span className="cursor-pointer" onClick={showAccessDenied}>Dulson Immobilien</span>
      </nav>

      {/* Сообщение "у вас нет доступа" */}
      {message && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded">
          {message}
        </div>
      )}
    </div>
  );
}