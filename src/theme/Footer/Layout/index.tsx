import React, {type ReactNode, useEffect} from 'react';
import Layout from '@theme-original/Footer/Layout';
import type LayoutType from '@theme/Footer/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const location = useLocation();

  useEffect(() => {
    // 确保仅在客户端运行
    if (typeof window === 'undefined') return;
    
    // 过滤本地开发环境
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return;

    // 过滤常见的搜索引擎和爬虫
    const ua = navigator.userAgent || '';
    const isBot = /bot|crawler|spider|crawling|Algolia|bing|duckduckgo|yandex|baidu|teoma|slurp|yeti/i.test(ua);
    if (isBot) return;

    // 清除旧的不蒜子脚本和遗留的 JSONP 节点，以便在单页路由切换时重新请求更新文章阅读量
    const oldScript = document.getElementById('busuanzi-script');
    if (oldScript) {
      oldScript.remove();
    }
    const jsonpScripts = document.querySelectorAll('script[src^="https://busuanzi.ibruce.info/busuanzi"]');
    jsonpScripts.forEach(s => s.remove());

    const script = document.createElement('script');
    script.id = 'busuanzi-script';
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.async = true;
    document.body.appendChild(script);
  }, [location.pathname]);

  return (
    <>
      <Layout {...props} />
    </>
  );
}
