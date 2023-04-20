import React from 'react'
import './ProductCard.css'

function ProductCard({products}) {
  return (
    <div className='product-cards'>
        <img src={products.image} alt="" />
        <p>{products.title}</p>
        <p>{products.price}</p>
        </div>
  )
}

export default ProductCard