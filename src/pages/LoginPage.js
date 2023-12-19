import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login Page</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
