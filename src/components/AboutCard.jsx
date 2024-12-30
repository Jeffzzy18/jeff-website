import React, { useEffect, useRef } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const AboutCard = ({ title, description, image }) => {
  return (
    <>
      <div className="about-section1-card">
        <Card
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "100px",
            minHeight: "600px",

            // marginBottom:"20px"
            // border: "0px",
          }}
        >
          <CardActionArea sx={{ width: "60%", marginLeft: "40px" }}>
            {/* 图片的css */}
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                aspectRatio: "16/9", // 固定为 16:9 的长宽比例
                objectFit: "cover", // 根据需要设置图片的填充方式
                width: "100%",
                minWidth: "150px",
              }}
            />
            {/* title的css */}
            <div
              style={{
                // height: "100px",
                paddingTop: "20px",
                width: "70%",
                fontSize: "2rem",
                fontWeight: "bold",
                height: "100%",
              }}
            >
              {title}
            </div>
          </CardActionArea>
          <div
            style={{
              width: "50%",
              //   color: "red",
              whiteSpace: "pre-wrap",
              marginRight: "40px",
            }}
          >
            {description}
          </div>
        </Card>
      </div>
    </>
  );
};

export default AboutCard;
