import React from 'react'
import './ProductDetails.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const {productId} = useParams()
    const [product, setProduct] = useState('')


    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(product => {
                // console.log(product.data)
                setProduct(product.data)
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
        <img src={product?.image} alt="" />
        </div>
        <div className='product-details-info'>
        <p className='desc-title'>{product?.title}</p>
        <p className='desc-price'>${product?.price}</p>
        <p className='desc'>Description</p>
        <p className='description'>{product?.description}</p>
        <p className='add-to-cart'>Add to Cart</p>
        </div>
        </div>
        </div>
  )
}

export default ProductDetails