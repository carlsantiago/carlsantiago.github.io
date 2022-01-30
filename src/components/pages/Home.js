import React from "react";
export default function Home() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center about">
      <img
        src={require(`../../images/carl.png`)}
        alt="Carl Santiago"
        id="avatar"
        className="mx-5"
      />
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
  );
}
