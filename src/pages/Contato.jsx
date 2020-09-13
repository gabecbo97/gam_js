import React from "react";
import Layout from "../Layout/Default/index";
import icon from "../assets/icons/mail.png";
import "../pages/styles/Contato.scss";

export default function Contato() {
  return (
    <Layout>
      <div className="col-md text-center mb-5">
        <p className="text-center">
          <img src={icon} alt="" width="50" />
        </p>
        <h2>SOLICITE UM ORÇAMENTO</h2>
        <p>Sem compromisso e gratuito</p>
      </div>
      <div className="container content mb-5">
        <form name="orcamento" method="POST" data-netlify="true">
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="e-mail"
                  placeholder="Nome"
                  class="form-control"
                  id="Nome"
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  placeholder="E-mail"
                  class="form-control"
                  id="E-mail"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="fone"
              placeholder="Telefone (xx)x xxxx-xxxx"
              class="form-control"
              id="fone"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Qual o seu Projeto?"
            ></textarea>
          </div>
          <p className="text-center">
            <button type="submit" class="btn btn-form">
              Solicitar
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
}
