import React from "react";
import "./Banner.scss";
import logo from "../../assets/img/logo.png";

export default function Banner() {
  return (
    <div className="container containers">
      <div className="cards">
        <img className="card-img-top" src={logo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            MOVEIS PLANEJADOS COM<br/> INOVAÇÃO & DESIGN
          </h5>
          <a href="#" className="btn btn-contact">
            ORÇAMENTO GRÁTIS
          </a>
        </div>
      </div>
    </div>
  );
}
