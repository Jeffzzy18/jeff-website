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

const About_cn = () => {
    const cardDataList = [
        {
          title: "用于智能城市应用的高级图像分割技术",
          description:
            "- 领导了一个项目，重点是在智慧城市背景下增强用于高精度图像分割的深度学习模型，从而显著改善城市规划、交通管理和环境监测解决方案。\n\n" +
            "- 将最先进的注意力机制集成到 YOLOv7、YOLOv8、SSD、Faster R-CNN 和 Mask R-CNN 等分割模型中，以优先处理复杂城市景观图像中的关键区域，从而提高模型的准确性和效率。\n\n" +
            "- 进行了广泛的数据分析和模型训练，使用 Cityscapes 数据集，该数据集包含关键城市实例的详细标签。\n\n",
          image: about_pic1,
        },
        {
          title: "Feedback Price - 英语学习挑战（Kaggle）",
          description:
            "- 实现了传统的机器学习算法进行初步预测，并进一步采用神经网络架构；最终部署了 DeBERTa 模型以优化预测结果。\n\n" +
            "- 实现了较低的最终预测 MCRMSE，展示了在反馈预测中的高精度，这极大地促进了英语学习方法的改进。\n\n" +
            "- 通过一个深入的自然语言处理项目掌握了文本预处理和模型训练的专业知识，包括清洗和准备数据以进行高级分析和预测建模。\n\n",
          image: about_pic2,
        },
        {
          title: "太阳能电池板检测的计算机视觉技术",
          description:
            "- 主导了一个研究项目，聚焦于利用电致发光（EL）成像技术提升光伏（PV）电池的健康评估，以提高太阳能电池板的效率和寿命。\n\n" +
            "- 开发并验证了先进的计算机视觉算法，用于检测和分类太阳能电池板的缺陷。采用的技术包括 k-最近邻、决策树和随机森林等机器学习模型，以及使用 YOLOv8 和 LSKNet 的最新深度学习方法。\n\n" +
            "- 在自动缺陷检测方面取得了显著进展，为更可靠和可持续的太阳能解决方案做出了贡献。该项目在推动向更加绿色和节能的未来发展中发挥了重要作用。\n\n",
          image: about_pic3,
        },
        {
          title: "Slack 前端开发",
          description:
            "- 开发了一款受 Slack 启发的消息工具，实现了用户认证、频道管理和实时消息等关键功能。\n\n" +
            "- 使用 React 设计并构建了用户注册、登录和个人资料管理的直观用户界面。\n\n" +
            "- 创建了支持消息发送、编辑、反应和置顶的动态频道视图，并通过 WebSocket 集成实现了无缝实时更新。\n\n" +
            "- 实现了包括消息列表的无限滚动、推送通知以及通过本地存储缓存实现的离线访问等高级功能。\n\n" +
            "- 集成了后端交互的 API，确保了强大的错误处理能力并提供用户友好的反馈机制。\n\n" +
            "- 优化了应用程序的可用性和性能，提升了协作消息平台的整体用户体验。\n\n",
          image: about_pic4,
        },
        {
          title: "Airbnb 前端开发",
          description:
            "- 使用 ReactJS 开发了 Airbnb 的前端，并遵循 RESTful API 规范。\n\n" +
            "- 实现了用户认证、房源管理和动态搜索功能，确保了高水平的用户界面/用户体验（UI/UX）和可访问性标准。\n\n" +
            "- 利用现代 JavaScript（ES6+）、ReactJS hooks 和路由技术构建了无缝的单页应用（SPA），实现实时状态更新，无需页面刷新。\n\n" +
            "- 通过 Cypress 等工具进行了全面的组件测试和 UI 测试，确保了应用程序的性能和可靠性。\n\n",
          image: about_pic5,
        },
        {
          title:
            "课程洞察与技能匹配平台项目的全栈开发",
          description:
            "- 使用 Flask 构建后端，React 和 Material-UI 构建前端，以及 MySQL 数据库，设计并开发了一个全面的课程管理系统。\n\n" +
            "- 启用了学生创建和加入项目的功能，促进了平台内的协作和参与感。实现了实时聊天窗口功能，允许用户在网站上即时交流。\n\n" +
            "- 使用 Docker 对整个应用程序进行了容器化，简化了部署流程，并确保了跨环境的一致性。\n\n" +
            "- 探索并集成了 Ollama phi3、llama3 和 ChatGPT（3.5/4）等模型，用于技能提取和课程摘要。\n\n" +
            "- 在项目生命周期中，利用 Jira 进行任务管理、进度跟踪，并确保了团队内的高效沟通。\n\n",
          image: about_pic6,
        },
        {
          title:
            "智能简历匹配的合成数据集项目",
          description:
            "- 设计并实施了一种方法，用于生成简历与职位描述匹配的合成数据集，解决了标注良好的大规模开源数据集的缺乏问题。\n\n" +
            "- 构建了网络爬虫管道，用于收集多样化的简历和职位描述，并应用 TF-IDF + 余弦相似度、Flan-T5 和 GPT-4 等启发式标注方法。\n\n" +
            "- 开发并测试了包括 Dual BigBird 和 XGBoost 在内的高级机器学习和 NLP 模型，实现了简历与职位匹配分类的预测准确率提升。\n\n" +
            "- 通过人工审查、t-SNE 可视化和标准指标（准确率、F1 分数）进行了广泛评估，优化了数据集质量和模型性能。\n\n" +
            "- 提出了生成更大数据集的可扩展解决方案，并改进了简历匹配算法的适用性。\n\n",
          image: about_pic7,
        },
      ];
    
  const sectionsRef = useRef([]); // 存储所有 sections 的引用

  useEffect(() => {
    const options = {
      threshold: 0.5, // 50% 可见时触发
    };

    // 初始化 IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(
            "about-section1-card-description-hidden"
          ); // 可见时移除类名
        } else {
          entry.target.classList.add("about-section1-card-description-hidden"); // 不可见时添加类名
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
  const sections = [];
  cardDataList.forEach((value, index) => {
    sections.push(
      <>
        <div className="about-section1-text-one">{value.description}</div>
      </>
    );
  });
  //   console.log(sections);

  return (
    <div className="about">
      <div className="about-section-text">
        <div className="about-text">
          周游世界，通过创新技术和创造性解决方案激励和增强人们的能力。
          <ul>
            <li>- 新南威尔士大学人工智能硕士。</li>
            <li>- 拥有智能算法专业知识的全栈开发人员。</li>
            <li>
              - 融合技术与艺术的创造者，提供有影响力的解决方案。
            </li>
          </ul>
        </div>
      </div>

      <div className="about-section1">
        <div className="about-section1-pic">
          {cardDataList.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              className="landingPage-section landingPage-hidden"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default About_cn;
