import React from 'react';
import "./learnmore.css"
function LearnMore() {
    return (  <div className='lm-bg'>
         <h1 className='lm-h' style={{paddingLeft:"5%" ,paddingTop:"2%"}}>ALL BLOGS</h1>
            <p className='lm-p' style={{paddingLeft:"5%" }}>Welcome to our blog where we help you with day to day furniture care, discuss design ideas and latest trends, and speak about the latest design trends. We also discuss how the right decision for buying furniture can lead to an overall improvement in your lifestyle and ofcourse, make your home look beautiful. We focus on furniture for all rooms of your home from bedroom, dining room to office as well as mattresses and accents. We are sure you will enjoy reading our blog.</p>
            
        <div className='blog'>
           <div><img  className="img-b" src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686400529/images_mnv6ih.jpg" alt="imo"/></div>
            <div className='blog-txt'>
                <h1 className='lm-h'> 5 Ways to Personalize your Home</h1>
            <p className='lm-p'>Category: home improvement, design ideas, living room furniture</p>
            <button class="button-89" role="button">READ BLOG</button>
            </div>
        </div>
        {/* {2nd div} */}
        <div className='blog'>
           <div><img  className="img-b" src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402827/maxresdefault_eprdol.jpg" alt="imo"/></div>
            <div className='blog-txt'>
                <h1 className='lm-h'> Stage your Home When It's Time to Move</h1>
            <p className='lm-p'>Category: home improvement, design ideas, living room furniture</p>
            <button class="button-89" role="button">READ BLOG</button>
            </div>
        </div>
        {/* {3rd div} */}
        <div className='blog'>
           <div><img  className="img-b" src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402812/white-brown-modern-kitchen_244125-473_p9o1cn.avif" alt="imo"/></div>
            <div className='blog-txt'>
                <h1 className='lm-h'> New Classic Furniture for Todays Lifestyles</h1>
            <p className='lm-p'>Category: home improvement, design ideas, living room furniture</p>
            <button class="button-89" role="button">READ BLOG</button>
            </div>
        </div>
{/* {4th div} */}
<div className='blog'>
           <div><img  className="img-b" src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686402796/childrens-bedroom-furniture-for-your-home_xfqbbb.jpg" alt="imo"/></div>
            <div className='blog-txt'>
                <h1 className='lm-h'>Make Your Home Unique with <br/>Touches of Vintage Styling</h1>
            <p className='lm-p'>Category: home improvement, design ideas, living room furniture</p>
            <button class="button-89" role="button">READ BLOG</button>
            </div>
        </div>


    </div>);
}

export default LearnMore;