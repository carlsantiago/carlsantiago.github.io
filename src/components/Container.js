import React, { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "../styles/main.css";
import Buttons from "./Buttons";
import Brand from "./Brand";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="container h-100 d-flex justify-content-center">
      <Brand />

      {renderPage()}

      <Buttons currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
