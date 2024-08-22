import React from 'react';
import "./living.css"
function Living() {
    return ( <div className='living-l'>
       
        <div className='living-parent' style={{marginLeft:"5rem"}}>
            <div className='border-effect'>
            <img src='https://res.cloudinary.com/dstnwi5iq/image/upload/v1686550620/images_5_nhmxaa.jpg' style={{height:"20rem",width:"20rem"}} alt='living'/>
            <p className='lp-para'>2- piece living room set<br/> by Barrel Studio</p>
            <h3 className='lp-heading'>From $799.69</h3>
            <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" style={{paddingLeft:"5%"}} alt="stars"/>
        <p className='lp-para'>Free delivery</p>
        </div>
        {/* <>2nd div</> */}
        <div className='border-effect'>
            <img src='https://res.cloudinary.com/dstnwi5iq/image/upload/v1686400529/images_mnv6ih.jpg' style={{height:"20rem",width:"20rem"}} alt='living'/>
            <p className='lp-para'>2- piece living room set<br/> by Barrel Studio</p>
            <h3 className='lp-heading'>From $799.69</h3>
            <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" style={{paddingLeft:"5%"}} alt="stars"/>
        <p className='lp-para'>Free delivery</p>
        </div>
         {/* <>3rd div</> */}
         <div className='border-effect'>
            <img src='https://res.cloudinary.com/dstnwi5iq/image/upload/v1686553688/mosslanda-picture-ledge-from-ikea-3_fozip9.webp' style={{height:"20rem",width:"20rem"}} alt='living'/>
            <p className='lp-para'>2- piece living room set<br/> by Barrel Studio</p>
            <h3 className='lp-heading'>From $799.69</h3>
            <img src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685435379/Group_13_qp3hbx.png" style={{paddingLeft:"5%"}} alt="stars"/>
        <p className='lp-para'>Free Shipping</p>
        </div>
        </div>
    </div>);
}

export default Living;