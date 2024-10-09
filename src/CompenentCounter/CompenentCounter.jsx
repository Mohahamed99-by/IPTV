import React, { useState } from 'react'

function ComponentCounter() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter((prevState) => prevState + 1)
    }

    const decrease = () => {
            setCounter((prevState) => prevState - 1)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-6 text-center text-gray-800">{counter}</h3>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={increase}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    >
                        Increase
                    </button>
                    <button
                        type="button"
                        onClick={decrease}
                        disabled={counter === 0} // Disable when counter is 0
                        className={`px-6 py-2 font-semibold rounded-md 
        ${counter === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} 
        text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out`}
                    >
                        Decrease
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ComponentCounter