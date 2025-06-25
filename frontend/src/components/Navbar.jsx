import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* navigate through the pages */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
