import * as React from "react";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-section-text">
          {/* <div className="contact-section-one">SAY HELLO TO ME</div> */}
          <div className="contact-section-two">Be Always In Touch.</div>
          <div className="contact-section-three">
            I am Grateful to Know You are Interested in Me.
          </div>
          <div className="contact-section-black">E-mail:</div>
          <div className="contact-section-grey">jeffzhang1227@gmail.com</div>
          <div className="contact-section-black">Don't be hesitate!</div>
          <div className="contact-section-grey">
            If you are interested in my experience, feel free to contact me!
          </div>
          <div className="contact-section-icon">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/zhaoyezhang18"
                  //   target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jeffzzy18"
                  //   target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                //   target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
