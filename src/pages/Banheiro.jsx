import React from "react";
import Layout from "../Layout/Default/index";
import Gallery from "../components/Gallery/Gallery";
import image1 from "../assets/portfolio/banheiro/image1.jpg";
import image2 from "../assets/portfolio/banheiro/image2.jpg";
import image3 from "../assets/portfolio/banheiro/image4.jpg";
import icon from "../assets/icons/camera.png";
export default function Banheiro() {
  return (
    <Layout>
      <div className="container">
        <div className="col-md text-center mb-5">
          <p className="text-center">
            <img src={icon} alt="" width="50" />
          </p>
          <h2>BANHEIRO</h2>
          <p>Material utilizado totalmente a prova d'água.</p>
        </div>

        <br />
        <div class="row">
          <div class="col-lg">
            <Gallery image={image1} link={image1} />
          </div>
          <div class="col-lg">
            <Gallery image={image2} link={image2} />
          </div>
          <div class="col-lg">
            <Gallery image={image3} link={image3} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
