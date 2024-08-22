import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import LearnMore from "./components/pages/LearnMore";
import NavBar from './components/navbar/Navbar';
import Bedroom from './components/pages/BedRoom';
import Dining from './components/pages/Dining';
import Living from './components/pages/Living';
import BuyNow from './components/pages/BuyNow';
import BedSet from './components/pages/BedSet';
import Cart from './components/Cart/Cart';
import OrderForm from './components/Cart/Form';

function App() {
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<NavBar />} />
          <Route path="/bedset" element={<BedSet addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart items={cartItems} removeFromCart={removeFromCart} />} />
          <Route path='/form' element={<OrderForm />} />
          <Route path='/buy-now' element={<BuyNow />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path='/living' element={<Living />} />
          <Route path="/dining" element={<Dining />} />
          <Route exact path="/learn-more" element={<LearnMore />} />
        </Routes>
      </div>
   
    </Router>
  );
}

export default App;
