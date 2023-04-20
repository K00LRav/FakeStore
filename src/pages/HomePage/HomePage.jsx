import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function HomePage() {

//this code allows to store the api data in a useState array...
const [products, setProducts] =useState([])
const [categories, setCategories] =useState([])

//code to get api data
    useEffect(
        ()=>{
            //this is too call the api to get the products
            axios.get('https://fakestoreapi.com/products')
            .then(result=>{
                //this code stores the data
                console.log(result)
                setProducts(result.data)
            })
            .catch(err => console.log(err))
            
            //call to get api category
            axios.get('https://fakestoreapi.com/products/categories')
            .then(category=>{
                //this shows the category in console.log
                // console.log(category.data)

                //this stores the categoru in useState
                setCategories(category.data)
            })
            .catch(categoryErr => console.log(categoryErr))


        },[]
    )

  return (
    <div className='homepage-container'>
        <div className="category-container">
            {
                categories.map(item=> <button>{item}</button>)
            }
        </div>

        <div className="products-container">
        {
        products.map(product=><ProductCard key={product.id} products={product}/>)
        }
        </div>
   
     </div>
  )
}

export default HomePage