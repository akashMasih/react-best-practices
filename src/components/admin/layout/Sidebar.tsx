import React from 'react'

function Sidebar() {
    return (
        <nav className="bg-gray-200 w-64 p-4 hidden md:block -translate-x-full transition-transform duration-300 transform">
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-300">Home</a>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-300">Dashboard</a>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-300">Settings</a>
            {/* Add more links as needed */}
        </nav>

    )
}

export default Sidebar