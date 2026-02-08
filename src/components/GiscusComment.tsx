import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';

export default function GiscusComment() {
  const { colorMode } = useColorMode();
  const location = useLocation();
  
  // 根据当前路径判断语言
  // Docusaurus 的英文路径通常是 /en/xxx
  const isEnglish = location.pathname.startsWith('/en/') || location.pathname === '/en';
  const giscusLang = isEnglish ? 'en' : 'zh-CN';

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        id="comments"
        repo="Halcyon666/summary"
        repoId="R_kgDOJ7huiw"
        category="Announcements"
        categoryId="DIC_kwDOJ7hui84C2Cc0"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang={giscusLang}
        loading="lazy"
      />
    </div>
  );
}
