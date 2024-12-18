import React, { useEffect, useRef } from "react";
import "../App.css";

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

    // 观察所有 sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // 清理函数：停止观察
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const section1 = (
    <div className="landingPage-section1-box">
      <>section1</>
    </div>
  );
  const section2 = (
    <div className="landingPage-section2-box">
      <>section2</>
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
