import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useHistory } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

// 动态导入
const ForceGraph2D = React.lazy(() => import('react-force-graph-2d'));

const GraphViewContent = () => {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [allNodes, setAllNodes] = useState([]); // 存储所有节点用于搜索
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [searchTerm, setSearchTerm] = useState('');
  const [hoverNode, setHoverNode] = useState(null);
  
  // 新增：DAG 模式状态，默认 'td' (Top-Down)，也可切换为 null (Radial/Free)
  const [dagMode, setDagMode] = useState<'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin' | null>('td');
  
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
        // 保存所有节点用于搜索（即使被过滤掉的也可以考虑搜到？不，只搜显示的）
        
        const nodeDegree = new Map();
        graphData.links.forEach((link: any) => {
          const source = typeof link.source === 'object' ? link.source.id : link.source;
          const target = typeof link.target === 'object' ? link.target.id : link.target;
          nodeDegree.set(source, (nodeDegree.get(source) || 0) + 1);
          nodeDegree.set(target, (nodeDegree.get(target) || 0) + 1);
        });

        const connectedNodes = graphData.nodes.filter((node: any) => 
          (nodeDegree.get(node.id) || 0) > 0 || node.id === 'overview'
        );

        setData({ nodes: connectedNodes, links: graphData.links });
        setAllNodes(connectedNodes); // 仅搜索可见节点
      })
      .catch(err => console.error("Failed to load graph data:", err));
  }, []);

  // 窗口大小适配
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: window.innerHeight - 60 // Navbar height
        });
      }
    };
    window.addEventListener('resize', updateDimensions);
    setTimeout(updateDimensions, 100);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 搜索逻辑
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredNodes = useMemo(() => {
    if (!searchTerm) return [];
    const lower = searchTerm.toLowerCase();
    return allNodes.filter((n: any) => 
      n.name.toLowerCase().includes(lower) || 
      (n.description && n.description.toLowerCase().includes(lower))
    ).slice(0, 8); // Limit results
  }, [searchTerm, allNodes]);

  const focusNode = (node: any) => {
    if (!graphRef.current) return;
    
    // Fly to node
    graphRef.current.centerAt(node.x, node.y, 1000);
    graphRef.current.zoom(6, 2000);
    setSearchTerm(''); // Clear search on select
    setHoverNode(node); // Show tooltip for selected
  };

  const handleNodeClick = useCallback((node) => {
    if (node.path) {
      history.push(node.path);
    }
  }, [history]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: 'calc(100vh - 60px)', position: 'relative', overflow: 'hidden', background: isDark ? '#1a202c' : '#ffffff' }}>
      
      {/* Search Overlay */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        width: 300
      }}>
        <input
          type="text"
          placeholder="🔍 Search topics..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 20px',
            borderRadius: '24px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: 'var(--ifm-background-surface-color)',
            color: 'var(--ifm-font-color-base)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            outline: 'none',
            fontSize: '14px',
            backdropFilter: 'blur(4px)'
          }}
        />
        {searchTerm && (
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '10px 0 0',
            backgroundColor: 'var(--ifm-background-surface-color)',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            maxHeight: '300px',
            overflowY: 'auto',
            border: '1px solid var(--ifm-color-emphasis-200)'
          }}>
            {filteredNodes.length > 0 ? filteredNodes.map((node: any) => (
              <li 
                key={node.id}
                onClick={() => focusNode(node)}
                style={{
                  padding: '12px 20px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--ifm-color-emphasis-100)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--ifm-color-primary)' }}>{node.name}</div>
                {node.description && (
                  <div style={{ fontSize: '12px', color: 'var(--ifm-color-content-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '4px' }}>
                    {node.description}
                  </div>
                )}
              </li>
            )) : (
              <li style={{ padding: '15px', color: 'gray', textAlign: 'center' }}>No results found</li>
            )}
          </ul>
        )}
      </div>

      {/* DAG 模式切换按钮 */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 10,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setDagMode(dagMode === 'td' ? null : 'td')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: dagMode === 'td' ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
            color: dagMode === 'td' ? '#fff' : 'var(--ifm-font-color-base)',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontWeight: 600
          }}
        >
          {dagMode === 'td' ? '🌲 Tree View' : '🕸️ Net View'}
        </button>
      </div>

      {/* Hover Tooltip - Top Right Fixed */}
      {hoverNode && (
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 320,
          padding: '20px',
          borderRadius: '16px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          // Glassmorphism effect
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          zIndex: 5,
          pointerEvents: 'none', 
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <h3 style={{ margin: '0 0 10px', fontSize: '20px', color: 'var(--ifm-color-primary)', lineHeight: 1.3 }}>
            {(hoverNode as any).name}
          </h3>
          
          {(hoverNode as any).description ? (
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 15px', color: 'var(--ifm-font-color-base)', opacity: 0.9 }}>
              {(hoverNode as any).description}
            </p>
          ) : (
            <p style={{ fontSize: '14px', color: 'var(--ifm-color-content-secondary)', fontStyle: 'italic', margin: '0 0 15px' }}>
              No description available.
            </p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {((hoverNode as any).allTags || []).map((tag: string) => (
              <span key={tag} style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '20px',
                backgroundColor: 'var(--ifm-color-primary-lightest)',
                color: 'var(--ifm-color-primary-dark)',
                fontWeight: 600
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <React.Suspense fallback={<div style={{ padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>Loading Graph...</div>}>
        <ForceGraph2D
          ref={graphRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={data}
          
          // DAG Mode Configuration
          dagMode={dagMode || undefined}
          dagLevelDistance={80} // 层级间距
          
          // Labels
          nodeLabel={() => ""} 
          
          // Appearance
          nodeRelSize={4} // Slightly larger for visibility
          nodeColor={node => {
            if (node.id === 'overview') return '#ff0072';
            if (hoverNode && (node as any).id === (hoverNode as any).id) return '#ffaa00'; // Highlight hover
            return isDark ? '#4fd1c5' : '#3182ce';
          }}
          
          linkColor={() => isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}
          linkWidth={1.5}
          
          // 箭头配置：让依赖流向更清晰
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          
          // 粒子效果 (仅在非 DAG 模式或作为补充)
          linkDirectionalParticles={dagMode ? 0 : 2}
          linkDirectionalParticleWidth={2}
          linkDirectionalParticleSpeed={0.005}
          
          backgroundColor={isDark ? '#1a202c' : '#ffffff'}
          
          // Interaction
          onNodeClick={handleNodeClick}
          onNodeHover={(node) => {
            document.body.style.cursor = node ? 'pointer' : 'default';
            setHoverNode(node || null);
          }}
          
          // Physics
          cooldownTicks={100}
          onEngineStop={() => graphRef.current?.zoomToFit(400, 50)}
          d3AlphaDecay={0.01}
          d3VelocityDecay={0.4}
        />
      </React.Suspense>
      
      {/* CSS Animation for Fade In */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
