import React, { useState, useEffect, useCallback } from "react";
import { useColorMode } from "@docusaurus/theme-common";

// ============================
// 类型定义
// ============================
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

// ============================
// 自定义 Hook：管理一言数据
// ============================
function useHitokoto() {
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const fetchQuote = useCallback(async () => {
    try {
      setStatus("loading");
      setError("");

      const response = await fetch(
        "https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k&c=l"
      );

      if (!response.ok) {
        throw new Error("获取失败");
      }

      const data: HitokotoResponse = await response.json();
      setQuote(data.hitokoto);
      setSource(data.from);
      setAuthor(data.from_who || "");
      setStatus("success");
    } catch (err) {
      console.error("Error fetching quote:", err);
      setError("获取每日一言失败，请稍后重试");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return { quote, author, source, status, error, fetchQuote };
}

// ============================
// 样式生成函数
// ============================
function useThemeStyles(isDark: boolean) {
  return {
    container: {
      textAlign: "center" as const,
      color: isDark ? "#ffffff" : "#333333",
      backgroundColor: isDark ? "#1b1b1d" : "#ffffff",
      width: "100%",
    },
    card: {
      width: "100%",
      padding: "40px 20px",
      backgroundColor: isDark ? "#2f3136" : "#f8f9fa",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
    },
    title: {
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
    },
    errorBox: {
      color: isDark ? "#ff6b6b" : "#d73a49",
      margin: "20px 0",
      padding: "10px",
      border: "1px solid #ff6b6b",
      borderRadius: "5px",
      backgroundColor: isDark ? "#3c2c2c" : "#ffe0e0",
    },
    loadingText: {
      color: isDark ? "#dcddde" : "#555555",
      fontStyle: "italic" as const,
    },
  };
}

// ============================
// 主组件
// ============================
export default function Hello() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const styles = useThemeStyles(isDark);

  const { quote, author, source, status, error, fetchQuote } = useHitokoto();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>每日一言</h3>

        <div style={styles.quote}>
          {status === "loading" && (
            <span style={styles.loadingText}>正在获取...</span>
          )}
          {status === "error" && <div style={styles.errorBox}>{error}</div>}
          {status === "success" && <span>"{quote}"</span>}
        </div>

        <div style={styles.attribution}>
          {status === "success" && (
            <>
              {author && <span>—— {author} </span>}
              {source && <span>《{source}》</span>}
            </>
          )}
        </div>

        <button
          style={styles.button}
          disabled={status === "loading"}
          onClick={fetchQuote}
        >
          {status === "loading" ? "获取中..." : "换一句"}
        </button>
      </div>
    </div>
  );
}
