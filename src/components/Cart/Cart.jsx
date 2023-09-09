import React from 'react';

const Cart = ({cart, removeCartItem}) => {
  return (
    <div>
       <h3>This is Cart: {cart.length}</h3>
      {
        cart.map(item =>
        <p>
          {item.name}
          <button onClick={()=> removeCartItem(item)}>X</button>
        </p>
        )
      }
    </div>
  )
}

export default Cart