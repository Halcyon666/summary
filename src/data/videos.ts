import { type Video } from "../components/VideoProgressDashboard";
export const videos1: Video[] = [
  {
    key: "1",
    name: "Section 1 – React Basics",
    totalTime: "02:17:58",
    watchRecords: [{ date: "2025-10-08", watchedTime: "02:17:58" }],
  },
  {
    key: "2",
    name: "Section 2 – Travel Journal Project",
    totalTime: "02:15:04",
    watchRecords: [{ date: "2025-10-08", watchedTime: "02:15:04" }],
  },
  {
    key: "3",
    name: "Section 3 – Chef Claude Project",
    totalTime: "05:10:55",
    // whatchedTime是累计时长
    watchRecords: [
      { date: "2025-10-08", watchedTime: "00:12:56" },
      { date: "2025-10-10", watchedTime: "1:51:56" },
      { date: "2025-10-12", watchedTime: "3:04:36" },
      { date: "2025-10-13", watchedTime: "4:15:05" },
      { date: "2025-10-15", watchedTime: "05:10:55" },
    ],
  },
  {
    key: "4",
    name: "Section 4 – Meme Generator Project",
    totalTime: "01:57:18",
    watchRecords: [
      { date: "2025-10-17", watchedTime: "1:14:42" },
      { date: "2025-10-18", watchedTime: "01:57:18" },
    ],
  },
  {
    key: "5",
    name: "Section 5 – Tenzies Project",
    totalTime: "01:30:00",
    watchRecords: [
      { date: "2025-10-18", watchedTime: "00:10:35" },
      { date: "2025-10-19", watchedTime: "1:21:15" },
      { date: "2025-10-20", watchedTime: "01:30:00" },
    ],
  },
  {
    key: "6",
    name: "Section 6 – Assembly Endgame Project",
    totalTime: "02:06:59",
    watchRecords: [
      { date: "2025-10-20", watchedTime: "00:04:31" },
      { date: "2025-10-28", watchedTime: "00:26:15" },
      { date: "2025-10-31", watchedTime: "01:00:59" },
      { date: "2025-11-1", watchedTime: "01:21:32" },
      { date: "2025-11-2", watchedTime: "01:46:08" },
    ],
  },
  {
    key: "7",
    name: "Bonus Section – React and VS Code",
    totalTime: "22:43",
  },
];
