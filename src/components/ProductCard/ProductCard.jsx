import React from 'react'
import './ProductCard.css'
import heart from '../../assets/heart.svg'
import { Link } from 'react-router-dom'

function ProductCard({products}) {
  return (
    <div className='product-cards'>

        <div className='product-img'>
          <img src={products.image} alt="" />
        </div>

        <div className='product-info'>
        <p className='title'>{products.title}</p>
        <p className='category'>{products.category}</p>
        <p className='price'>${products.price}</p>
        <Link to={`/details/${products.id}`} className='detail-link'>See Details</Link>
        </div>

        </div>
  )
}

export default ProductCard