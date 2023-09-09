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
      {
        cart.length > 2 && <p>Oh! You are doing good</p>
      }
      {
        cart.length === 3 || <h1>Hellllo!</h1>
      }
    </div>
  )
}

export default Cart