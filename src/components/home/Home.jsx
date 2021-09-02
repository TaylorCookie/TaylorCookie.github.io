import React from "react";
import background from "../../images/background.jpg";
import { NavLink } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <div>
      <div
        className="background_image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="main_content">
        <div className="centered_background_container"></div>
        <section className="centered_container">
          <p className="intro">
            Hello! My name is Taylor Cook and I am a full-stack developer with a
            strong core skillset looking for work as I finish my degree in
            Decemeber 2021. I enjoy building everything from small sites to rich
            interactive web apps.
          </p>
          <p className="intro">
            If you are an organization seeking a developer or an employer
            looking to hire, you can get in touch with me{" "}
            <span className="contact_me_span">
              <NavLink to="/contact">HERE</NavLink>
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
