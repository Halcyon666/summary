import React, { useState } from 'react';

export default function CommentGuidelines() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{
      marginTop: '2rem',
      marginBottom: '1rem',
      padding: '1rem',
      backgroundColor: 'var(--ifm-color-emphasis-100)',
      borderRadius: '8px',
      border: '1px solid var(--ifm-color-emphasis-300)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }} onClick={() => setIsExpanded(!isExpanded)}>
        <h4 style={{ margin: 0, fontSize: '1rem' }}>
          💬 评论指南 / Comment Guidelines
        </h4>
        <span style={{ fontSize: '1.2rem' }}>
          {isExpanded ? '▼' : '▶'}
        </span>
      </div>
      
      {isExpanded && (
        <div style={{ marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
          <p style={{ margin: '0.5rem 0' }}>
            <strong>欢迎参与讨论！请遵守以下规则：</strong>
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <li>✅ 保持友善和尊重</li>
            <li>✅ 提供建设性的反馈</li>
            <li>✅ 使用清晰的语言表达</li>
            <li>❌ 禁止垃圾信息和广告</li>
            <li>❌ 禁止不当或冒犯性内容</li>
          </ul>
          
          <p style={{ margin: '0.5rem 0', marginTop: '1rem' }}>
            <strong>Welcome to comment! Please follow these rules:</strong>
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '0' }}>
            <li>✅ Be kind and respectful</li>
            <li>✅ Provide constructive feedback</li>
            <li>✅ Use clear language</li>
            <li>❌ No spam or advertisements</li>
            <li>❌ No inappropriate or offensive content</li>
          </ul>
          
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.85rem', 
            color: 'var(--ifm-color-emphasis-600)',
            marginBottom: 0 
          }}>
            💡 提示：评论需要 GitHub 账号登录 / Tip: GitHub account required to comment
          </p>
        </div>
      )}
    </div>
  );
}
