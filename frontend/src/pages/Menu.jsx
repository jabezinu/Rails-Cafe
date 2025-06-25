import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Menu = () => {
  const [menus, setMenus] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/menus')
      .then(res => {
        setMenus(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch menu data')
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            <strong>{menu.name}</strong> - ${menu.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
