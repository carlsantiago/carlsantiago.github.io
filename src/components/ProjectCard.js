import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

function ProjectCard({ projects }) {
  return (
    <MDBCarousel showControls showIndicators fade>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement
            src={require(`../images/${projects[0].title}.png`)}
            alt={projects[0].title}
            className="projectImg"
          />
          <MDBCarouselCaption>
            <h5 className="text-light">{projects[0].title}</h5>
            <p className="text-light">{projects[0].description}</p>
            <a href={projects[0].github} target="_blank" rel="noreferrer">
              <button
                type="button"
                class="btn btn-sm btn-outline-light rounded-pill"
              >
                <FontAwesomeIcon icon={faGithub} id="icon" />
              </button>
            </a>
            <a href={projects[0].deploy} target="_blank" rel="noreferrer">
              <button
                type="button"
                class="btn btn-sm btn-outline-light rounded-pill"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} id="icon" />
              </button>
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        {projects.slice(1).map((project) => (
          <MDBCarouselItem>
            <MDBCarouselElement
              src={require(`../images/${project.title}.png`)}
              alt={project.title}
              className="projectImg"
            />
            <MDBCarouselCaption>
              <h5 className="text-light">{project.title}</h5>
              <p className="text-light">{project.description}</p>
              <a href={project.github} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-light rounded-pill"
                >
                  <FontAwesomeIcon icon={faGithub} id="icon" />
                </button>
              </a>
              <a href={project.deploy} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-light rounded-pill"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} id="icon" />
                </button>
              </a>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default ProjectCard;
