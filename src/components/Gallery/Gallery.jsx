import React from "react";
import "./Gallery.scss";
import {Link} from "react-router-dom"


export default function Gallery(props) {
  return (
    <div>
      <div class="responsive">
        <div class="gallery">
          <Link className="g-link" target="_blank" to={props.link}>
            <img src={props.image} alt="Cinque Terre" width="600" height="400" />
          </Link>
          <div class="desc"></div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  );
}
