import React from "react";

interface HighlightProps {
  color?: string; // 自定义文字颜色
  className?: string; // 可选，直接使用内置类名，如 "text--danger"
  children: React.ReactNode;
}

export default function MyHighlight({
  color,
  className,
  children,
}: HighlightProps) {
  const style = color ? { color } : undefined;
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
