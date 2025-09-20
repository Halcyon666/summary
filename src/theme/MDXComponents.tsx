import TailProtocal from "../components/TailProtocal";
import OriginalDetails from "@theme-original/Details";

export default {
  TailProtocal,
  Details: OriginalDetails, // 保证 <details> 标签正常工作
  // 你可以在这里继续添加其他全局组件
};
