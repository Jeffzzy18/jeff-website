import React, { useEffect, useRef } from "react";
import "../App.css";

import Button from "@mui/material/Button";

const LandingPage_cn = () => {
  const sectionsRef = useRef([]); // 存储所有 sections 的引用

  useEffect(() => {
    const options = {
      threshold: 0.5, // 50% 可见时触发
    };

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
      <div className="landingPage-section1-name">张兆烨</div>
      <div className="landingPage-section1-position">
        人工智能 & 全栈开发工程师
      </div>
      <div className="landingPage-section1-avatar"></div>
    </div>
  );
  const section2 = (
    <div className="landingPage-section2-box">
      <div className="landingPage-section2-story">
        <p>
          张兆烨是一名热情洋溢的人工智能硕士毕业生，于 2024 年 9
          月毕业于新南威尔士大学。他的兴趣涵盖人工智能和全栈开发，尤其专注于前端设计和智能算法的应用。他热衷于探索技术与创意的融合，以开发实用的解决方案。
        </p>
        <br />
        <p>他的技术栈包括:</p>
        <ul>
          <li>编程语言: Python, JavaScript, C</li>
          <li>框架与工具: React, Flask, Docker, Git, Jira</li>
          <li>数据科学与机器学习: Pandas, Scikit-learn, PyTorch, YOLO</li>
        </ul>
        <br />

        <p>他的经历:</p>
        <ul>
          <li>通过计算机视觉提高太阳能电池板检测效率，促进可持续能源发展。</li>
          <li>在智慧城市应用中实施精确图像分割，优化城市管理。</li>
          <li>使用 ReactJS 完成企业网站重组，提升用户体验。</li>
        </ul>
        <br />
        <p>
          此外，他还积极参与数据驱动的挑战项目（如Kaggle），积累了宝贵的实践经验。
        </p>
        <br />
        <p>
          他认为，技术不仅是一种工具，更是一种改变世界的力量。通过技术创新，张兆烨
          致力于探索新的可能性，并将解决方案转化为实实在在的影响。
        </p>
        <br />
        <p>
          如果您对他的经历或项目感兴趣，请随时通过电子邮件联系他，或访问他的
          GitHub 了解更多信息！
        </p>
      </div>

      <div className="landingPage-section2-contact-button">
        <Button variant="text">
          <a href="/cn/contact">立即沟通</a>
        </Button>
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
export default LandingPage_cn;
