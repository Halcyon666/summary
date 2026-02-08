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
            Explore Blogs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/about"
            style={{
              borderRadius: "8px",
              padding: "0.8rem 1.5rem",
            }}
          >
            About Me
          </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Explore blogs, tutorials, and more by halcyon666"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.featureSection}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
            Featured Blogs
          </h2>
          <p style={{ marginBottom: "20px", textAlign: "center" }}>
            Check out some of the most popular articles!
          </p>
          <div
            className={styles.featureGrid}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              padding: "0 2rem",
            }}
          >
            <Link
              to="/frontend/react/basic-react"
              className={styles.featureCard}
            >
              <h3><Translate id="homepage.reactTutorial">React 教程</Translate></h3>
              <p><Translate id="homepage.reactTutorialDesc">学习 React 基础并构建出色的应用。</Translate></p>
            </Link>
            <Link
              to="/devops/docker/Docker-Command-and-Dockerfile"
              className={styles.featureCard}
            >
              <h3><Translate id="homepage.dockerGuide">Docker 指南</Translate></h3>
              <p><Translate id="homepage.dockerGuideDesc">掌握 Docker 容器化技术。</Translate></p>
            </Link>
            <Link
              to="/background/Java/design-pattern/functional-register-engine"
              className={styles.featureCard}
            >
              <h3><Translate id="homepage.functionalRegisterEngine">Java 函数式注册引擎</Translate></h3>
              <p><Translate id="homepage.functionalRegisterEngineDesc">探索函数式注册引擎的设计。</Translate></p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
