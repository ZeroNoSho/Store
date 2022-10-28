import React from "react";
import ParticelConfig from "../config/Particle";
import svg from "../Pic/2.jpg";
import Foot from "../component/Foot";
const EditProduct = () => {
  return (
    <div>
      <ParticelConfig></ParticelConfig>
      <div className="box boxC container text-center">
        <div className="row row1">
          <div className="herosi">
            <h1 className="title is-1">TENTANG SAYA</h1>
          </div>
          <div className="col">
            <img className="zero" src={svg} alt="img" />
            <h1 className="title is-6">Ari Rachman</h1>

            <div className="prof">
              <p className="card-text">
                Nama saya ari Rachman saya adalah web developer saya pandai dalam mendesain atau mengolah desain website dengan html css dan java script dan saya juga bisa mengunakan beberapa framework seperti bootstrap atau react js dalam
                memudahkan saya membuat website
              </p>
              <br />
              <p className="p">
                | <b>EXPERIENCED IN</b> HTML 5 | <b>EXPERIENCED IN</b> CSS 3 | <b> EXPERIENCED IN</b> JavaScript | <b> EXPERIENCED IN</b> ReactJS |
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container container1">
        <Foot />
      </div>
    </div>
  );
};

export default EditProduct;
