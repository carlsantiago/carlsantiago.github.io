import React from "react";
import Buttons from "../Buttons";

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div className="row">
        <img src="/images/carl.png" alt="Carl Santiago" id="avatar" />
        <p>
          Hello there!
          <br />
          Welcome to my portfolio! <br />
          <br />
          I'm an aspiring career shifter <br />
          studying through a coding bootcamp <br /> pursuing to become a
          full-stack web developer.
        </p>
      </div>
      <Buttons />
    </div>
  );
}
