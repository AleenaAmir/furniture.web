import React from "react";
import "./collection.css";
function Collection() {
  return (
    <div>
      <div className="col">
        <h3 className="col-h">Inspiration Collection</h3>
        <p className="col-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="col-img">
        <div className="img-a">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685969171/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering_2_ir0fpo.png"
            alt="colo"
            className="img-1"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685969183/scandinavian-interior-mockup-wall-decal-background_2_wvk4ia.png"
            alt="colo"
            className="img-2"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685969201/Mask_Group_imrnbu.png"
            alt="colo"
            className="img-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Collection;
