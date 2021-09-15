import React, { Component } from "react";
import Background from "../ui/background/Background";
import background from "../../images/treesBackground.jpg";
import hikingProject from "../../images/hikingProject.png";
import porfolioProject from "../../images/portfolioProject.png";
import ticTacToePWA from "../../images/ticTacToeProject.png";
import Project from "../ui/project/Project";

import "./projects.css";

export default class Projects extends Component {
  projectsData = [
    {
      webImage: hikingProject,
      alt: "Screenshot of hiking project",
      title: "GeoHiking",
      about: "Map, enter, and track personal hikes",
      uses: "HTML, CSS, JavaScript, Leaflet API",
      liveDemoLink: "https://taylorcookie.github.io/GeoHikingMap/",
      githubLink: "https://github.com/TaylorCookie/GeoHikingMap",
    },
    {
      webImage: porfolioProject,
      alt: "Screenshots of portfolio project",
      title: "Porfolio (this site)",
      about: "Personal Website",
      uses: "React, HTML, CSS, JavaScript",
      githubLink: "https://github.com/TaylorCookie/TaylorCookie.github.io",
    },
    {
      webImage: ticTacToePWA,
      alt: "Screenshots of Tic-Tac-Toe PWA project",
      title: "Tic-Tac-Toe PWA",
      about: "Progressive Web Application",
      uses: "Angular, HTML, CSS, JavaScript",
      liveDemoLink: "https://tic-tac-toe-e6a78.web.app/",
      githubLink: "https://github.com/TaylorCookie/Tic-Tac-Toe-PWA",
    },
  ];

  render() {
    return (
      <div>
        <Background background={background} />
        <div className="background_container"></div>
        <div className="main_content">
          <div className="projects_container">
            {this.projectsData.map(function (project, index) {
              return (
                <section key={index} className="project_container">
                  <Project
                    webImage={project.webImage}
                    title={project.title}
                    about={project.about}
                    uses={project.uses}
                    liveDemoLink={project.liveDemoLink}
                    githubLink={project.githubLink}
                  />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
