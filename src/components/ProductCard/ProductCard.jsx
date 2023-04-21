import React from 'react'
import './ProductCard.css'
import heart from '../../assets/heart.svg'

function ProductCard({products}) {
  return (
    <div className='product-cards'>
      <div className='product-img'>
        <img src={products.image} alt="" />
        </div>
        <p className='favorite-icon' >        <img src={heart}/></p>
        <div className='product-info'>
        <p className='title'>{products.title}</p>
        <p className='category'>{products.category}</p>
        <p className='price'>${products.price}</p>
        </div>
        </div>
  )
}

export default ProductCard