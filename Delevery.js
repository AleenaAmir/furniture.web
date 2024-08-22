import React from "react";
import "./delevery.css";
function Delevery() {
  return (
    <div className="dev">
      <div className="dev-a">
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685961699/Group_1_ttndee.png"
            alt="delevery"
            className="dele"
          />
        </div>

        <div className="deve">
          <p className="dev-p">Free Delivery</p>
          <p className="dev-p1">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="dev-a">
        {" "}
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685962564/Group_ly5kre.png"
            alt="delevery"
            className="dele"
          />
        </div>
        <div className="deve">
          <p className="dev-p">Support 24/7</p>
          <p className="dev-p1">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="dev-a">
        {" "}
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685961592/shield-1_1_jvgfnp.png"
            alt="delevery"
            className="dele"
          />
        </div>
        <div className="deve ">
          <p className="dev-p">100% Authentic</p>
          <p className="dev-p1">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default Delevery;
