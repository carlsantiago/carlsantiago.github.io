import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ projects }) {
  return (
    <div className="d-flex flex-row flex-wrap vw-100 justify-content-center">
      {projects.map((project) => (
        <div className="card border-white text-white bg-dark bg-gradient text-center asd mx-2">
          <img
            src={require(`../images/${project.title}.png`)}
            alt={project.title}
            className="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <p className="card-text">
              <small className="text-muted">{project.techUsed}</small>
            </p>
          </div>
          <div className="d-flex card-footer align-items-center justify-content-center">
            <a
              href={project.github}
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-pill"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </a>
            <a
              href={project.deploy}
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn  btn-sm btn-outline-secondary rounded-pill"
                type="button"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
