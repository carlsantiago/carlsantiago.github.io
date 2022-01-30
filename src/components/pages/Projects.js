import React from "react";
import Card from "../Card";
import projects from "./../../projects";

export default function Projects() {
  return (
    <div className="projectContainer">
      <Card projects={projects} />
    </div>
  );
}
