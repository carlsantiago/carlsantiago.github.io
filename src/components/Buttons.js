import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Buttons({ currentPage, handlePageChange }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="fixed-bottom justify-content-center navBtn"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto container d-flex justify-content-center">
          <Nav.Item>
            <a href="#home" onClick={() => handlePageChange("Home")}>
              <button
                type="button"
                className="btn btn-outline-light rounded-pill"
                id="about"
              >
                About
              </button>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="#projects" onClick={() => handlePageChange("Projects")}>
              <button
                type="button"
                className="btn btn-outline-light rounded-pill"
                id="projects"
              >
                Projects
              </button>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="#skills" onClick={() => handlePageChange("Skills")}>
              <button
                type="button"
                className="btn btn-outline-light rounded-pill"
                id="skills"
              >
                Skills
              </button>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              <button
                type="button"
                className="btn btn-outline-light rounded-pill"
                id="contact"
              >
                Contact
              </button>
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Buttons;
