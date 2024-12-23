import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import LandingPage_cn from "./LandingPage_cn";
import About from "./About.jsx";
import About_cn from "./About_cn.jsx";
import Blog from "./Blog.jsx";
import Blog_cn from "./Blog_cn.jsx";
import Contact from "./Contact.jsx";
import Contact_cn from "./Contact_cn.jsx";

const PageList = () => {
//   const [language, setLanguage] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);
  const location = useLocation();
  const pathSegments = location.pathname.split("/"); // 分割路径
  const URL_language = pathSegments[1];

  useEffect(() => {
    if (URL_language === "cn") {
      localStorage.setItem("isEnglish", false);
      setIsEnglish(false);
    } else {
      localStorage.setItem("isEnglish", true);
      setIsEnglish(true);
    }
  }, [URL_language]);

  return (
    <>
      <Header setIsEnglish={setIsEnglish} isEnglish = {isEnglish}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cn" element={<LandingPage_cn />} />
        <Route path="/about" element={<About />} />
        <Route path="cn/about" element={<About_cn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="cn/blog" element={<Blog_cn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="cn/contact" element={<Contact_cn />} />
      </Routes>
      <Footer setIsEnglish={setIsEnglish} isEnglish = {isEnglish}/>
    </>
  );
};
export default PageList;
