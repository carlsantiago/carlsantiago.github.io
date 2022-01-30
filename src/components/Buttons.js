import React from "react";

function Buttons({ currentPage, handlePageChange }) {
  return (
    <div className="position-absolute bottom-0 start-50 translate-middle-x">
      <div className="my-5 d-flex justify-content-between">
        <a href="#home" onClick={() => handlePageChange("Home")}>
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="about"
          >
            About
          </button>
        </a>
        <a href="#projects" onClick={() => handlePageChange("Projects")}>
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="projects"
          >
            Projects
          </button>
        </a>
        <a href="#skills" onClick={() => handlePageChange("Skills")}>
          <button
            type="button"
            className="btn btn-outline-light rounded-pill"
            id="skills"
          >
            Skills
          </button>
        </a>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
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
