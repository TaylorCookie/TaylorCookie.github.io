import React from "react";
import { ExternalLink } from "react-external-link";

import "./project.css";

function Project({
  webImage,
  alt,
  title,
  about,
  uses,
  liveDemoLink,
  githubLink,
}) {
  return (
    <div className="project">
      <div className="project_image_container">
        <img src={webImage} alt={alt} className="project_image"></img>
      </div>
      <div className="project_info_container">
        <h3 className="project_title">{title}</h3>
        <p className="project_about">{about}</p>
        <div className="project_button_row">
          <ExternalLink href={liveDemoLink}>
            <button className={liveDemoLink ? "project_button" : "hidden"}>
              Live Demo
            </button>
          </ExternalLink>
          <ExternalLink href={githubLink}>
            <button className="project_button">GitHub</button>
          </ExternalLink>
        </div>
        <p className="project_uses">Uses: {uses}</p>
      </div>
    </div>
  );
}

export default Project;
