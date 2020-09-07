import React from "react";
import "./Nav.scss"

export default function Nav() {
  return (
    <header id="header">
      <h1 id="logo">
        <a href="/">
          G.A.M <span>Marcenaria</span>
        </a>
      </h1>
      <nav id="nav">
        <ul>
          <li class="submenu">
            <a href="">Portifólio</a>
            <ul>
              <li>
                <a href="/cozinha/">Cozinha</a>
              </li>
              <li>
                <a href="/dormitorio/">Dormitório</a>
              </li>
              <li>
                <a href="/banheiro/">Banheiro</a>
              </li>
              <li>
                <a href="/sala/">Sala de estar</a>
              </li>
              <li>
                <a href="/escritorio/">Escritório</a>
              </li>
              <li>
                <a href="/decoracao/">Decoração</a>
              </li>
              <li class="submenu">
                <a href="">Submenu</a>
                <ul>
                  <li>
                    <a href="#">Dolore Sed</a>
                  </li>
                  <li>
                    <a href="#">Consequat</a>
                  </li>
                  <li>
                    <a href="#">Lorem Magna</a>
                  </li>
                  <li>
                    <a href="#">Sed Magna</a>
                  </li>
                  <li>
                    <a href="#">Ipsum Nisl</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contato/">Contato</a>
          </li>
          <li>
            <a href="/blog.html">Blog</a>
          </li>

          <li>
            <a href="#" class="button special">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
