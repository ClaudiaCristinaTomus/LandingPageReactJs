import React from 'react'
import { FaIceCream  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Header.scss";
const Header = () => {
  return (
        <header className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                <FaIceCream/>Beach Cafe
                </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/products">Recipes</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/products">Menu</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/products">Hotline</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </div>
    </header>

  )
}


export default Header