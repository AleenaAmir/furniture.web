import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    console.log('CartItem:', item);

    return (
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    );
  };
  

export default CartItem;
