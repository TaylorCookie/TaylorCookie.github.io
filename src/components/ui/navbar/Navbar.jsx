import React from "react";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./navbar.css";

function Navbar() {
  function hoverHandler(e) {
    e.preventDefault();
    const link = e.target;

    //guard clause
    if (!link.classList.contains("nav__item")) return;

    //select all links
    const siblings = link.closest(".nav__ul").querySelectorAll(".nav__item");

    //add styling to everything but hovered link
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }

  return (
    <div>
      <div className="nav_background_bar"></div>
      <div
        onMouseOver={hoverHandler.bind(0.25)}
        onMouseOut={hoverHandler.bind(1)}
        className="nav"
      >
        <h3 className="my__name hidden_on_small">
          <NavLink exact to="/" activeClassName="">
            Taylor Cook
          </NavLink>
        </h3>
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink
              exact
              to="/"
              className="nav__item"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to="/contact"
              className="nav__item"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to="/projects"
              className="nav__item"
              activeClassName="active"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav__li">
            <ExternalLink
              href="https://drive.google.com/file/d/1V7yjUwJD1HTmwOoyGyxmAkTcXq8g5pFx/view?usp=sharing"
              className="nav__item"
            >
              Resume
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
