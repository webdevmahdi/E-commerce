import React from 'react';
import useProducts from '../hooks/useProducts';
import Cart from '../Cart/Cart';

const Home = () => {
    let [clothes] = useProducts();
  return (
    <div>
        <div className="clothes-container">
            
        </div>
        <div className="cart-container">
            <Cart></Cart>
        </div>
    </div>
  )
}

export default Home