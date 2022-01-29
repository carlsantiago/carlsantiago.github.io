import React, { useState } from "react";
import Home from "./pages/Home";
import Nav from "./Nav";

import "../styles/main.css";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return (
        <div className="h-100">
          <Home />
        </div>
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="container">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
