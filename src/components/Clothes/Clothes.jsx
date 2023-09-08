import React from 'react'

const Clothes = (props) => {
    let {name, picture, price} = props.clothe;
  return (
    <div>
        <h1>Name: {name}</h1>
        <img src={picture}></img>
        <h5>Price: ${price}</h5>
    </div>
  )
}

export default Clothes