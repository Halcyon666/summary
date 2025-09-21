import React from "react";

interface HighlightProps {
  color?: string; // 自定义文字颜色
  background?: string; // 自定义背景色
  className?: string; // 可选，使用 Docusaurus 内置类，如 "text--danger"
  children: React.ReactNode;
}

export default function MyHighlight({
  color,
  background,
  className,
  children,
}: HighlightProps) {
  const style = {
    color,
    background,
    padding: background ? "0 0.2em" : undefined, // 如果有背景色，加点内边距
    borderRadius: background ? "0.2em" : undefined, // 圆角
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
