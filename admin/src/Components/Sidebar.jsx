import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-blue-700 to-blue-400 text-white shadow-lg flex flex-col p-6 fixed">
      <h2 className="text-3xl font-bold mb-10 tracking-wide text-center">☕ Cafe Admin</h2>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/"
            className={`block px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600 hover:text-yellow-300 font-medium text-lg ${location.pathname === '/' ? 'bg-blue-600 text-yellow-300' : ''}`}
          >
            Category Menu
          </Link>
        </li>
        <li>
          <Link
            to="/employee"
            className={`block px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600 hover:text-yellow-300 font-medium text-lg ${location.pathname === '/employee' ? 'bg-blue-600 text-yellow-300' : ''}`}
          >
            Employee
          </Link>
        </li>
      </ul>
      <div className="mt-auto text-xs text-blue-200 text-center pt-10">© 2025 Cafe Admin</div>
    </div>
  )
}

export default Sidebar
