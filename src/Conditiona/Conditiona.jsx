import React, { useState } from 'react';

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Conditional Rendering Example</h2>
      {isLoggedIn ? (
        <div className="space-y-4">
          <p className="text-green-600 font-semibold">Welcome, User! You are logged in.</p>
          <button 
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">Please log in to access your account.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Conditional;