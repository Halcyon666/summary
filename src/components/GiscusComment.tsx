import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        id="comments"
        repo="Halcyon666/summary"
        repoId="R_kgDOJ7huiw"
        category="Announcements"
        categoryId="DIC_kwDOJ7hui84C2Cc0"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
