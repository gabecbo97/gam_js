import React from "react";
import "./Cards.scss";
import caoa from "../../assets/icons/caoa.png"
import ballon from "../../assets/icons/redballon.png"
import fph from "../../assets/icons/fph.png"

export default function Cards() {
  return (
    <div className="container mb-5 company">
      <h2 className="text-center">CONHEÇA NOSSO TRABALHO</h2>
      <p className="text-center" style={{ fontSize: "25px", width: "auto" }}>
        A G.A.M atua no mercado de marcenaria no estado de São Paulo há 20 anos,
        projetando e desenvolvendo móveis planejados para todos os seguimentos
        de decoração, projetos supervisionados por arquitetos experientes no
        mercado. Com profissionais dedicados e experientes e auxilio desde o
        planejamento, á execução.
      </p>
      <div className="row">
        <div className="col-sm">
          <div class="card-partner text-center">
            <img class="card-img-top" src={caoa} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">HYUNDAI - CAOA</h5>
              <p class="card-text ">
                CAOA é a maior distribuidora de grander fabricantes automotivas
                do mundo, como a Ford e Hyundai..
              </p>
              <a href="#" class="btn btn-button ">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card-partner text-center">
            <img class="card-img-top" src={ballon} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">RED BALLON</h5>
              <p class="card-text">
                Red Balloon é parte do grupo SOMOS Educação e continua
                oferecendo o melhor inglês para crianças e adolescentes.
              </p>
              <a href="#" class="btn btn-button">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card-partner text-center">
            <img class="card-img-top" src={fph} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">FEDERAÇÃO PAULISTA DE HIPISMO</h5>
              <p class="card-text">
                A FPH é responsável pela regulamentação, coordenação e fomento
                de 8 modalidades de Esportes Hípicos praticados no País.
              </p>
              <a href="#" class="btn btn-button">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
