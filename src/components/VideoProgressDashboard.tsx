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
  date: string; // 观看日期，如 "2025-10-01"
  watchedTime: string; // 截止当天的累计观看时长，如 "00:45:00"
};

/** 原始视频类型（从 props 传入） */
export type Video = {
  key: string;
  name: string;
  totalTime?: string; // 总时长字符串，如 "02:17:58"
  watchedTime?: string; // 已观看时长字符串
  completedDate?: string; // 完成日期，可选
  watchRecords?: WatchRecord[]; // 观看记录数组
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

/** 工具函数：秒转时间字符串 (HH:MM:SS) */
const formatSecondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [hours, minutes, secs]
    .map((v) => v.toString().padStart(2, "0"))
    .join(":");
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

    // 总体进度 = 所有已观看时长总和 / 所有视频时长总和
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

/** 🔥 观看记录折叠面板（加入本次观看时长） */
const WatchRecordsCollapse: React.FC<{
  records?: WatchRecord[];
  totalSeconds: number;
}> = ({ records, totalSeconds }) => {
  if (!records || records.length === 0) return null;

  // watchedTime 是累计时长，计算每次观看时长和百分比
  const recordsWithProgress = useMemo(() => {
    let previousSeconds = 0; // 上一次的累计秒数

    return records.map((record) => {
      const cumulativeSeconds = parseTimeToSeconds(record.watchedTime); // 累计时长（秒）
      const thisTimeSeconds = cumulativeSeconds - previousSeconds; // 本次观看时长（秒）
      const thisTimeFormatted = formatSecondsToTime(thisTimeSeconds); // 本次时长格式化
      const progressPercent =
        totalSeconds > 0
          ? Math.round((cumulativeSeconds / totalSeconds) * 100)
          : 0;

      previousSeconds = cumulativeSeconds; // 更新为当前累计秒数

      return {
        ...record,
        cumulativeSeconds,
        thisTimeSeconds,
        thisTimeFormatted,
        progressPercent,
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
              {recordsWithProgress.map((record, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: 12,
                    color: "#595959",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "4px 0",
                  }}
                >
                  <span>{record.date}</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#1890ff", fontWeight: 500 }}>
                      {record.thisTimeFormatted}
                    </span>
                    <span>
                      观看到 <strong>{record.progressPercent}%</strong>
                    </span>
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

/** 🔥 带日期标记的进度条（watchedTime 是累计时长） */
const ProgressWithDates: React.FC<{
  percent: number;
  isCompleted: boolean;
  records?: WatchRecord[];
  totalSeconds: number;
}> = ({ percent, isCompleted, records, totalSeconds }) => {
  // 计算每个观看记录在进度条上的位置
  const markers = useMemo(() => {
    if (!records || records.length === 0 || totalSeconds === 0) return [];

    return records.map((record) => {
      const cumulativeSeconds = parseTimeToSeconds(record.watchedTime); // 累计时长
      const position = Math.min((cumulativeSeconds / totalSeconds) * 100, 100);
      return {
        ...record,
        position,
        cumulativePercent: Math.round(position),
      };
    });
  }, [records, totalSeconds]);

  return (
    <div style={{ position: "relative" }}>
      <Progress
        percent={percent}
        size="small"
        strokeColor={
          isCompleted
            ? { "0%": "#52c41a", "100%": "#73d13d" }
            : { "0%": "#1890ff", "100%": "#40a9ff" }
        }
      />

      {/* 在进度条上方显示日期标记 */}
      {markers.length > 0 && (
        <div
          style={{
            position: "relative",
            height: 20,
            marginTop: 4,
          }}
        >
          {markers.map((marker, index) => (
            <Tooltip
              key={index}
              title={`${marker.date}: 观看到 ${marker.cumulativePercent}%`}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${marker.position}%`,
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 2,
                    height: 8,
                    backgroundColor: isCompleted ? "#52c41a" : "#1890ff",
                    marginBottom: 2,
                  }}
                />
                <div
                  style={{
                    fontSize: 10,
                    color: "#8c8c8c",
                    whiteSpace: "nowrap",
                  }}
                >
                  {marker.date.slice(5)} {/* 只显示月-日 */}
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      )}
    </div>
  );
};

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
  description?: string;
};
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  color,
  suffix,
  progress,
  description,
}) => (
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

            {/* 带日期标记的进度条 */}
            <ProgressWithDates
              percent={video.percent}
              isCompleted={video.isCompleted}
              records={video.watchRecords}
              totalSeconds={video.total}
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
            </div>

            {/* 观看记录折叠面板（默认折叠） */}
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
