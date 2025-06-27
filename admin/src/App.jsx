import React from 'react'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import CataMenu from './pages/CataMenu'
import Employee from './pages/Employee'

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">
        <Routes>
          <Route path="/" element={<CataMenu />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
