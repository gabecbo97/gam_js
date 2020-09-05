import React from "react";
import "./Section.scss";
import banheiro from "../../assets/tumb/banheiro.png"
import cozinha from "../../assets/tumb/cozinha.png"
import decoracao from "../../assets/tumb/decoracao.jpg"
import escritorio from "../../assets/tumb/escritorio.png"
import sala from "../../assets/tumb/sala.jpg"
import dormitorio from "../../assets/tumb/dormitorio.jpg"

export default function Section() {
  return (
    <div className="container-fluid section mb-5" style={{width:"80%"}}>
      <div className="row">
        <div className="col-md">
          <div className="card_section text-center">
            <img src={sala} class="card-img " alt="..." />
            <div className="card-body">
              <h5 class="card-title">SALA DE ESTAR</h5>

              
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card_section text-center">
            <img src={cozinha}class="card-img" alt="..." />
            <div className="card-body">
              <h5 class="card-title">COZINHA</h5>

              
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <div className="card_section text-center">
            <img src={dormitorio}class="card-img" alt="..." />
            <div className="card-body">
              <h5 class="card-title">DORMITÓRIO</h5>

              
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card_section text-center">
            <img src={escritorio}class="card-img" alt="..." />
            <div className="card-body">
              <h5 class="card-title">ESCRITÓRIO</h5>

              
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <div className="card_section text-center">
            <img src={decoracao} class="card-img" alt="..." />
            <div className="card-body">
              <h5 class="card-title">DECORAÇÃO</h5>

              
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card_section text-center">
            <img src={banheiro} class="card-img" alt="..." />
            <div className="card-body">
              <h5 class="card-title">BANHEIRO</h5>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}