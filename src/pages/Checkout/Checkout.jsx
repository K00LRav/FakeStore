import React, {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext';
import './Checkout.css'
import { BsTrash } from "react-icons/bs";

function Checkout() {

  const {cart,removeCart} = useContext(CartContext)

  return (
    <div className='checkout-container'>
    

    <div className="cart">

     {/* <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qnty</th>
              <th>Remove</th>
            </tr>
          </thead>
          {cart?.map((item) => (
            <tbody>
              <tr>
                <td className="item">
                  <img src={item.image} alt="" />
                  {item.title}
                </td>
                <td>$ {item.price}</td>
                <td>1</td>
                <td>
                  <BsTrash onClick={() => removeCart(item.id)} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <p>Total $0</p> 
       */}
     {/* {
      cart.map(item =>
      <div>
        <img src={item.image} className='cart-img' />
        <p className='title'>{item.title}</p>
        <p className='price'>${item.price}</p>
      </div>
      )
    }  */}
    
    </div>

    </div>
  )
}

export default Checkout