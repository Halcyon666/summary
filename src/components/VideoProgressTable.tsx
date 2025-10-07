// src/components/VideoProgressTable.tsx
import React from "react";
import { Table, Progress, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface Video {
  key: string;
  name: string;
  totalTime: string; // HH:MM:SS 或 MM:SS
  watchedTime: string; // HH:MM:SS 或 MM:SS
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
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

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
      completedDate: isCompleted ? today : v.completedDate || null,
    };
  });

  const columns: ColumnsType<VideoWithProgress> = [
    { title: "视频名称", dataIndex: "name", key: "name" },
    { title: "总时长", dataIndex: "totalTime", key: "totalTime" },
    { title: "已观看", dataIndex: "watchedTime", key: "watchedTime" },
    {
      title: "完成时间",
      key: "completedDate",
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
      render: (_, record) => <Progress percent={record.percent} size="small" />,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={processedData}
      pagination={false}
      style={{ width: "100%" }}
      // scroll={{ x: "max-content" }}
    />
  );
};

export default VideoProgressTable;
