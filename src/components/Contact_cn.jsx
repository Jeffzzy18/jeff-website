import * as React from "react";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const Contact_cn = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-section-text">
          {/* <div className="contact-section-one">SAY HELLO TO ME</div> */}
          <div className="contact-section-two">让我们保持联系。</div>
          <div className="contact-section-three">
          我会很乐意与你联系。
          </div>
          <div className="contact-section-black">电子邮箱:</div>
          <div className="contact-section-grey">jeffzhang1227@gmail.com</div>
          <div className="contact-section-black">不要犹豫!</div>
          <div className="contact-section-grey">
          如果您对我的经验感兴趣，请随时与我联系！
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
export default Contact_cn;
