import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type { Props } from '@theme/BlogPostItem';
import GiscusComment from '../../components/GiscusComment';
import { useLocation } from '@docusaurus/router';

export default function BlogPostItemWrapper(props: Props): React.ReactElement {
  const { pathname } = useLocation();
  
  // 只在博客文章详情页显示评论（不在列表页显示）
  const isBlogPostPage = pathname.startsWith('/blog/') && pathname !== '/blog' && pathname !== '/blog/';

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && (
        <GiscusComment />
      )}
    </>
  );
}
