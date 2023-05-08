import React from 'react'
import './ProductDetails.css'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

function ProductDetails() {

    const {productId} = useParams()
    const [productDetails, setProductDetails] = useState('')

    const {cart, addToCart, removeCart} = useContext(CartContext)

    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                // console.log(product.data)
                setProductDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        },[]
    )
    
  return (
<div className='main-details-container'>
    <div className='details-container'>
        <div className='product-details-img'>
        <img src={productDetails?.image} alt="" />
        </div>
        <div className='product-details-info'>
        <p className='desc-title'>{productDetails?.title}</p>
        <p className='desc-price'>${productDetails?.price}</p>
        <p className='desc'>Description</p>
        <p className='description'>{productDetails?.description}</p>
        <p className='add-to-cart'>
        {cart.find((item) => item.id === productDetails.id) ? (
            <p onClick={() => removeCart(productDetails.id)}>Remove from Cart</p>
          ) : (
            <p onClick={() => addToCart(productDetails)}>Add to Cart</p>
          )}
        </p>

        {/* <p className='add-to-cart'>Add to Cart</p> */}

        </div>
        </div>
        </div>
  )
  
}

export default ProductDetails