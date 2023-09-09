import React from 'react';
import './Clothes.css'

const Clothes = (props) => {
    let {name, picture, price} = props.clothe;
  return (
    <div className='clothe-container'>
        <img src={picture}></img>
        <p>Price: ${price}</p>
        <h3>Name: {name}</h3>
        <button>Add to Cart</button>
    </div>
  )
}

export default Clothes;