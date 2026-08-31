import React from 'react'

const Cart = ({cart,setCart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.map((item) => (<li key={item.id}>
          `{item.name} is in your cart for {item.price}`
          </li>))}
      </ul>
    </div>
  )
}

export default Cart
