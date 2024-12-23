import React, { useState, useEffect } from "react";
import "../App.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";
import LanguageSwitch from "./LanguageSwich";

const Footer = ({ language }) => {
  return (
    <>
      {language === "en" ? (
        <div className="footer-bar">
          <div className="footer-bar-social-medias">
            <LinkedInIcon />
            <GitHubIcon />
            <XIcon />
          </div>
          <div className="footer-bar-return-button">
            <Button variant="text">
              <ArrowUpwardIcon />
            </Button>
          </div>
          <div className="footer-bar-language">
            <LanguageSwitch language={language}/>
          </div>
          
          <div className="footer-bar-copyright">
            © 2024 Zhaoye Zhang. All rights reserved.
          </div>
        </div>
      ) : (
        <div className="footer-bar">
          <div className="footer-bar-social-medias">
            <LinkedInIcon />
            <GitHubIcon />
            <XIcon />
          </div>
          <div className="footer-bar-return-button">
            <Button variant="text">
              <ArrowUpwardIcon />
            </Button>
          </div>
          <div className="footer-bar-language">
            <LanguageSwitch language={language}/>
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
