import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios, { all } from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductDetails from '../ProductDetails/ProductDetails'
import { Link } from 'react-router-dom'

function HomePage() {

//this code allows to store the api data in a useState
const [products, setProducts] = useState([])
const [categoriesList, setCategoriesList] = useState([])



const handleCategoryClick =(category) =>{
    //this is to grab the category when clicked
    console.log(category)
    //calling the data from selected category
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res =>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
}

//this is to get all the products when the all button is clicked
const handleAll =(allProducts) =>{
    console.log(allProducts)
            // this is too call the api to get back all the products
            axios.get('https://fakestoreapi.com/products')
            .then(result=>{
                //this code stores the data
                console.log(result)
                setProducts(result.data)
            })
            .catch(err => console.log(err))

}

//code to get api data
    useEffect(
        ()=>{
            // this is too call the api to get the products
            axios.get('https://fakestoreapi.com/products')
            .then(result=>{
                //this code stores the data
                console.log(result.data)
                setProducts(result.data)
            })
            .catch(err => console.log(err))
            
            //call to get api categories
            axios.get('https://fakestoreapi.com/products/categories')
            .then(categories=>{
                //this shows the categories in console.log
                console.log(categories.data)

                //this stores the category in useState
                setCategoriesList(categories.data)
            })
            .catch(categoriesErr => console.log(categoriesErr))
            

        },[]
    )



  return (
    <div className='homepage-container'>
        <div className="category-container">
            
            
            <button className='all-btn' onClick={handleAll}>ALL</button>
            
            {
                categoriesList.map(item=> <button key={item} className='category-btn' 
                onClick={()=>handleCategoryClick(item)}>{item}</button>)
            }
        </div>

            <div className="products-container">

                 {
                    products.map(product => <ProductCard key={product.id} product={product}/>)
                 }

        </div>

     </div>
  )
}

export default HomePage