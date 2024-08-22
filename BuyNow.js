import React from 'react';
import "./buynow.css"
import { Link } from 'react-router-dom';
function BuyNow() {
    return ( <div className='buy'>
<div className='buy-pack'>
    <Link to="/bedset">
    <div className='bb'>
    <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402827/maxresdefault_eprdol.jpg" alt="bed" className='buy-img'/>
    <h4>Halstein Steel Platform<br/> 3 Piece Bedroom Set</h4>
    </div>
    </Link>
    <Link>
    <div className='bb'>
         <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686562734/d20aa28827643fea6e0cff5f68e1b61a_cghhmh.jpg" alt="bed" className='buy-img'/>
         <h4>Damita 2 - Door Accent <br/>Cabinet</h4>
    </div>
    </Link>
    <Link>
    <div className='bb'>
        
        <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402812/white-brown-modern-kitchen_244125-473_p9o1cn.avif" alt="bed"  className='buy-img'/>
        <h4>Kuhnhenn Metal<br/> Kitchen Cart</h4>
    </div>
    </Link>
    <Link>
   <div className='bb'>
    <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402796/childrens-bedroom-furniture-for-your-home_xfqbbb.jpg" alt="bed"  className='buy-img'/>
    <h4>Stage your Home When<br/> It's Time to Move</h4>
    </div>
    </Link>
    <Link>
    <div className='bb'>
    <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686553688/mosslanda-picture-ledge-from-ikea-3_fozip9.webp" alt="bed" className='buy-img'/>
    <h4>New Classic Furniture for<br/> Todays Lifestyles</h4>
    </div>
    </Link>
    <Link >
    <div className='bb'>
    <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686554264/Aesthetic-Ikea-Bedroom-Ideas-2_d4iwdo.jpg" alt="bed" className='buy-img'/>
    <h4>Fully Assembled<br/> Bedroom Sets</h4>
    </div>
    </Link>
</div>

    </div> );
}

export default BuyNow;