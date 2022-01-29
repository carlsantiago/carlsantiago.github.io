import React from "react";
import Brand from "../Brand";
export default function Home() {
  return (
    <div>
      <Brand />

      <div>
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
      </div>
    </div>
  );
}
