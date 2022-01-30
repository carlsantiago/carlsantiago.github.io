import React from "react";
export default function Home() {
  return (
    <div className="d-flex flex-row flex-wrap align-items-center">
      <div>
        <img
          src={require(`../../images/carl.png`)}
          alt="Carl Santiago"
          id="avatar"
          className=""
        />
      </div>
      <div className="about p-0">
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
    </div>
  );
}
