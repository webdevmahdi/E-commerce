import React from 'react';
import useProducts from '../hooks/useProducts';
import Cart from '../Cart/Cart';
import Clothes from '../Clothes/Clothes';
import './Home.css'

const Home = () => {
    let [clothes] = useProducts();
  return (
    <div className='home-container'>
        <div className="clothes-container">
            {
                clothes.map(cloth => <Clothes 
                    key={cloth._id}
                    clothe={cloth}
                ></Clothes>)
            }
        </div>
        <div className="cart-container">
            <Cart></Cart>
        </div>
    </div>
  )
}

export default Home