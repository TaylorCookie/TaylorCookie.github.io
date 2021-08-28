import React from "react";
import headshot from "../../images/headshot.jpeg";
import "./about.css";

function About() {
  return (
    <div>
      <img className="headshot" src={headshot} alt="Author"></img>
    </div>
  );
}

export default About;
