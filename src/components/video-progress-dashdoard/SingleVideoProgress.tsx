import React, { useState, useMemo } from "react";
import { Progress, Tag, Space, ConfigProvider, theme as antTheme } from "antd";
import {
  CheckCircleOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/** 观看记录类型 */
export type WatchRecord = {
  date: string;
  watchedTime: string;
};

/** 单个视频类型 */
export type SingleVideo = {
  name: string;
  totalTime: string;
  watchRecords?: WatchRecord[];
};

/** 工具函数：时间字符串转秒 */
const parseTimeToSeconds = (timeStr?: string): number => {
  if (!timeStr) return 0;
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
};

/** 工具函数：秒转时间字符串 */
const formatSecondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [hours, minutes, secs]
    .map((v) => v.toString().padStart(2, "0"))
    .join(":");
};

/** 观看记录折叠面板 */
const WatchRecordsCollapse: React.FC<{
  records?: WatchRecord[];
  totalSeconds: number;
}> = ({ records, totalSeconds }) => {
  const [expanded, setExpanded] = useState(false);

  if (!records || records.length === 0) return null;

  const recordsWithProgress = useMemo(() => {
    let prev = 0;
    return records.map((r) => {
      const cumulative = parseTimeToSeconds(r.watchedTime);
      const diff = cumulative - prev;
      prev = cumulative;
      return {
        ...r,
        thisTimeFormatted: formatSecondsToTime(diff),
        progressPercent: Math.min(
          Math.round((cumulative / totalSeconds) * 100),
          100
        ),
      };
    });
  }, [records, totalSeconds]);

  return (
    <div style={{ marginTop: 8 }}>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          fontSize: 12,
          color: "#8c8c8c",
          cursor: "pointer",
          userSelect: "none",
          padding: "4px 0",
        }}
      >
        <CalendarOutlined /> 观看记录 ({records.length} 次)
        <span style={{ marginLeft: 8 }}>{expanded ? "▼" : "▶"}</span>
      </div>
      {expanded && (
        <Space
          direction="vertical"
          size={4}
          style={{ width: "100%", marginTop: 8 }}
        >
          {recordsWithProgress.map((r, i) => (
            <div
              key={i}
              style={{
                fontSize: 12,
                color: "#595959",
                display: "flex",
                justifyContent: "space-between",
                padding: "4px 0",
              }}
            >
              <span>{r.date}</span>
              <span>
                <span style={{ color: "#1890ff", fontWeight: 500 }}>
                  {r.thisTimeFormatted}
                </span>
                &nbsp;观看到 <strong>{r.progressPercent}%</strong>
              </span>
            </div>
          ))}
        </Space>
      )}
    </div>
  );
};

/** 日期标记进度条 */
const ProgressWithDates: React.FC<{
  percent: number;
  isCompleted: boolean;
  records?: WatchRecord[];
  totalSeconds: number;
}> = ({ percent, isCompleted, records, totalSeconds }) => {
  const markers = useMemo(() => {
    if (!records || records.length === 0 || totalSeconds === 0) return [];
    return records.map((r) => {
      const cumulative = parseTimeToSeconds(r.watchedTime);
      const pos = Math.min((cumulative / totalSeconds) * 100, 100);
      return { ...r, position: pos, label: r.date.slice(5) };
    });
  }, [records, totalSeconds]);

  return (
    <div style={{ position: "relative", marginTop: 6 }}>
      <div
        style={{
          position: "relative",
          height: 8,
          borderRadius: 4,
          backgroundColor: "#d9d9d9",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 8,
            borderRadius: 4,
            background: isCompleted
              ? "linear-gradient(90deg, #52c41a, #73d13d)"
              : "linear-gradient(90deg, #1890ff, #40a9ff)",
            width: `${percent}%`,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      <div style={{ position: "relative", height: 20, marginTop: 3 }}>
        {markers.map((m, i) => (
          <div
            key={i}
            title={`${m.date} - ${m.watchedTime}`}
            style={{
              position: "absolute",
              left: `calc(${m.position}% - 1px)`,
              top: 0,
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 2,
                height: 10,
                backgroundColor: "#1890ff",
                margin: "0 auto 2px",
              }}
            />
            <div
              style={{ fontSize: 10, color: "#8c8c8c", whiteSpace: "nowrap" }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/** 状态标签 */
const StatusTag: React.FC<{ percent: number; isCompleted: boolean }> = ({
  percent,
  isCompleted,
}) => {
  if (isCompleted)
    return (
      <Tag icon={<CheckCircleOutlined />} color="success">
        完成
      </Tag>
    );
  if (percent > 0)
    return (
      <Tag icon={<PlayCircleOutlined />} color="processing">
        {percent}%
      </Tag>
    );
  return (
    <Tag icon={<ClockCircleOutlined />} color="default">
      未开始
    </Tag>
  );
};

/** 🔥 单个视频进度组件 */
const SingleVideoProgress: React.FC<{
  video: SingleVideo;
  showRecords?: boolean; // 是否显示观看记录，默认 true
}> = ({ video, showRecords = true }) => {
  const [isDark, setIsDark] = React.useState(false);

  // 监听主题变化
  React.useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    checkTheme();
    const obs = new MutationObserver(checkTheme);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => obs.disconnect();
  }, []);

  // 计算视频数据
  const videoData = useMemo(() => {
    const total = parseTimeToSeconds(video.totalTime);
    const lastRecord = video.watchRecords?.[video.watchRecords.length - 1];
    const watched = parseTimeToSeconds(lastRecord?.watchedTime);
    const percent = total > 0 ? Math.round((watched / total) * 100) : 0;
    const isCompleted = watched >= total && total > 0;

    return {
      total,
      watched,
      watchedFormatted: lastRecord?.watchedTime || "00:00:00",
      percent,
      isCompleted,
    };
  }, [video]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: { colorPrimary: "#00b96b", borderRadius: 8 },
      }}
    >
      <div
        style={{
          padding: "16px",
          borderRadius: "8px",
          border: isDark ? "1px solid #434343" : "1px solid #d9d9d9",
          backgroundColor: isDark ? "#1f1f1f" : "#fafafa",
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }} size="small">
          {/* 视频标题和状态 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 500, fontSize: "16px" }}>
              {video.name}
            </span>
            <StatusTag
              percent={videoData.percent}
              isCompleted={videoData.isCompleted}
            />
          </div>

          {/* 带日期标记的进度条 */}
          <ProgressWithDates
            percent={videoData.percent}
            isCompleted={videoData.isCompleted}
            records={video.watchRecords}
            totalSeconds={videoData.total}
          />

          {/* 时间信息 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: "#8c8c8c",
            }}
          >
            <span>总时长: {video.totalTime}</span>
            <span>已观看: {videoData.watchedFormatted}</span>
          </div>

          {/* 观看记录（可选） */}
          {showRecords && (
            <WatchRecordsCollapse
              records={video.watchRecords}
              totalSeconds={videoData.total}
            />
          )}
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default SingleVideoProgress;
