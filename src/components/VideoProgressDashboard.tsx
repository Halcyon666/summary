import React, { useEffect, useState, useMemo } from "react";
import {
  Card,
  Progress,
  Row,
  Col,
  Statistic,
  List,
  Tag,
  Space,
  Tooltip,
  Collapse,
  theme as antTheme,
  ConfigProvider,
} from "antd";
import {
  CheckCircleOutlined,
  PlayCircleOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/** 观看记录类型 */
export type WatchRecord = {
  date: string;
  watchedTime: string;
};

/** 原始视频类型 */
export type Video = {
  key: string;
  name: string;
  totalTime?: string;
  watchedTime?: string;
  completedDate?: string;
  watchRecords?: WatchRecord[];
};

/** 处理后视频类型 */
export type ProcessedVideo = Video & {
  total: number;
  watched: number;
  percent: number;
  isCompleted: boolean;
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

/** Hook：计算视频统计 */
const useVideoStats = (videos: Video[]) =>
  useMemo(() => {
    const processed: ProcessedVideo[] = videos.map((v) => {
      const total = parseTimeToSeconds(v.totalTime);
      const watched = parseTimeToSeconds(v.watchedTime);
      const percent = total > 0 ? Math.round((watched / total) * 100) : 0;
      const isCompleted = watched >= total && total > 0;
      return { ...v, total, watched, percent, isCompleted };
    });

    const totalVideos = processed.length;
    const completedVideos = processed.filter((v) => v.isCompleted).length;
    const inProgressVideos = processed.filter(
      (v) => v.percent > 0 && !v.isCompleted
    ).length;

    const totalWatchedSeconds = processed.reduce(
      (sum, v) => sum + v.watched,
      0
    );
    const totalDurationSeconds = processed.reduce((sum, v) => sum + v.total, 0);
    const overallProgress =
      totalDurationSeconds > 0
        ? Math.round((totalWatchedSeconds / totalDurationSeconds) * 100)
        : 0;

    return {
      processed,
      totalVideos,
      completedVideos,
      inProgressVideos,
      overallProgress,
      totalWatchedSeconds,
      totalDurationSeconds,
    };
  }, [videos]);

/** 观看记录折叠面板 */
const WatchRecordsCollapse: React.FC<{
  records?: WatchRecord[];
  totalSeconds: number;
}> = ({ records, totalSeconds }) => {
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
    <Collapse
      ghost
      size="small"
      items={[
        {
          key: "1",
          label: (
            <span style={{ fontSize: 12, color: "#8c8c8c" }}>
              <CalendarOutlined /> 观看记录 ({records.length} 次)
            </span>
          ),
          children: (
            <Space direction="vertical" size={4} style={{ width: "100%" }}>
              {recordsWithProgress.map((r, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 12,
                    color: "#595959",
                    display: "flex",
                    justifyContent: "space-between",
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
          ),
        },
      ]}
    />
  );
};

/** 修复版：日期标记进度条 */
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
        {/* 蓝色进度条 */}
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

      {/* 日期标记 */}
      <div style={{ position: "relative", height: 26, marginTop: 3 }}>
        {markers.map((m, i) => (
          <Tooltip key={i} title={`${m.date} - ${m.watchedTime}`}>
            <div
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
                  margin: "0 auto 3px",
                }}
              />
              <div style={{ fontSize: 10, color: "#8c8c8c" }}>{m.label}</div>
            </div>
          </Tooltip>
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

/** 统计卡片 */
const StatCard: React.FC<{
  title: string;
  value: number | string;
  prefix: React.ReactNode;
  color?: string;
  suffix?: string;
  progress?: number;
  description?: string;
}> = ({ title, value, prefix, color, suffix, progress, description }) => (
  <Card>
    <Statistic
      title={title}
      value={value}
      prefix={prefix}
      suffix={suffix}
      valueStyle={color ? { color } : undefined}
    />
    {description && (
      <div style={{ fontSize: 12, color: "#8c8c8c", marginTop: 8 }}>
        {description}
      </div>
    )}
    {progress !== undefined && (
      <Progress percent={progress} showInfo={false} strokeColor={color} />
    )}
  </Card>
);

/** 视频列表 */
const VideoList: React.FC<{
  videos: ProcessedVideo[];
  isDark: boolean;
}> = ({ videos, isDark }) => (
  <Card title="📚 课程列表" variant="borderless">
    <List
      dataSource={videos}
      renderItem={(video) => (
        <List.Item
          key={video.key}
          style={{
            padding: "16px 0",
            borderBottom: `1px solid ${isDark ? "#434343" : "#f0f0f0"}`,
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }} size="small">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 500 }}>{video.name}</span>
              <StatusTag {...video} />
            </div>

            <ProgressWithDates
              percent={video.percent}
              isCompleted={video.isCompleted}
              records={video.watchRecords}
              totalSeconds={video.total}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                color: "#8c8c8c",
              }}
            >
              <span>总时长: {video.totalTime || "未知"}</span>
              <span>已观看: {video.watchedTime || "00:00:00"}</span>
            </div>

            <WatchRecordsCollapse
              records={video.watchRecords}
              totalSeconds={video.total}
            />
          </Space>
        </List.Item>
      )}
    />
  </Card>
);

/** 主组件 */
const VideoProgressDashboard: React.FC<{ videos?: Video[] }> = ({
  videos = [],
}) => {
  const [isDark, setIsDark] = useState(false);
  const stats = useVideoStats(videos);

  useEffect(() => {
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

  const statCards = [
    {
      title: "总体进度",
      value: stats.overallProgress,
      prefix: <TrophyOutlined />,
      color: "#1890ff",
      suffix: "%",
      progress: stats.overallProgress,
      description: `${formatSecondsToTime(
        stats.totalWatchedSeconds
      )} / ${formatSecondsToTime(stats.totalDurationSeconds)}`,
    },
    {
      title: "总视频数",
      value: stats.totalVideos,
      prefix: <PlayCircleOutlined />,
    },
    {
      title: "已完成",
      value: stats.completedVideos,
      prefix: <CheckCircleOutlined />,
      color: "#52c41a",
    },
    {
      title: "进行中",
      value: stats.inProgressVideos,
      prefix: <ClockCircleOutlined />,
      color: "#faad14",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: { colorPrimary: "#00b96b", borderRadius: 8 },
      }}
    >
      <div style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          {statCards.map((card) => (
            <Col xs={24} sm={12} md={6} key={card.title}>
              <StatCard {...card} />
            </Col>
          ))}
        </Row>

        <VideoList videos={stats.processed} isDark={isDark} />
      </div>
    </ConfigProvider>
  );
};

export default VideoProgressDashboard;
