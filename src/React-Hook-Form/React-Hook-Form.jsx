import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

function ReactHookForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  
  const onSubmit = (data) => {
    setUsers(prevUsers => [...prevUsers, data]);
    reset();
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input 
            type="text" 
            {...register("name", {required: 'Name is required'})} 
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {errors.name && <p className='text-red-600 mt-1'>{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2">E-mail:</label>
          <input 
            type="email" 
            {...register("email", {required: 'Email is required'})} 
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {errors.email && <p className='text-red-600 mt-1'>{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              {...register("password", {required: "Password is required"})} 
              className="w-full p-2 pr-10 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className='text-red-600 mt-1'>{errors.password.message}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add User
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">User List</h2>
      {users.length > 0 ? (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  )
}

export default ReactHookForm;