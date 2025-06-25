import React, { useEffect, useState } from 'react'
import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL

const Menu = () => {
  const [menus, setMenus] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Promise.all([
      axios.get(`${backendUrl}/menus`),
      axios.get(`${backendUrl}/categories`)
    ])
      .then(([menusRes, categoriesRes]) => {
        setMenus(menusRes.data)
        setCategories(categoriesRes.data)
        setSelectedCategory(categoriesRes.data[0]?.id || null)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch menu or category data')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-center py-8 text-lg font-semibold">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500 font-semibold">{error}</div>

  // Filter menus by selected category
  const filteredMenus = selectedCategory
    ? menus.filter(menu => menu.category_id === selectedCategory)
    : menus

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-center text-3xl mb-8 font-bold text-gray-800">Menu & Categories</h2>
      <div className="flex gap-4 justify-center mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-200 shadow-sm border focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedCategory === cat.id ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-100'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filteredMenus.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">No menu items in this category.</div>
        ) : (
          filteredMenus.map(menu => (
            <div key={menu.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-md flex flex-col min-h-[180px] relative">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{menu.name}</h3>
              {menu.description && <p className="text-gray-600 mb-3">{menu.description}</p>}
              <div className="mt-auto font-bold text-green-600 text-lg">
                ${menu.price}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Menu
