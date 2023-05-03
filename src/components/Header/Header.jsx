import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className ="header-container">
        <a href='/'><div className="logo"><img src="./src/assets/logo.svg" alt="" /></div></a>
        <div className="shopping-cart">
          <p>1</p>
          <img src="./src/assets/shoppingcart.svg" alt="shopping-cart" /></div>
        </div>
  )
}

export default Header