import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import Cart from '../Cart/Cart';
import Clothes from '../Clothes/Clothes';
import './Home.css'

const Home = () => {
    let [clothes] = useProducts();
    let [cart, setCart] = useState([]);
    let handleCartItem = selectedItem => {
        let exists = cart.find(item => item._id === selectedItem._id);
        if (!exists) {
            let newItem = [...cart, selectedItem];
            setCart(newItem);
        }
        else{
            alert("Sorry you can't add it. Already it is abailable in cart");
        }
    }
    let removeCartItem = selectedItem => {
        let rest = cart.filter(pd => pd._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="clothes-container">
                {
                    clothes.map(cloth => <Clothes
                        key={cloth._id}
                        clothe={cloth}
                        handleCartItem={handleCartItem}
                    ></Clothes>)
                }
            </div>
            <div className="cart-container">
                <Cart removeCartItem={removeCartItem} cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Home