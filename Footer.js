import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="f-box">
        <h1 className="f-heading">Beauty Care</h1>
        <p className="f-para">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <h1 className="f-heading">Follow Us</h1>
      </div>
      <div className="f-box1">
        <h3
          className="f-heading"
          style={{ paddingTop: "5%", paddingLeft: "5%" }}
        >
          Instagram Shop
        </h3>
        <div className="img-pack">
          <div className="insta">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686048773/image_94_u3kcsi.png"
              alt="1"
            />
          </div>
          <div className="insta">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686048754/image_95_rpiomq.png"
              alt="2"
            />
          </div>
          <div className="insta">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686048736/image_98_abkpag.png"
              alt="3"
            />
          </div>
          <div className="insta">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686048731/image_96_1_lan2gb.png"
              alt="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
