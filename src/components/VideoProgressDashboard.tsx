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
  theme as antTheme,
  ConfigProvider,
} from "antd";
import {
  CheckCircleOutlined,
  PlayCircleOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/** 原始视频类型（从 props 传入） */
export type Video = {
  key: string;
  name: string;
  totalTime?: string; // 总时长字符串，如 "02:17:58"
  watchedTime?: string; // 已观看时长字符串
  completedDate?: string; // 完成日期，可选
};

/** 处理后视频类型（计算出进度相关字段） */
export type ProcessedVideo = Video & {
  total: number; // 总秒数
  watched: number; // 已观看秒数
  percent: number; // 已观看百分比
  isCompleted: boolean; // 是否完成
};

/** 工具函数：时间字符串转秒 */
const parseTimeToSeconds = (timeStr?: string): number => {
  if (!timeStr) return 0;
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
};

/** Hook：计算视频统计数据 */
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
    // 总体进度 = 累加每个视频的百分比 / 总视频数
    const overallProgress =
      totalVideos > 0
        ? Math.round(
            processed.reduce((sum, v) => sum + v.percent, 0) / totalVideos
          )
        : 0;

    return {
      processed,
      totalVideos,
      completedVideos,
      inProgressVideos,
      overallProgress,
    };
  }, [videos]);

/** 状态标签组件，根据视频进度显示不同状态 */
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

/** 统计卡片组件 */
type StatCardProps = {
  title: string;
  value: number | string;
  prefix: React.ReactNode;
  color?: string;
  suffix?: string;
  progress?: number;
};
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  color,
  suffix,
  progress,
}) => (
  <Card>
    <Statistic
      title={title}
      value={value}
      prefix={prefix}
      suffix={suffix}
      valueStyle={color ? { color } : undefined}
    />
    {progress !== undefined && (
      <Progress percent={progress} showInfo={false} strokeColor={color} />
    )}
  </Card>
);

/** 视频列表组件 */
type VideoListProps = {
  videos: ProcessedVideo[];
  isDark: boolean;
};
const VideoList: React.FC<VideoListProps> = ({ videos, isDark }) => (
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
            {/* 视频标题和状态 */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 500 }}>{video.name}</span>
              <StatusTag {...video} />
            </div>

            {/* 视频进度条 */}
            <Progress
              percent={video.percent}
              size="small"
              strokeColor={
                video.isCompleted
                  ? { "0%": "#52c41a", "100%": "#73d13d" }
                  : { "0%": "#1890ff", "100%": "#40a9ff" }
              }
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
              <span>总时长: {video.totalTime || "未知"}</span>
              <span>已观看: {video.watchedTime || "00:00:00"}</span>
              {video.completedDate && (
                <span>完成于: {video.completedDate}</span>
              )}
            </div>
          </Space>
        </List.Item>
      )}
    />
  </Card>
);

/** 主仪表盘组件 */
type VideoProgressDashboardProps = {
  videos?: Video[];
};
const VideoProgressDashboard: React.FC<VideoProgressDashboardProps> = ({
  videos = [],
}) => {
  const [isDark, setIsDark] = useState(false);
  const stats = useVideoStats(videos);

  // 监听系统主题变化
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // 配置统计卡数据，复用 StatCard 组件
  const statCards: StatCardProps[] = [
    {
      title: "总体进度",
      value: stats.overallProgress,
      prefix: <TrophyOutlined />,
      color: "#1890ff",
      suffix: "%",
      progress: stats.overallProgress,
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
      <div style={styles.container}>
        {/* 顶部统计区 */}
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          {statCards.map((card) => (
            <Col xs={24} sm={12} md={6} key={card.title}>
              <StatCard {...card} />
            </Col>
          ))}
        </Row>

        {/* 视频列表 */}
        <VideoList videos={stats.processed} isDark={isDark} />
      </div>
    </ConfigProvider>
  );
};

const styles = {
  container: { padding: 24, maxWidth: 1000, margin: "0 auto" },
};

export default VideoProgressDashboard;
