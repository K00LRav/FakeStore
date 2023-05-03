import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductDetails from '../ProductDetails/ProductDetails'
import { Link } from 'react-router-dom'

function HomePage() {

//this code allows to store the api data in a useState array...
const [products, setProducts] =useState([])
const [categories, setCategories] =useState([])
const [category, setCategory] =useState('')

//code to get api data
    useEffect(
        ()=>{
            //this is too call the api to get the products
            axios.get('https://fakestoreapi.com/products')
            .then(result=>{
                //this code stores the data
                // console.log(result)
                setProducts(result.data)
            })
            .catch(err => console.log(err))
            
            //call to get api category
            axios.get('https://fakestoreapi.com/products/categories')
            .then(categories=>{
                //this shows the categories in console.log
                // console.log(categories.data)

                //this stores the category in useState
                setCategories(categories.data)
            })
            .catch(categoriesErr => console.log(categoriesErr))


        },[]
    )

    // useEffect(
    //     ()=>{
    //         //calls api to sort by category
    //         axios.get('https://fakestoreapi.com/products/category/jewelery')
    //         .then(category=>{
    //             console.log(category)
    //         })
    //         .then(err => console.log(err))
    //     },[]
    // )

  return (
    <div className='homepage-container'>
        <div className="category-container">
            <button className='all-btn'>ALL</button>
            {
                categories.map(item=> <button className='category-btn'>{item}</button>)
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