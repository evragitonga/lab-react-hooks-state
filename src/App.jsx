import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode,setDarkMode] = useState('Dark mode')

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])
  function addToCart(product){
    setCart([...cart,product])
  }
  // TODO: Implement state for category filtering
  const [category,setCategory] = useState("All")


  return (
    <div>
      
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle 
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select 
      value={category}
      onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={addToCart} category={category} />

      {/* TODO: Implement and render Cart component */}
      <Cart 
      cart={cart}
      setCart={setCart}/>
    </div>
  )
}

export default App
