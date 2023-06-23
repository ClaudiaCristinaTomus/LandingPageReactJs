import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/" >Shop</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/products" >Recipes</Link>
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
    </div>
  )
}

export default Footer