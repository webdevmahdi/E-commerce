import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='menu'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/orderReview'>Order review</NavLink>
    </div>
  )
}

export default Header;