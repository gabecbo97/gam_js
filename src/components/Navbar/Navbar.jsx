import React from "react";
import "../Navbar/Navbar.scss";

export default function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand" href="#">
        <p>
          <strong>G.A.M </strong> MARCENARIA
        </p>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Protfólio
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Contato <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}
