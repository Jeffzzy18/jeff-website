import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import AboutCard from "./AboutCard";
import about_pic1 from "../assets/about-pic1.png";
import about_pic2 from "../assets/about-pic2.png";
import about_pic3 from "../assets/about-pic3.png";
import about_pic4 from "../assets/about-pic4.png";
import about_pic5 from "../assets/about-pic5.png";
import about_pic6 from "../assets/about-pic6.png";
import about_pic7 from "../assets/about-pic7.png";

const Test = () => {
  const cardDataList = [
    {
      title: "Advanced Image Segmentation for Smart City Applications",
      description:
        "- Led a project focused on enhancing deep learning models for high-precision image segmentation within smart city contexts, significantly improving urban planning, traffic management, and environmental monitoring solutions.\n\n" +
        "- Integrated state-of-the-art attention mechanisms into segmentation models such as YOLOv7, YOLOv8, SSD, Faster R-CNN, and Mask R-CNN to prioritize critical regions in complex cityscape images, boosting model accuracy and efficiency.\n\n" +
        "- Conducted extensive data analysis and model training using the Cityscapes dataset, which includes detailed instance labels for crucial urban\n\n",
      image: about_pic1,
    },
    {
      title: "Feedback Price - English Language Learning Challenge, Kaggle",
      description:
        "- Implemented traditional machine learning algorithms for initial predictions, and advanced to neural network architectures; ultimately deployed a DeBERTa model to refine and finalize predictions.\n\n" +
        "- Achieved a low final prediction MCRMSE, demonstrating high precision in feedback predictions which greatly facilitated the improvement of English language learning methodologies.\n\n" +
        "- Gained expertise in text preprocessing and model training through an intensive NLP project, which involved cleaning and preparing data for advanced analysis and predictive modeling.\n\n",
      image: about_pic2,
    },
    {
      title: "Computer Vision for Solar Panel Inspection",
      description:
        "- Spearheaded a research project focused on enhancing the health assessment of photovoltaic (PV) cells using Electroluminescence (EL) imaging, aiming to improve the efficiency and lifespan of solar panels.\n\n" +
        "- Developed and validated advanced computer vision algorithms to detect and classify defects in solar panels. Techniques employed include machine learning models such as k-nearest neighbors, decision trees, and random forests, alongside cutting-edge deep learning approaches using YOLOv8 and LSKNet.\n\n" +
        "- Achieved significant advancements in automated defect detection, contributing to more reliable and sustainable solar energy solutions. This project plays a crucial role in moving towards a greener and more energy-efficient future.\n\n",
      image: about_pic3,
    },
    {
      title: "Frontend Development for Slack",
      description:
        "- Developed a messaging tool inspired by Slack, implementing key functionalities such as user authentication, channel management, and real-time messaging.\n\n" +
        "- Designed and built intuitive user interfaces for user registration, login, and profile management using React.\n\n" +
        "- Created dynamic channel views supporting message sending, editing, reactions, and pinning, with seamless real-time updates through WebSocket integration.\n\n" +
        "- Implemented advanced features including infinite scroll for message feeds, push notifications, and offline access using local storage caching.\n\n" +
        "- Integrated APIs for backend interaction and ensured robust error handling with user-friendly feedback mechanisms.\n\n" +
        "- wOptimized the application's usability and performance, enhancing the overall user experience in a collaborative messaging platform.\n\n",
      image: about_pic4,
    },
    {
      title: "Frontend Development for Airbnb",
      description:
        "- Developed the frontend for AirBnB, using ReactJS and adhering to a RESTful API specification.\n\n" +
        "- Implemented key features including user authentication, property listings management, and dynamic search capabilities, ensuring high UI/UX and accessibility standards.\n\n" +
        "- Employed modern JavaScript (ES6+), ReactJS hooks, and router techniques for building a seamless single-page application (SPA) that operates with real-time state updates without page refreshes.\n\n" +
        "- Conducted comprehensive component testing and UI testing to ensure robust application performance and reliability, using tools like Cypress for end-to-end testing.\n\n",
      image: about_pic5,
    },
    {
      title:
        "Full Stack Development for Course Insight and Skills Alignment Platform Project",
      description:
        "- Designed and developed a comprehensive course management system using Flask for the backend, React and Material-UI for the frontend, and MySQL for the database.\n\n" +
        "- Enabled students to create and join projects, fostering collaboration and engagement within the platform. Implemented a real-time chat window feature, allowing users to communicate instantly on the website.\n\n" +
        "- Containerized the entire application using Docker to streamline deployment and ensure consistency across environments.\n\n" +
        "- Explored and integrated various models, including Ollama phi3 and llama3, and ChatGPT (3.5 / 4) for skills extraction and course summarization.\n\n" +
        "- Collaborated effectively with all team members using Jira for task management, tracking progress, and ensuring smooth communication throughout the project lifecycle.\n\n",
      image: about_pic6,
    },
    {
      title:
        "Synthetic Dataset for Intelligent Resume Matching with Limited Data",
      description:
        "- Designed and implemented a methodology to generate a synthetic dataset for resume-job description matching, addressing the lack of large-scale open-source datasets with labeled goodness-of-fit.\n\n" +
        "- Built web-scraping pipelines to collect diverse resumes and job descriptions, applying heuristic labeling methods like TF-IDF + cosine similarity, Flan-T5, and GPT-4 models.\n\n" +
        "- Developed and tested advanced machine learning and NLP models, including Dual BigBird and XGBoost, achieving enhanced prediction accuracy for resume-job fit classification.\n\n" +
        "- Conducted extensive evaluations using manual review, t-SNE visualizations, and standard metrics (accuracy, F1 score), optimizing dataset quality and model performance.\n\n" +
        "- Proposed scalable solutions for generating larger datasets and improving resume matching algorithms for broader applicability.\n\n",
      image: about_pic7,
    },
  ];
  const [scrollDirection, setScrollDirection] = useState(null); // 滚动方向
  const [lastScrollY, setLastScrollY] = useState(0); // 上一次滚动位置
  const [isFixed, setIsFixed] = useState("false");
  const sectionsRef = useRef([]); // 用于存储每个 section 的引用
  const visibleTopsSectionsRef = useRef([]); // 用于存储每个 section 的引用
  const [visibleTops, setVisibleTops] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY); // 更新上一次滚动位置
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  useEffect(() => {
    const handleScroll = () => {
      const updatedTops = visibleTopsSectionsRef.current.map((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top.toFixed(2); // 获取相对于可视窗口顶部的距离
        }
        return null;
      });
      setVisibleTops(updatedTops); // 更新距离
    };

    // 添加滚动监听
    window.addEventListener("scroll", handleScroll);

    // 初始化获取距离
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll); // 清除滚动监听
    };
  }, []);
  useEffect(() => {
    const options = {
      threshold: 0.5, // 50% 可见时触发
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const boundingClientRect = entry.target.getBoundingClientRect();
        const isAboveViewport = boundingClientRect.bottom < 0; // 图片在视口上方
        const isBelowViewport = boundingClientRect.top > window.innerHeight; // 图片在视口下方

        if (scrollDirection === "up") {
          if (!entry.isIntersecting) {
            if (isAboveViewport) {
              // 上面的图片，向上消失
              entry.target.classList.add(
                "test-section1-card-description-exit-up"
              );
              entry.target.classList.remove(
                "test-section1-card-description-enter-up"
              );
            } else if (isBelowViewport) {
              // 下面的图片，向上出现
              entry.target.classList.add(
                "test-section1-card-description-enter-up"
              );
              entry.target.classList.remove(
                "test-section1-card-description-exit-up"
              );
            }
          }
        } else if (scrollDirection === "down") {
          if (!entry.isIntersecting) {
            if (isAboveViewport) {
              // 上面的图片，向下出现
              entry.target.classList.add(
                "test-section1-card-description-enter-down"
              );
              entry.target.classList.remove(
                "test-section1-card-description-exit-down"
              );
            } else if (isBelowViewport) {
              // 下面的图片，向下消失
              entry.target.classList.add(
                "test-section1-card-description-exit-down"
              );
              entry.target.classList.remove(
                "test-section1-card-description-enter-down"
              );
            }
          }
        }

        // 图片进入视口时，移除所有隐藏类
        if (entry.isIntersecting) {
          entry.target.classList.remove(
            "test-section1-card-description-exit-up"
          );
          entry.target.classList.remove(
            "test-section1-card-description-exit-down"
          );
          entry.target.classList.remove(
            "test-section1-card-description-enter-up"
          );
          entry.target.classList.remove(
            "test-section1-card-description-enter-down"
          );
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [scrollDirection]);

  const sections = [];
  cardDataList.forEach((value, index) => {
    sections.push(
      <div style={{ minWidth: "150px", width: "50vw" }}>
        <div className="test-section1-card">
          <img
            src={value.image}
            alt={value.title}
            className="test-section1-card-image"
          />
        </div>
        <div className="test-section1-card-title">{value.title}</div>
      </div>
    );
  });

  return (
    <div className="about">
      <div className="about-section-text">
        <div className="about-text">
          Traveling the World inspiring and empowering people through innovative
          technology and creative solutions.
          <ul>
            <li>- Master's in AI, University of New South Wales.</li>
            <li>- Fullstack developer with intelligent algorithm expertise.</li>
            <li>
              - Creator merging technology and art for impactful solutions.
            </li>
          </ul>
        </div>
      </div>

      <div className="test-section1">
        {sections.map((section, i) => (
          <div
            className="test-one-section"
            ref={(el) => (visibleTopsSectionsRef.current[i] = el)}
          >
            <section
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="test-section1-card-description-section"
            >
              <div>{section}</div>
            </section>
            <div className="test-section1-card-description-text" >
              {cardDataList[i].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Test;
