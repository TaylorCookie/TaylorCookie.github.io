import React from "react";

import "./background.css";

function Background({ background }) {
  return (
    <div
      className="background_image"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
}

export default Background;
