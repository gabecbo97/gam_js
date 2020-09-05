import React from "react";
import "./Help.scss";

export default function Help() {
  return (
    <div className="container-fluid help-content">
      <div className="col-md  text-center text-white">
          <br/>
          <br/>
          <br/>
        <h2 className="help-body">Como podemos ajudar ?</h2>
        <p className="help-descripton">Peça seu orçamento gratís sem compromisso</p>
        <div class="row help">
          <button className="btn-help text-center a">WhatsApp</button>
          <button className="btn-help text-center b" >Quero um orçamento</button>
        </div>
      </div>
    </div>
  );
}
