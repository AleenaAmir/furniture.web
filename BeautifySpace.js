import React from "react";
import { Link } from 'react-router-dom';
import "./beautifyspace.css";
function BeautifySpace() {



  return (
    <div className="B-S">
      <div className="bs">
        <h3 className="bs-h">Beautify Your Space</h3>
        <p className="bs-p">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <Link to="/learn-more" >
        <button className="bs-btn">Learn More</button>
      </Link>
      </div>
      <div className="bs-2">
        <img
          src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685970886/Ellipse_5_rwwfoz.png"
          alt="circle"
          className="circle"
        />
        <img
          src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685970881/image_97_jngx66.png"
          alt="girl"
          className="girl"
        />
      </div>
    </div>
  );
}

export default BeautifySpace;
