import React, { JSX } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
            style={{
              marginRight: "10px",
              borderRadius: "8px",
              padding: "0.8rem 1.5rem",
            }}
          >
            <Translate id="homepage.exploreBlogs">Explore Blogs</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/about"
            style={{
              borderRadius: "8px",
              padding: "0.8rem 1.5rem",
            }}
          >
            <Translate id="homepage.aboutMe">About Me</Translate>
          </Link>

        </div>
      </div>
    </header>
  );
}

const KNOWLEDGE_MAP = [
  {
    title: '运维与架构',
    description: '深入 Docker、Kubernetes、CI/CD 及云原生基础设施建设。',
    link: '/devops',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  },
  {
    title: '后端开发',
    description: '探索 Java 核心、Spring Boot微服务架构及企业级设计模式。',
    link: '/background',
    icon: '☕',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
  },
  {
    title: '前端沉淀',
    description: '掌握 React、现代 TS 栈开发及前沿 Web 交互技术。',
    link: '/Frontend',
    icon: '⚛️',
    gradient: 'linear-gradient(135deg, #b06ab3 0%, #4568dc 100%)',
  },
  {
    title: 'AI 与大数据',
    description: '关注大语言模型探索、Prompt 工程及大数据处理体系。',
    link: '/ai-bigdata',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    title: '效能工具箱',
    description: '沉淀 Git 规范、终端进阶、自动化脚本与最高效的开发利器。',
    link: '/tools',
    icon: '🛠️',
    gradient: 'linear-gradient(135deg, #373B44 0%, #4286f4 100%)',
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Explore blogs, tutorials, and more by halcyon666"
    >
      <HomepageHeader />
      <main className={styles.knowledgeSection}>
        <div className={styles.knowledgeGrid}>
          {KNOWLEDGE_MAP.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className={styles.knowledgeCard}
              style={{ background: item.gradient }}
            >
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
