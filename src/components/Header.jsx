import React, { useState, useEffect } from "react";
import "../App.css";

import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import TranslateIcon from "@mui/icons-material/Translate";

const Header = ({ setLanguage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/"); // 分割路径
  const URL_language = pathSegments[1];

  useEffect(() => {
    if (URL_language === "cn") {
      localStorage.setItem("language", "cn");
      setLanguage("cn");
    } else {
      localStorage.setItem("language", "en");
      setLanguage("en");
    }
  }, [URL_language]);

  const toggleLanguage = () => {
    localStorage.getItem("language") === "cn"
      ? localStorage.setItem("language", "en")
      : localStorage.setItem("language", "cn");

    navigate(localStorage.getItem("language") === "en" ? "/" : "/cn");
  };

  //   useEffect(() => {

  //     // 同步 localStorage 语言
  //     // language === "cn"
  //     // ? localStorage.setItem("language", "cn")
  //     // : localStorage.setItem("language", "en");
  //   }, [language]);
  console.log(localStorage.getItem("language"));

  return (
    <>
      {localStorage.getItem("language") === "en" ? (
        <div className="header-bar">
          <Nav.Link href="/" className="header-bar-button">
            HOME
          </Nav.Link>
          <Nav.Link href="/about" className="header-bar-button">
            ABOUT
          </Nav.Link>
          <Nav.Link href="/blog" className="header-bar-button">
            BLOG
          </Nav.Link>
          <Nav.Link href="/contact" className="header-bar-button">
            CONTACT
          </Nav.Link>
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
          <Nav.Link href="/cn/blog" className="header-bar-button">
            博客
          </Nav.Link>
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
