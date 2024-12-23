import React, { useState, useEffect } from "react";
import "../App.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";
import LanguageSwitch from "./LanguageSwich";

const Footer = ({ isEnglish, setIsEnglish }) => {
  return (
    <>
      {isEnglish === "true" ? (
        <div className="footer-bar">
          <div className="footer-bar-social-medias">
            <a
              href="https://www.linkedin.com/in/zhaoyezhang18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
            </a>
          </div>
          <div className="footer-bar-return-button">
            <Button
              variant="text"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUpwardIcon />
            </Button>
          </div>
          <div className="footer-bar-language">
            <LanguageSwitch isEnglish={isEnglish} />
          </div>

          <div className="footer-bar-copyright">
            © 2024 Zhaoye Zhang. All rights reserved.
          </div>
        </div>
      ) : (
        <div className="footer-bar">
          <div className="footer-bar-social-medias">
            <a
              href="https://www.linkedin.com/in/zhaoyezhang18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
            </a>
          </div>
          <div className="footer-bar-return-button">
            <Button
              variant="text"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUpwardIcon />
            </Button>
          </div>

          <div className="footer-bar-language">
            <LanguageSwitch isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
          </div>

          <div className="footer-bar-copyright">
            © 2024 Zhaoye Zhang. All rights reserved.
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
