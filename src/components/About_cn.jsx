import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import about_pic1 from "../assets/about-pic1.png";
import about_pic2 from "../assets/about-pic2.png";
import about_pic3 from "../assets/about-pic3.png";
import about_pic4 from "../assets/about-pic4.png";
import about_pic5 from "../assets/about-pic5.png";
import about_pic6 from "../assets/about-pic6.png";
import about_pic7 from "../assets/about-pic7.png";

const About_cn = () => {
  const cardDataList = [
    {
      title: "用于智能城市应用的高级图像分割技术",
      description:
        "- 领导了一个项目，重点是在智慧城市背景下增强用于高精度图像分割的深度学习模型，从而显著改善城市规划、交通管理和环境监测解决方案。\n\n" +
        "- 将最先进的注意力机制集成到 YOLOv7、YOLOv8、SSD、Faster R-CNN 和 Mask R-CNN 等分割模型中，以优先处理复杂城市景观图像中的关键区域，从而提高模型的准确性和效率。\n\n" +
        "- 使用包含关键城市实例标签的 Cityscapes 数据集，进行了广泛的数据分析和模型训练。\n\n",
      image: about_pic1,
    },
    {
      title: "英语语言学习挑战，Kaggle",
      description:
        "- 实现了传统机器学习算法进行初步预测，并进阶到神经网络架构；最终部署了 DeBERTa 模型以优化并完善预测。\n\n" +
        "- 实现了较低的最终预测 MCRMSE，展现了高精度的反馈预测能力，大大促进了英语语言学习方法的改进。\n\n" +
        "- 通过一个深入的 NLP 项目掌握了文本预处理和模型训练技术，其中包括清理和准备数据以用于高级分析和预测建模。\n\n",
      image: about_pic2,
    },
    {
      title: "用于太阳能电池板检测的计算机视觉技术",
      description:
        "- 主导了一项研究项目，重点是利用电致发光（EL）成像技术提高光伏（PV）电池的健康评估，旨在提升太阳能电池板的效率和寿命。\n\n" +
        "- 开发并验证了先进的计算机视觉算法，用于检测和分类太阳能电池板中的缺陷。使用的技术包括 k 近邻、决策树和随机森林等机器学习模型，以及基于 YOLOv8 和 LSKNet 的前沿深度学习方法。\n\n" +
        "- 在自动化缺陷检测方面取得了显著进展，有助于更加可靠和可持续的太阳能解决方案的发展。此项目在向绿色和高能效未来迈进中发挥了重要作用。\n\n",
      image: about_pic3,
    },
    {
      title: "Slack 前端开发",
      description:
        "- 开发了一个受 Slack 启发的消息工具，实现在用户认证、频道管理和实时消息等关键功能。\n\n" +
        "- 使用 React 设计并构建了直观的用户界面，支持用户注册、登录和个人资料管理。\n\n" +
        "- 创建了支持消息发送、编辑、反应和固定的动态频道视图，通过 WebSocket 集成实现了无缝的实时更新。\n\n" +
        "- 实现了包括消息无限滚动、推送通知和通过本地存储缓存的离线访问等高级功能。\n\n" +
        "- 集成了用于后端交互的 API，并通过用户友好的反馈机制确保了强大的错误处理能力。\n\n" +
        "- 优化了应用程序的可用性和性能，增强了协作消息平台的整体用户体验。\n\n",
      image: about_pic4,
    },
    {
      title: "Airbnb 前端开发",
      description:
        "- 使用 ReactJS 并遵循 RESTful API 规范开发了 AirBnB 的前端。\n\n" +
        "- 实现了包括用户认证、物业列表管理和动态搜索功能等关键特性，确保了高水平的 UI/UX 和可访问性标准。\n\n" +
        "- 采用现代 JavaScript (ES6+)、ReactJS hooks 和路由技术构建了一个无刷新、实时状态更新的单页应用 (SPA)。\n\n" +
        "- 使用 Cypress 等工具进行了全面的组件测试和 UI 测试，确保了应用程序的性能和可靠性。\n\n",
      image: about_pic5,
    },
    {
      title: "课程洞察与技能匹配平台的全栈开发项目",
      description:
        "- 使用 Flask 开发了后端，结合 React 和 Material-UI 构建前端，并使用 MySQL 作为数据库，设计并开发了一个全面的课程管理系统。\n\n" +
        "- 实现了学生创建和加入项目的功能，促进了平台内的协作与参与。同时开发了实时聊天窗口功能，允许用户即时交流。\n\n" +
        "- 使用 Docker 对整个应用进行容器化，简化了部署并确保了环境的一致性。\n\n" +
        "- 探索并集成了多种模型，包括 Ollama phi3、llama3，以及 ChatGPT（3.5 / 4）以提取技能和总结课程。\n\n" +
        "- 通过 Jira 与团队成员高效协作，进行任务管理、进度跟踪，并确保项目生命周期中的顺畅沟通。\n\n",
      image: about_pic6,
    },
    {
      title: "基于有限数据的智能简历匹配合成数据集",
      description:
        "- 设计并实施了一种方法生成用于简历与职位描述匹配的合成数据集，解决了缺乏带有标注适配度的大规模开源数据集的问题。\n\n" +
        "- 构建了网页爬取管道以收集多样化的简历和职位描述，并应用了 TF-IDF + 余弦相似度、Flan-T5 和 GPT-4 模型等启发式标注方法。\n\n" +
        "- 开发并测试了包括 Dual BigBird 和 XGBoost 在内的先进机器学习与 NLP 模型，提升了简历与职位匹配分类的预测准确性。\n\n" +
        "- 通过手动审查、t-SNE 可视化和标准指标（准确率、F1 值）进行了广泛评估，优化了数据集质量和模型性能。\n\n" +
        "- 提出了生成更大数据集和改进简历匹配算法的可扩展解决方案，适用范围更广。\n\n",
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
              entry.target.classList.add(
                "about-section1-card-description-exit-up"
              );
            } else if (isBelowViewport) {
              entry.target.classList.remove(
                "about-section1-card-description-exit-up"
              );
            }
          }
        } else if (scrollDirection === "down") {
          if (!entry.isIntersecting) {
            if (isAboveViewport) {
              entry.target.classList.remove(
                "about-section1-card-description-exit-down"
              );
            } else if (isBelowViewport) {
              entry.target.classList.add(
                "about-section1-card-description-exit-down"
              );
            }
          }
        }

        if (entry.isIntersecting) {
          entry.target.classList.remove(
            "about-section1-card-description-exit-up"
          );
          entry.target.classList.remove(
            "about-section1-card-description-exit-down"
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
      <div className="about-section1-card-total">
        <div className="about-section1-card">
          <img
            src={value.image}
            alt={value.title}
            className="about-section1-card-image"
          />
        </div>
        <div className="about-section1-card-title">{value.title}</div>
      </div>
    );
  });

  return (
    <div className="about">
      <div className="about-section-text">
        <div className="about-text">
          环游世界，通过创新技术和创造性解决方案启发并激励人们的能力。
          <ul>
            <li>- 人工智能硕士，毕业于新南威尔士大学。</li>
            <li>- 精通智能算法的全栈开发。</li>
            <li>- 融合技术与艺术的创造者，提供有影响力的解决方案。</li>
          </ul>
        </div>
      </div>

      <div className="about-section1">
        {sections.map((section, i) => (
          <div
            className="about-one-section"
            ref={(el) => (visibleTopsSectionsRef.current[i] = el)}
          >
            <section
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="about-section1-card-description-section"
            >
              <div>{section}</div>
            </section>
            <div className="about-section1-card-description-text">
              {cardDataList[i].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About_cn;
