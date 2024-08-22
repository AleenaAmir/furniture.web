import React from 'react';
function Bedroom() {
    return ( <div className='living-l'>
       
    <div className='living-parent'>
        <div className='border-effect' style={{marginLeft:"rem"}}>
        <img src='https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402827/maxresdefault_eprdol.jpg' style={{height:"20rem",width:"20rem"}} alt='living'/>
        <p className='lp-para'>2- piece living room set<br/> by Barrel Studio</p>
        <h3 className='lp-heading'>From $799.69</h3>
        <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" style={{paddingLeft:"4%"}} alt="stars"/>
    <p className='lp-para'>Free delivery</p>
    </div>
    {/* <>2nd div</> */}
    <div className='border-effect'>
        <img src='https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402796/childrens-bedroom-furniture-for-your-home_xfqbbb.jpg' style={{height:"20rem",width:"20rem"}} alt='living'/>
        <p className='lp-para'>Mestern Platform 4pc- bed set<br/> by IKEA Studio</p>
        <h3 className='lp-heading'>From $499.69</h3>
        <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" style={{paddingLeft:"4%"}} alt="stars"/>
    <p className='lp-para'>Free delivery</p>
    </div>
     {/* <>3rd div</> */}
     <div className='border-effect'>
        <img src='https://res.cloudinary.com/dstnwi5iq/image/upload/v1686554264/Aesthetic-Ikea-Bedroom-Ideas-2_d4iwdo.jpg' style={{height:"20rem",width:"20rem"}} alt='living'/>
        <p className='lp-para'>Mandy standerd 6-pc bedroom set<br/> by Barrel Studio</p>
        <h3 className='lp-heading'>From $999.69</h3>
        <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" style={{paddingLeft:"4%"}} alt="stars"/>
    <p className='lp-para'>Free Shipping</p>
    </div>
    </div>
</div>);
}

export default Bedroom;