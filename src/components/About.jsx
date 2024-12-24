import React from "react";
import "../App.css";
import AboutCard from "./AboutCard";
import about_pic1 from "../assets/about-pic1.png"
import about_pic2 from "../assets/about-pic2.png"
import about_pic3 from "../assets/about-pic3.png"

const About = () => {
  const cardDataList = [
    {
      title: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
      image: about_pic1,
    },
    {
      title: "Chameleon",
      description:
        "Chameleons are known for their ability to change colors and blend into their surroundings.",
      image: about_pic2,
    },
    {
      title: "Iguana",
      description:
        "Iguanas are herbivorous lizards that are native to Central and South America.",
      image: about_pic3,
    },
  ];

  return (
    <div className="about">
      <div className="about-section-text">
        <div className="about-text">
          Traveling the World inspiring and empowering people through innovative
          technology and creative solutions.
          <ul>
            <li>- Master's in AI, University of New South Wales.</li>
            <li>- Fullstack developer with intelligent algorithm expertise.</li>
            <li>- Creator merging technology and art for impactful solutions.</li>
          </ul>
        </div>
      </div>

      <div className="about-section1"></div>
      {/* 使用 .map() 遍历数组 */}
      {cardDataList.map((card, index) => (
        <AboutCard
          key={index} // 使用唯一键值，建议用索引或唯一 ID
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default About;
