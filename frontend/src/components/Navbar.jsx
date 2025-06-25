import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          MyCafe
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-indigo-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-indigo-500 transition duration-300">About</a>
          </li>
          <li>
            <a href="/menu" className="hover:text-indigo-500 transition duration-300">Menu</a>
          </li>
          <li>
            <a href="/contacts" className="hover:text-indigo-500 transition duration-300">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
