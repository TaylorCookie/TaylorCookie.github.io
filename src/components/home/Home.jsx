import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../ui/navbar/Navbar";

import "./home.css";

function Home() {
  return (
    <div>
      <div
        className="background_image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <Navbar />
      <div className="home_content">
        <section className="">Testing Section</section>
      </div>
    </div>
  );
}

export default Home;
