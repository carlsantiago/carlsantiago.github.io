import React from "react";

function Buttons() {
  return (
    <div className="d-flex justify-content-center">
      <div className="menu my-5 d-flex justify-content-between">
        <a href="/">
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="about"
          >
            About
          </button>
        </a>
        <a href="/projects">
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="projects"
          >
            Projects
          </button>
        </a>
        <a href="/skills">
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="skills"
          >
            Skills
          </button>
        </a>
        <a href="/contact">
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="contact"
          >
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
