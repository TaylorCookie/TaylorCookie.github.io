import React, { Component } from "react";
import Background from "../ui/background/Background";
import background from "../../images/treesBackground.jpg";
import hikingProject from "../../images/hikingProject.png";
import porfolioProject from "../../images/portfolioProject.png";
import pocketChefProject from "../../images/pocketChefProject.png";
import springBootApiProject from "../../images/springBootApiProject.png";
import Project from "../ui/project/Project";

import "./projects.css";

export default class Projects extends Component {
  projectsData = [
    {
      webImage: pocketChefProject,
      alt: "Screenshots of Pocket Chef project",
      title: "Pocket-Chef PWA",
      about:
        'Create, view, edit, and delete your personal recipes. Implements "Spring Boot Recipe API" for persistent database.',
      uses: "Angular, TypeScript, HTML, CSS, Firebase",
      liveDemoLink: "https://recipe-pwa-4b12f.web.app/",
      githubLink: "https://github.com/TaylorCookie/Recipe-PWA",
    },
    {
      webImage: springBootApiProject,
      alt: "Screenshots of Spring Boot Recipe API project",
      title: "Spring Boot Recipe API",
      about: 'API made to service "Pocket-Chef PWA" project. Hosted on Heroku',
      uses: "Spring Boot, PostgreSQL, Java, Heroku",
      // liveDemoLink: "https://recipe-pwa-4b12f.web.app/",
      githubLink: "https://github.com/TaylorCookie/SpringBoot-Recipe-API",
    },
    {
      webImage: hikingProject,
      alt: "Screenshot of hiking project",
      title: "GeoHiking",
      about: "Map, enter, and track personal hikes",
      uses: "HTML, CSS, JavaScript, Leaflet API, GitHub Pages",
      liveDemoLink: "https://taylorcookie.github.io/GeoHikingMap/",
      githubLink: "https://github.com/TaylorCookie/GeoHikingMap",
    },
    {
      webImage: porfolioProject,
      alt: "Screenshots of portfolio project",
      title: "Porfolio (this site)",
      about: "Personal Website",
      uses: "React, HTML, CSS, JavaScript, GitHub Pages",
      githubLink: "https://github.com/TaylorCookie/TaylorCookie.github.io",
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
