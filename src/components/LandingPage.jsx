import React, { useEffect, useRef } from "react";
import "../App.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LandingPage = () => {
  const sectionsRef = useRef([]); // 存储所有 sections 的引用

  useEffect(() => {
    const options = {
      threshold: 0.5, // 50% 可见时触发
    };

    // 初始化 IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("landingPage-hidden"); // 可见时移除类名
        } else {
          entry.target.classList.add("landingPage-hidden"); // 不可见时添加类名
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
  }, []);

  const section1 = (
    <div className="landingPage-section1-box">
      <div className="landingPage-section1-name">Zhaoye Zhang</div>
      <div className="landingPage-section1-position">
        Artificial Intelligence Engineer & Full Stack Developer
      </div>
    </div>
  );
  const section2 = (
    <div className="landingPage-section2-box">
      <div className="landingPage-section2-story">
        <p>
          Jeff Zhang is a passionate Master's graduate in Artificial
          Intelligence from the University of New South Wales, having graduated
          in September 2024. His interests span AI and full-stack development,
          with a particular focus on frontend design and intelligent algorithm
          applications. He enjoys exploring the fusion of technology and
          creativity to develop practical solutions.
        </p>
        <br />
        <p>His tech stack includes:</p>
        <ul>
          <li>Programming Languages: Python, JavaScript, C</li>
          <li>Frameworks & Tools: React, Flask, Docker, Git, Jira</li>
          <li>
            Data Science & Machine Learning: Pandas, Scikit-learn, PyTorch, YOLO
          </li>
        </ul>
        <br />

        <p>His Journey:</p>
        <ul>
          <li>
            Enhancing solar panel inspection efficiency through computer vision
            for sustainable energy development.
          </li>
          <li>
            Implementing precise image segmentation in smart city applications
            to optimize urban management.
          </li>
          <li>
            Completing enterprise website restructuring using ReactJS to enhance
            user experience.
          </li>
        </ul>

        <p>
          In addition, Jeff actively engages in data-driven challenge projects
          (like Kaggle), gaining valuable practical experience.
        </p>
        <br />
        <p>
          He believes that technology is not just a tool, but a force for
          changing the world. Through technological innovation, Jeff aims to
          explore new possibilities and transform solutions into tangible
          impacts.
        </p>

        <p>
          If his experiences or projects interest you, feel free to reach out
          via email or visit his GitHub for more information!
        </p>
      </div>

      <div className="andingPage-section2-contact-button">
        

          <Button variant="text">GET IN TOUCH</Button>
          
       
      </div>
    </div>
  );

  const sections = [section1, section2];

  return (
    <>
      <div className="landingPage-container">
        {sections.map((section, i) => (
          <section
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)} // 将元素存入 refs
            className="landingPage-section landingPage-hidden" // 初始设置为隐藏
          >
            <div className="landingPage-inner-div">{section}</div>
          </section>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
