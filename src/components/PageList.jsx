import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";



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
    const [language, setLanguage] = useState("en")
  
  return (
    <>
      <Header setLanguage={setLanguage}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cn" element={<LandingPage_cn />} />
        <Route path="/about" element={<About/>}/>
        <Route path="cn/about" element={<About_cn/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="cn/blog" element={<Blog_cn/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="cn/contact" element={<Contact_cn/>}/>
      </Routes>
      <Footer language={language}/>
    </>
  );
};
export default PageList;
