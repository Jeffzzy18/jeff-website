import React, { useState, useEffect } from "react";
import "../App.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";

import enIcon from "../assets/en.svg";
import cnIcon from "../assets/cn.svg";

const LanguageSwitch = ({ isEnglish , setIsEnglish}) => {
    const navigate = useNavigate();
  
  const handleSwitchChange = (event) => {
    setIsEnglish(event.target.checked);
    localStorage.setItem("isEnglish", event.target.checked)
    console.log("Switch State:", event.target.checked ? "English" : "Chinese");
    navigate(localStorage.getItem("isEnglish") === "true" ? "/" : "/cn");
  };
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#ffffff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url(${enIcon})`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be", // 横条背景色
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#ffffff", // 小圆球的背景色
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${cnIcon})`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be", // 横条背景色
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={isEnglish}
            onChange={handleSwitchChange}
          />
        }
        label={isEnglish ? "Language" : "语言"} // 动态设置标签
        labelPlacement="end" // 确保标签在右侧
        sx={{
          "& .MuiFormControlLabel-label": {
            textAlign: "left", // 标签文字右对齐
            width: "100%", // 确保label占据整个宽度
            fontSize: "0.8rem",
          },
        }}
      />
    </FormGroup>
  );
};

export default LanguageSwitch;
