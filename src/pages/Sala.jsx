import React from "react";
import Layout from "../Layout/Default/index";
import Gallery from "../components/Gallery/Gallery";
import image1 from "../assets/portfolio/sala/image1.jpg";
import image2 from "../assets/portfolio/sala/image2.jpg";
import image3 from "../assets/portfolio/sala/image3.jpg";
import image4 from "../assets/portfolio/sala/image4.jpg";
import image5 from "../assets/portfolio/sala/image5.jpg";
import image6 from "../assets/portfolio/sala/image6.jpg";

export default function Sala() {
  return (
    <Layout>
      <div className="container">
   
          <h2 className="text-center">SALA</h2>
          <p className="text-center">
            Melhor aproveitamento do espaço com variedade de cores e texturas,
            projetos sob medida de acordo com o tamanho da cozinha
          </p>
       

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
        <div class="row">
          <div class="col-lg">
            <Gallery image={image4} link={image4} />
          </div>
          <div class="col-lg">
            <Gallery image={image5} link={image5} />
          </div>
          <div class="col-lg">
            <Gallery image={image6} link={image6} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
