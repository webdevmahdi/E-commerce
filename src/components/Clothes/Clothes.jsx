import React from 'react';
import './Clothes.css'

const Clothes = (props) => {
    let {name, picture, price} = props.clothe;
  return (
    <div className='clothes-container'>
        <img src={picture}></img>
        <h3>Name: {name}</h3>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default Clothes;