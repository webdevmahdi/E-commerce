import React from 'react';
import './Clothes.css'

const Clothes = ({clothe, handleCartItem}) => {
    let {name, picture, price} = clothe;
  return (
    <div className='clothe-container'>
        <img src={picture}></img>
        <p>Price: ${price}</p>
        <h3>Name: {name}</h3>
        <button onClick={()=> handleCartItem(clothe)}>Add to Cart</button>
    </div>
  )
}

export default Clothes;