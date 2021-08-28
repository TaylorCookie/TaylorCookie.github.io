import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./navbar.css";

function Navbar(props) {
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
    <div
      onMouseOver={hoverHandler.bind(0.5)}
      onMouseOut={hoverHandler.bind(1)}
      className="nav"
    >
      <h3 className="my__name">
        <Link to="/">Taylor Cook</Link>
      </h3>
      <ul className="nav__ul">
        <li>
          <Link to="/" className="nav__item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/demos" className="nav__item">
            Live Demos
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav__item">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav__item">
            Projects
          </Link>
        </li>
        <li>
          <ExternalLink
            href="https://drive.google.com/file/d/1V7yjUwJD1HTmwOoyGyxmAkTcXq8g5pFx/view?usp=sharing"
            className="nav__item"
          >
            Resume
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
