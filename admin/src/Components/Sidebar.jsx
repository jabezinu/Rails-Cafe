import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <ul>
        <li><Link to="/">Category Menu</Link></li>
        <li><Link to="/employee">Employee</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
