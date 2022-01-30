import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ projects }) {
  return (
    <div className="row justify-content-center align-items-center">
      {projects.map((project) => (
        <div className="col-md-2">
          <div className="card border-white text-white bg-dark bg-gradient text-center projectCard">
            <img
              src={require(`../images/${project.title}.png`)}
              alt={project.title}
              className="img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text cardDesc">{project.description}</p>
              <p className="card-text">
                <small className="text-muted">{project.techUsed}</small>
              </p>
            </div>
            <div className="d-flex justify-content-end card-footer align-items-center justify-content-center">
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
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
