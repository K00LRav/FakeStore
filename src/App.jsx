import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactUs from './pages/ContactUs/ContactUs';
import HomePage from './pages/HomePage/HomePage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Checkout from './pages/Checkout/Checkout';
import CartContextProvider from './contexts/CartContext';


function App() {


  return (
      <BrowserRouter>
      <CartContextProvider>
      <Header/>
          <Routes>
            <Route path='/' element={ <HomePage/> }/>
            <Route path='/details/:productId' element={<ProductDetails/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
          </Routes>
      <Footer/>
      </CartContextProvider>
      </BrowserRouter>
  )
}

export default App
