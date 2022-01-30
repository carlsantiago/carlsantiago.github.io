import React from "react";
import Brand from "../Brand";
import "../../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <div>
      <Brand />

      <div>
        <h1 className="text-white">Get in touch!</h1>
        <div className="m-4">
          <button
            type="button"
            className="btn btn-outline-light rounded-pill text-white"
            title="Email me"
          >
            <a
              href="mailto:4518gg@gmail.com"
              title="Email me"
              target="_blank"
              rel="noreferrer"
            >
              4518gg@gmail.com
            </a>
          </button>
        </div>

        <div className="my-3 d-flex justify-content-center">
          <a
            href="https://github.com/carlsantiago"
            title="carlsantiago on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="btn btn-outline-light rounded p-3"
              title="carlsantiago on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/carlsantiago/"
            title="Carl Santiago's resume on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="btn btn-outline-light rounded p-3"
              title="Carl Santiago's resume on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </button>
          </a>
          <a
            href="https://www.facebook.com/4518GG/"
            title="Carl Santiago on Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="btn btn-outline-light rounded p-3"
              title="Carl Santiago on Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
