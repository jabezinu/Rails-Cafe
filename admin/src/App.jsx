import React from 'react'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import CataMenu from './pages/CataMenu'
import Employee from './pages/Employee'

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<CataMenu />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </div>
  )
}

export default App
