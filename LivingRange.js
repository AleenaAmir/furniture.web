import React from "react";
import "./livingrange.css";
import { Link } from "react-router-dom";
function LivingRange() {
  return (
    <div className="living">
      <h3 className="lr-h">Browse The Range</h3>
      <p className="lr-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="lr-box">
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686032869/image_106_dpzsqp.png"
            alt="living"
            className="data-1"
          />
          <Link to="/dining">
          <button class="button-48" role="button">
            <span class="text">Dining</span>
          </button>
          </Link>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686032877/image_100_rp5uoo.png"
            alt="living"
            className="data-1"
          />
          <Link to="/living">
          <button class="button-48" role="button">

            <span class="text">Living</span>
          </button>
          </Link>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686032893/image_101_bs40b9.png"
            alt="living"
            className="data-1"
          />
<Link to="/bedroom">
          <button class="button-48" role="button">
            <span class="text">Bedroom</span>
          </button>
          </Link>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default LivingRange;
