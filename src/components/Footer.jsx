import React, { useState, useEffect } from "react";
import "../App.css";

const Footer = ({language}) => {


  return (
    <>
      {language === "en" ? (
        <div className="footer-bar">footer</div>
      ) : (
        <div className="footer-bar">脚页</div>
      )}
    </>
  );
};

export default Footer;
