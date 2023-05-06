import React from 'react'
import './ProductCard.css'
import heart from '../../assets/heart.svg'
import { Link } from 'react-router-dom'



function ProductCard({product}) {
  return (



    <div className='product-cards'>

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