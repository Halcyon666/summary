import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { Timeline, Progress } from 'antd';

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
          <Link className="button button--secondary button--lg" to="/intro">
            See all my blogs
          </Link>
        </div>
      </div>
    </header>
  );
}

function MyTimeLine() {
  return  (
    // here is a warning
    <Timeline style={{ marginTop: '10px', color: 'pink' }}
    mode="alternate"
    items={[
      {
        children: 'Create a services site 2023-07-14',
      },
      {
        children: 'Starting learn React 2024-01-22',
        color: 'green',
      }
    ]}
  />
  
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout  
      title={`${siteConfig.title}`}
      description="Welcome to halcyon666's blog"
    >
      <HomepageHeader />
      <MyTimeLine  />
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Progress type="circle" percent={0} size={50} style={{ margin: '10px' }} />
    </div>
    </Layout>
  );
}
