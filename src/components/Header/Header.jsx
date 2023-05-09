import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import {RiShoppingCartLine} from 'react-icons/ri'

function Header() {

  const {cart} = useContext(CartContext)

  return (
    <div className ="header-container">
        <Link to='/'>
          <div className="logo">
            <h2 className='store-name'>Fake Store</h2>
            </div>
            </Link>
            
        <div className="shopping-cart">
          <p>
            {
          cart.length 
          }
          </p>
          <Link to='./Checkout'>
            <RiShoppingCartLine className='cart-icon'/> 
            </Link>
          </div>

        </div>
  )
}

export default Header