import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./cart.css";

function Cart({ items, removeFromCart }) {
  const navigate = useNavigate();

  const isCartEmpty = items.length === 0;

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    if (isCartEmpty) {
      navigate("/");
    }
  };

  const handleNavigateToForm = () => {
    if (!isCartEmpty) {
      navigate('/form');
    } else {
      navigate('/');
    }
  };

  if (isCartEmpty) {
    navigate('/'); // Redirect to home page if cart is empty
    return null; // Render nothing
  }

  return (
    <div className='bd-set' id="cart">
      {items.map((item, index) => (
        <div key={index}>
          <p className='item-name'>{item.name}</p>
          <p className='cart-item'>{item.price}</p>
          <p className='item-name'>Items: {item.quantity}</p>
          <div>
            <img src={item.image} style={{ height: "10rem", width: "10rem", marginBottom: "25px" }} alt={item.name} />
          </div>
          <button className='count1' onClick={() => handleRemoveFromCart(index)}>{<FaTrash />}</button>
          <Link to="/form">
            <button className='count1' onClick={handleNavigateToForm}>{<AiOutlineShoppingCart />}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cart;
