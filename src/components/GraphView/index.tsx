import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

// 动态导入以避免 SSR 问题
const ForceGraph2D = React.lazy(() => import('react-force-graph-2d'));

const GraphViewContent = () => {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);
  const history = useHistory();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // 加载数据
  useEffect(() => {
    fetch('/summary/graph-data.json')
      .then(res => res.json())
      .then(graphData => {
        setData(graphData);
      })
      .catch(err => console.error("Failed to load graph data:", err));
  }, []);

  // 响应式调整大小
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: window.innerHeight - 100 // 减去导航栏高度
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions(); // Initial calc
    
    // Delay slightly to wait for layout
    setTimeout(updateDimensions, 100);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleNodeClick = useCallback((node) => {
    if (node.path) {
      // Docusaurus 路由跳转
      history.push(node.path);
    }
  }, [history]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'hidden' }}>
      <React.Suspense fallback={<div>Loading Graph...</div>}>
        <ForceGraph2D
          ref={graphRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={data}
          nodeLabel="name"
          nodeColor={node => {
            if (node.id === 'overview') return '#ff0072'; // Highlight entry point
            return isDark ? '#4fd1c5' : '#3182ce';
          }}
          // 减小节点大小：基础大小 4 -> 3
          nodeRelSize={3} 
          // 调整连线颜色和宽度
          linkColor={() => isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}
          linkWidth={1}
          linkDirectionalParticles={2} // 添加粒子动画效果，指示方向
          linkDirectionalParticleWidth={2}
          linkDirectionalParticleSpeed={0.005}
          
          backgroundColor={isDark ? '#1a202c' : '#ffffff'}
          onNodeClick={handleNodeClick}
          cooldownTicks={100}
          onEngineStop={() => graphRef.current?.zoomToFit(400, 50)} // padding 50px
          
          // 物理引擎参数调优
          d3AlphaDecay={0.01} // 降低衰减，让它多动一会儿以找到更好布局
          d3VelocityDecay={0.4}
        />
      </React.Suspense>
    </div>
  );
};

export default function GraphView() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <GraphViewContent />}
    </BrowserOnly>
  );
}
