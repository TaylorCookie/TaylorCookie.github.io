import React from "react";
import Navbar from "../navbar/Navbar";
import background from "../../images/background.jpg";

import "./home.css";

function Home() {
  return (
    <div>
      <div
        className="background_image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="background_bar"></div>
      <div className="home_content">
        <Navbar />

        <section className="">Testing Section</section>
      </div>
    </div>
  );
}

export default Home;
