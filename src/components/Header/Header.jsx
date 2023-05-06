import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className ="header-container">
        <a href='/'><div className="logo"><img src="./src/assets/logo.svg" alt="" /></div></a>
        <div className="shopping-cart">
          <p>1</p>
          <Link to='./CheckOut'><img src="./src/assets/shoppingcart.svg" alt="shopping-cart" /></Link>
          </div>
        </div>
  )
}

export default Header