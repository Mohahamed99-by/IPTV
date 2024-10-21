import React, { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// Define atoms for each form field
const nameState = atom({
    key: 'nameState',
    default: '',
});

const emailState = atom({
    key: 'emailState',
    default: '',
});

const passwordState = atom({
    key: 'passwordState',
    default: '',
});

const usersState = atom({
    key: "usersState",
    default: []
})


function RegisterForm() {  // Corrected component name
    const [name, setName] = useRecoilState(nameState);
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [users, setUsers] = useRecoilState(usersState);

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(prevState => [...prevState, { name, email, password }]);

        reset()
    };

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 pr-10 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 pr-10 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                        />

                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 pr-10 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>

            </div>
            <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl'>

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
        </>
    );
}

export default RegisterForm;  // Corrected export
