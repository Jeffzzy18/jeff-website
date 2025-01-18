import React, { useState, useEffect } from "react";
import "../App.css";

import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MyIcon from "../assets/icon.png";
import TranslateIcon from "@mui/icons-material/Translate";
import { Height } from "@mui/icons-material";

const Header = ({ setIsEnglish, isEnglish }) => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const toggleLanguage = () => {
    console.log(isEnglish);
    let newPath;
    const currentPath = window.location.pathname;

    localStorage.getItem("isEnglish") === "false"
      ? localStorage.setItem("isEnglish", "true")
      : localStorage.setItem("isEnglish", "false");

    navigate(localStorage.getItem("isEnglish") === "true" ? "/" : "/cn");
    if (!isEnglish) {
      newPath = currentPath.startsWith("/cn")
        ? currentPath.replace(/^\/cn/, "")
        : currentPath;
    } else {
      newPath = currentPath.startsWith("/cn")
        ? currentPath
        : `/cn${currentPath}`;
    }

    navigate(newPath);
  };
  const handleClick = () => {
    // setClickCount((prevCount) => {
    //   const newCount = prevCount + 1;

    //   if (newCount === 3) {
    //
    //     return 0; // 重置计数器（可选）
    //   }

    //   return newCount;
    // });
    let count = clickCount;
    count += 1;
    setClickCount(count);
  };

  useEffect(() => {
    isEnglish === false
      ? localStorage.setItem("isEnglish", "false")
      : localStorage.setItem("isEnglish", "true");
  }, [isEnglish]);
  //   console.log(localStorage.getItem("language"));
  useEffect(() => {
    if (clickCount === 3) {
      navigate("/test");
      setClickCount(0);
    }
  }, [clickCount]);
  return (
    <>
      {isEnglish === true ? (
        <div className="header-bar">
          <img
            src={MyIcon}
            alt="my icon"
            className="header-bar-icon"
            onClick={handleClick}
          />
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
          <img
            src={MyIcon}
            alt="my icon"
            className="header-bar-icon"
            onClick={handleClick}
          />
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
