import React from 'react';

const Cart = ({cart, removeCartItem}) => {
  let comand;
  if(cart.length > 3){
    comand = <div>
      <h1>hello uncle</h1>
    </div>
  }
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
      {comand}
      {
        cart.length < 3 ? <p>You can add more</p> : <p>Oh! Greate</p>
      }
    </div>
  )
}

export default Cart