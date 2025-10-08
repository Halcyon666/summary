import React, { useEffect, useState } from "react";
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

// 工具函数：时间字符串转秒
const parseTimeToSeconds = (timeStr) => {
  if (!timeStr) return 0;
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
};

/**
 * 视频进度仪表盘
 * @param {{ videos: { key: string, name: string, totalTime: string, watchedTime: string, completedDate?: string }[] }} props
 */
const VideoProgressDashboard = ({ videos = [] }) => {
  const [isDark, setIsDark] = useState(false);

  // 监听暗色主题
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsDark(currentTheme === "dark");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // 计算视频进度数据
  const processedData = videos.map((v) => {
    const totalSeconds = parseTimeToSeconds(v.totalTime);
    const watchedSeconds = parseTimeToSeconds(v.watchedTime);
    const percent =
      totalSeconds > 0 ? Math.round((watchedSeconds / totalSeconds) * 100) : 0;
    const isCompleted = watchedSeconds >= totalSeconds && totalSeconds > 0;
    return { ...v, totalSeconds, watchedSeconds, percent, isCompleted };
  });

  // 汇总统计
  const totalVideos = processedData.length;
  const completedVideos = processedData.filter((v) => v.isCompleted).length;
  const inProgressVideos = processedData.filter(
    (v) => v.percent > 0 && !v.isCompleted
  ).length;
  const overallProgress =
    totalVideos > 0
      ? Math.round(
          processedData.reduce((sum, v) => sum + v.percent, 0) / totalVideos
        )
      : 0;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 8,
        },
      }}
    >
      <div style={{ padding: "20px" }}>
        {/* 顶部统计卡片 */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="总体进度"
                value={overallProgress}
                suffix="%"
                prefix={<TrophyOutlined />}
                valueStyle={{ color: "#1890ff" }}
              />
              <Progress
                percent={overallProgress}
                showInfo={false}
                strokeColor="#1890ff"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="总视频数"
                value={totalVideos}
                prefix={<PlayCircleOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="已完成"
                value={completedVideos}
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: "#52c41a" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="进行中"
                value={inProgressVideos}
                prefix={<ClockCircleOutlined />}
                valueStyle={{ color: "#faad14" }}
              />
            </Card>
          </Col>
        </Row>

        {/* 视频列表 */}
        <Card title="📚 课程列表" bordered={false}>
          <List
            dataSource={processedData}
            renderItem={(video) => (
              <List.Item
                key={video.key}
                style={{
                  padding: "16px 0",
                  borderBottom: isDark
                    ? "1px solid #434343"
                    : "1px solid #f0f0f0",
                }}
              >
                <div style={{ width: "100%" }}>
                  <Space
                    direction="vertical"
                    style={{ width: "100%" }}
                    size="small"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <strong>{video.name}</strong>
                      {video.isCompleted ? (
                        <Tag icon={<CheckCircleOutlined />} color="success">
                          完成
                        </Tag>
                      ) : video.percent > 0 ? (
                        <Tag icon={<PlayCircleOutlined />} color="processing">
                          {video.percent}%
                        </Tag>
                      ) : (
                        <Tag icon={<ClockCircleOutlined />} color="default">
                          未开始
                        </Tag>
                      )}
                    </div>

                    <Progress
                      percent={video.percent}
                      strokeColor={{
                        "0%": video.isCompleted ? "#52c41a" : "#1890ff",
                        "100%": video.isCompleted ? "#73d13d" : "#40a9ff",
                      }}
                      size="small"
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
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
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default VideoProgressDashboard;
