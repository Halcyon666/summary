import React from 'react';
import DocItem from '@theme-original/DocItem';
import type { Props } from '@theme/DocItem';
import GiscusComment from '../../components/GiscusComment';
import { useLocation } from '@docusaurus/router';

export default function DocItemWrapper(props: Props): React.ReactElement {
  const { pathname } = useLocation();
  
  // 排除特殊页面（如标签页、搜索页等）
  const shouldShowComments = !pathname.includes('/tags') && 
                             !pathname.includes('/search') &&
                             pathname !== '/';

  return (
    <>
      <DocItem {...props} />
      {shouldShowComments && (
        <GiscusComment />
      )}
    </>
  );
}
