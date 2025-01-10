import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const divRef = useRef(null); // 引用目标 div
  const [visibleTop, setVisibleTop] = useState(0); // 保存可视顶端距离

  useEffect(() => {
    const updateVisibleTop = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setVisibleTop(rect.top); // 获取元素与可视窗口顶端的距离
      }
    };

    // 初始化距离
    updateVisibleTop();

    // 添加滚动监听事件
    window.addEventListener("scroll", updateVisibleTop);

    return () => {
      window.removeEventListener("scroll", updateVisibleTop); // 清除监听器
    };
  }, []);

  return (
    <div>
      <div
        style={{
          height: "200vh", // 模拟长页面
          backgroundColor: "lightgray",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "20px" }}>
          Scroll Down to Check Visible Top
        </h1>
      </div>

      <div
        ref={divRef}
        style={{
          height: "100px",
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
          lineHeight: "100px",
          margin: "50px",
        }}
      >
        Target Div (Visible Top: {visibleTop.toFixed(2)} px)
      </div>

      <div
        style={{
          height: "200vh",
          backgroundColor: "lightgray",
        }}
      ></div>
    </div>
  );
};

export default Test;
