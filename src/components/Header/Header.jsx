import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'


function Header() {

  const {cart} = useContext(CartContext)

  return (
    <div className ="header-container">
        <a href='/'><div className="logo"><img src="./src/assets/logo.svg" alt="" /></div></a>
        <div className="shopping-cart">
          <p>
            {
          cart.length 
          }
          </p>
          <Link to='./CheckOut'><img src="./src/assets/shoppingcart.svg" alt="shopping-cart" /></Link>
          </div>
        </div>
  )
}

export default Header