import React from "react";
export default function Home() {
  return (
    <div className="d-flex align-items-center row">
      <div className="col-md-6 d-flex justify-content-center p-0">
        <img
          src={require(`../../images/carl.png`)}
          alt="Carl Santiago"
          id="avatar"
          className=""
        />
      </div>
      <div className="about col-md-6 p-0">
        <p className="p-0 text-center">
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
