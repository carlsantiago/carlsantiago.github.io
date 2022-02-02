import React from "react";
import ProjectCard from "../ProjectCard";
import projects from "./../../projects";

export default function Projects() {
  return (
    <div className="d-flex align-items-center">
      <ProjectCard projects={projects} />
    </div>
  );
}
