import React from "react";
import "../Footer/Footer.scss";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className="py-4 footer">
      <div className="container text-center">
        <div className="col">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <br />
          <p>&copy; G.A.M 2020</p>
        </div>
      </div>
    </footer>
  );
}
