import React, {useContext, useState} from 'react'
import { CartContext } from '../../contexts/CartContext';
import './Checkout.css'
import { BsTrash } from "react-icons/bs";
import  Modal from "react-modal"
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Checkout() {

  const {cart,removeCart} = useContext(CartContext)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    }
  }
    Modal.setAppElement(document.getElementById("root"));

  return (
    <div className='checkout-container'>
    

    <div className="cart">

     <table>
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
        
            <button className='checkout-btn' onClick={() => setModalIsOpen(true)}>Check Out</button>

          <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="modal">
        <div className="modal-box">
          <AiOutlineClose onClick={() => setModalIsOpen(false)} />
          <div className="modal-content">
            <p>Your Order was successful!</p>
            <p>
              Check your email for the order confirmation. Thank you for
              shopping with Fake Store!
            </p>
          </div>
          <Link to="/">
            <button className='return-btn'>Return to MainPage</button>
          </Link>
        </div>
      </Modal>
    
    </div>

    </div>
  )
}

export default Checkout