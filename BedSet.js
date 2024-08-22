
import React, { useState} from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./bedset.css"
function BedSet({addToCart}) {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    const handleDecrement = () => {
      if (counter > 0) {
        setCounter(prevCounter => prevCounter - 1);
      }
    };
    const handleAddToCart = () => {
      if (counter > 0) {
        const item = {
          name: 'Halstein Steel Platform 3 Piece Bedroom Set',
          price: `$${4792 * counter}`, // Update the price based on the quantity
          quantity: counter,
          image: "https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402827/maxresdefault_eprdol.jpg"
        };
    
        addToCart(item);
        setCounter(0);
      }
    };
    
  

    const isCartEmpty = counter === 0;
    return (<div className='bd-set'>
        <div className='main-div'>
        <div className='img-box'>
            <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402827/maxresdefault_eprdol.jpg" alt='imo' className='main-img' style={{height:"40rem" ,width:"40rem"}}/>
        </div>
        <div className='data-box'>
        <h1 className='hero2-h' style={{paddingTop:"2rem"}}>Halstein Steel Platform<br/> 3 Piece Bedroom Set</h1>
        <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" alt='stars' style={{paddingTop:"2rem"}}/>
        <h3 className='hero2-h' style={{paddingTop:"2rem"}}>$4,792.4</h3>
        <p className='hero-p'>$67/mo. for 12 mos - Total $4,792</p>
        <p className='hero-p'>
        Free In-Home Delivery
        </p>
<span className='hero-p'>Get it in
2–3 weeks in between

 
Thu. Jun 15 – Fri. July 16


</span>

<div>

 
      <button onClick={handleIncrement} className='inr'>+</button>
      <button className='count'> {counter}</button>

      <button onClick={handleDecrement}  className="dec" >-</button>
      <button className='count' style={{borderRadius:"10px"}}><AiOutlineHeart/></button>
      <Link to="/cart"> <button class="button-85" role="button" onClick={handleAddToCart} disabled={isCartEmpty}>Add Cart</button></Link>
 

     
     

</div>
        </div>
        </div>
      
    </ div>  );
}

export default BedSet;