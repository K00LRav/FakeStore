import { useState, createContext, useEffect } from "react";


//create context

export const CartContext = createContext()


export default function CartContextProvider(props){

    const [cart, setCart] = useState([])

    useEffect(
        ()=>{
            console.log('content - added')
            const storedInCart = (localStorage.getItem("Items In Cart"))
            console.log('stored in cart')

            if(storedInCart){
                setCart(JSON.parse(storedInCart))
            }
        },[]
    )

//function to add items to the cart and store in local storage
const addToCart = (itemToAdd) => {
    console.log ('added', itemToAdd)
    console.log(cart)
    let newItemToCart = [...cart, itemToAdd]
    console.log(newItemToCart)
    //update state with new item
    setCart(newItemToCart)

    localStorage.setItem('Items In Cart', JSON.stringify(newItemToCart))
}

//function to remove from cart and remove from localstorage
const removeCart = (itemId) => {
    console.log('removed from cart', itemId)
    let newItemToCart = cart.filter(item => item.id !== itemId)

    setCart(newItemToCart)
    localStorage.setItem('Items In Cart', JSON.stringify(newItemToCart))
}



return(
    <CartContext.Provider value={{cart, addToCart, removeCart}}>
        {props.children}
    </CartContext.Provider>
)

}