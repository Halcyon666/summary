// src/components/VideoProgressTable.tsx
import React, { useEffect, useState } from "react";
import { Table, Progress, Tag } from "antd";
import ConfigProvider from "antd/es/config-provider";
import theme from "antd/es/theme";
import type { ColumnsType } from "antd/es/table";

export interface Video {
  id: string;
  name: string;
  totalTime: string;
  watchedTime: string;
  completedDate?: string | null;
}

interface VideoWithProgress extends Video {
  totalSeconds: number;
  watchedSeconds: number;
  percent: number;
  isCompleted: boolean;
}

interface VideoProgressTableProps {
  videos: Video[];
}

const parseTimeToSeconds = (timeStr: string): number => {
  if (!timeStr) return 0;
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
};

const VideoProgressTable: React.FC<VideoProgressTableProps> = ({ videos }) => {
  const [isDark, setIsDark] = useState(false);

  // 检测 Docusaurus 主题模式
  useEffect(() => {
    // 初始检测
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const currentTheme = htmlElement.getAttribute("data-theme");
      setIsDark(currentTheme === "dark");
    };

    checkTheme();

    // 监听主题变化
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const processedData: VideoWithProgress[] = videos.map((v) => {
    const totalSeconds = parseTimeToSeconds(v.totalTime);
    const watchedSeconds = parseTimeToSeconds(v.watchedTime);
    const percent =
      totalSeconds > 0 ? Math.round((watchedSeconds / totalSeconds) * 100) : 0;
    const isCompleted = watchedSeconds >= totalSeconds;
    return {
      ...v,
      totalSeconds,
      watchedSeconds,
      percent,
      isCompleted,
    };
  });

  const columns: ColumnsType<VideoWithProgress> = [
    {
      title: "视频名称",
      dataIndex: "name",
      key: "name",
      width: "25%",
      ellipsis: true,
    },
    {
      title: "总时长",
      dataIndex: "totalTime",
      key: "totalTime",
      width: "12%",
    },
    {
      title: "已观看",
      dataIndex: "watchedTime",
      key: "watchedTime",
      width: "12%",
    },
    {
      title: "完成时间",
      key: "completedDate",
      width: "15%",
      render: (_, record) =>
        record.isCompleted ? (
          <Tag color="green">{record.completedDate}</Tag>
        ) : (
          "-"
        ),
    },
    {
      title: "当前进度",
      key: "percent",
      width: "31%",
      render: (_, record) => (
        <Progress
          percent={record.percent}
          size="small"
          strokeColor={record.isCompleted ? "#52c41a" : "#1890ff"}
        />
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 4,
        },
      }}
    >
      <div style={{ width: "100%", overflowX: "auto" }}>
        <Table
          columns={columns}
          dataSource={processedData}
          pagination={false}
          scroll={{ x: 800 }}
          rowKey="id"
        />
      </div>
    </ConfigProvider>
  );
};

export default VideoProgressTable;
