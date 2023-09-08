import React from 'react';
import useProducts from '../hooks/useProducts';
import Cart from '../Cart/Cart';
import Clothes from '../Clothes/Clothes';

const Home = () => {
    let [clothes] = useProducts();
  return (
    <div>
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