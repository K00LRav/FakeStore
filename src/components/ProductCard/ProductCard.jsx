import React, { useContext, useState, useEffect } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CartContext } from '../../contexts/CartContext';



function ProductCard({product}) {


    //use global state 
    const {cart, addToCart, removeCart} = useContext(CartContext)

    //to test if the heart button works properly
    // const isaddedToCart = true;

    // stores the default state
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(
      ()=>{
        //is this added to the cart?
        //setIsFavorite(cart.find(item=>item.id === product.id))
        console.log(product.id)
        //return the element if found, that is true
        //returns undefined if not, that is false
      },[cart]
      )

    return (
    <div className='product-cards'>
      <div className="heart-container">
        {
          isFavorite?
        <FaHeart className='heart-icon' onClick={()=> removeCart(product.id)}/>
        :
        <FaRegHeart className='heart-icon'onClick={()=> addToCart(product)}/>
        }
        </div>
        <div className='product-img'>
          
          <Link to={`/details/${product.id}`} className='detail-link'><img src={product.image} alt="" /></Link>
        </div>
        <div className='product-info'>
        <p className='title'>{product.title}</p>
        <p className='category'>{product.category}</p>
        <p className='price'>${product.price}</p>
        </div>

        </div>
  )
}

export default ProductCard