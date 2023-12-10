import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Welcome to AICTE Portal</h2>
      <p className="text-lg mb-8">Choose an option:</p>
      <div className="space-y-4">
        <Link
          to="/loginPage"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/registerPage"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
