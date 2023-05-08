import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'


function Header() {

  const {cart} = useContext(CartContext)

  return (
    <div className ="header-container">
        <Link to='/'>
          <div className="logo">
            <img src="../src/assets/logo.svg" alt="" />
            </div>
            </Link>
            
        <div className="shopping-cart">
          <p>
            {
          cart.length 
          }
          </p>
          <Link to='./Checkout'><img src="../src/assets/shoppingcart.svg" alt="shopping-cart" /></Link>
          </div>
        </div>
  )
}

export default Header