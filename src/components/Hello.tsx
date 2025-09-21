import React, { useState, useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface HitokotoResponse {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who?: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

export default function Hello() {
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // 获取当前主题模式
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // 主题样式配置
  const themeStyles = {
    container: {
      textAlign: "center" as const,
      padding: "0",
      margin: "0",
      width: "100%",
      color: isDark ? "#ffffff" : "#333333",
      backgroundColor: isDark ? "#1b1b1d" : "#ffffff",
    },
    card: {
      maxWidth: "100%",
      width: "100%",
      margin: "0",
      padding: "40px 20px",
      backgroundColor: isDark ? "#2f3136" : "#f8f9fa",
      borderRadius: "0",
      boxShadow: "none",
      border: "none",
      minHeight: "60px",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: isDark ? "#ffffff" : "#333333",
      marginBottom: "15px",
    },
    quote: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: isDark ? "#dcddde" : "#555555",
      fontStyle: "italic" as const,
      margin: "15px 0",
      padding: "0 20px",
      minHeight: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    attribution: {
      color: isDark ? "#b9bbbe" : "#666666",
      fontSize: "14px",
      marginTop: "10px",
      minHeight: "20px",
    },
    button: {
      marginTop: "15px",
      padding: "8px 16px",
      backgroundColor: isDark ? "#5865f2" : "#007acc",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.2s ease",
      opacity: refreshing ? 0.6 : 1,
      pointerEvents: refreshing ? ("none" as const) : ("auto" as const),
    },
    buttonHover: {
      backgroundColor: isDark ? "#4752c4" : "#005fa3",
    },
    errorBox: {
      color: isDark ? "#ff6b6b" : "#d73a49",
      margin: "20px 0",
      padding: "10px",
      border: isDark ? "1px solid #ff6b6b" : "1px solid #ff6b6b",
      borderRadius: "5px",
      backgroundColor: isDark ? "#3c2c2c" : "#ffe0e0",
    },
    loadingText: {
      color: isDark ? "#dcddde" : "#555555",
      fontStyle: "italic" as const,
    },
  };

  const fetchQuote = async () => {
    try {
      setError("");

      // 使用一言API
      const response = await fetch(
        "https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k&c=l"
      );

      if (!response.ok) {
        throw new Error("获取名言失败");
      }

      const data: HitokotoResponse = await response.json();

      setQuote(data.hitokoto);
      setSource(data.from);
      setAuthor(data.from_who || "");
    } catch (err) {
      setError("获取每日一言失败，请稍后重试");
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchQuote();
  };

  // 初次加载时显示简单的加载状态
  if (loading) {
    return (
      <div style={themeStyles.container}>
        <div style={themeStyles.card}>
          <h3 style={themeStyles.title}>每日一言</h3>
          <div style={themeStyles.quote}>
            <span style={themeStyles.loadingText}>正在获取每日一言...</span>
          </div>
          <div style={themeStyles.attribution}></div>
          <button
            style={{
              ...themeStyles.button,
              opacity: 0.6,
              pointerEvents: "none",
            }}
          >
            换一句
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={themeStyles.container}>
      <div style={themeStyles.card}>
        <h3 style={themeStyles.title}>每日一言</h3>

        <div style={themeStyles.quote}>
          {refreshing ? (
            <span style={themeStyles.loadingText}>正在获取新的一言...</span>
          ) : error ? (
            <div style={themeStyles.errorBox}>{error}</div>
          ) : (
            <span>"{quote}"</span>
          )}
        </div>

        <div style={themeStyles.attribution}>
          {!refreshing && !error && author && <span>—— {author} </span>}
          {!refreshing && !error && source && <span>《{source}》</span>}
        </div>

        <button
          onClick={handleRefresh}
          style={themeStyles.button}
          onMouseOver={(e) => {
            if (!refreshing) {
              (e.target as HTMLButtonElement).style.backgroundColor =
                themeStyles.buttonHover.backgroundColor;
            }
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor =
              themeStyles.button.backgroundColor;
          }}
        >
          {refreshing ? "获取中..." : "换一句"}
        </button>
      </div>
    </div>
  );
}
