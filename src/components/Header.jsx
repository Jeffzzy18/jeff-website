import React, { useState, useEffect } from "react";
import "../App.css";

import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import TranslateIcon from "@mui/icons-material/Translate";

const Header = ({ setIsEnglish, isEnglish }) => {
  const navigate = useNavigate();

  const toggleLanguage = () => {
    console.log(isEnglish);
    let newPath
    const currentPath = window.location.pathname;

    
    localStorage.getItem("isEnglish") === "false"
      ? localStorage.setItem("isEnglish", "true")
      : localStorage.setItem("isEnglish", "false");

    navigate(localStorage.getItem("isEnglish") === "true" ? "/" : "/cn");
    if (!isEnglish) {
        newPath = currentPath.startsWith("/cn") ? currentPath.replace(/^\/cn/, "") : currentPath;
      } else {
        newPath = currentPath.startsWith("/cn") ? currentPath : `/cn${currentPath}`;
      }
      
      navigate(newPath);
  };

    useEffect(() => {

      isEnglish === false
      ? localStorage.setItem("isEnglish", "false")
      : localStorage.setItem("isEnglish", "true");
    }, [isEnglish]);
  //   console.log(localStorage.getItem("language"));

  return (
    <>
      {isEnglish === true ? (
        <div className="header-bar">
          <Nav.Link href="/" className="header-bar-button">
            HOME
          </Nav.Link>
          <Nav.Link href="/about" className="header-bar-button">
            ABOUT
          </Nav.Link>
          {/* <Nav.Link href="/blog" className="header-bar-button">
            BLOG
          </Nav.Link> */}
          <Nav.Link href="/contact" className="header-bar-button">
            CONTACT
          </Nav.Link>
          {/* <Nav.Link href="/test" className="header-bar-button">
            TEST
          </Nav.Link> */}
          <Nav.Link onClick={toggleLanguage} className="header-bar-translation">
            <TranslateIcon />
          </Nav.Link>
          
        </div>
      ) : (
        <div className="header-bar">
          <Nav.Link href="/cn" className="header-bar-button">
            主页
          </Nav.Link>
          <Nav.Link href="/cn/about" className="header-bar-button">
            关于
          </Nav.Link>
          {/* <Nav.Link href="/cn/blog" className="header-bar-button">
            博客
          </Nav.Link> */}
          <Nav.Link href="/cn/contact" className="header-bar-button">
            沟通
          </Nav.Link>
          <Nav.Link onClick={toggleLanguage} className="header-bar-translation">
            <TranslateIcon />
          </Nav.Link>
        </div>
      )}
    </>
  );
};

export default Header;
