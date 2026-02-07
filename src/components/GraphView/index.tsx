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

  // 新增：DAG 模式状态，默认 null (Force-Directed/Net View) for better aesthetics
  const [dagMode, setDagMode] = useState<'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin' | null>(null);

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
        const links = graphData.links || graphData.filteredLinks || [];

        links.forEach((link: any) => {
          const source = typeof link.source === 'object' ? link.source.id : link.source;
          const target = typeof link.target === 'object' ? link.target.id : link.target;
          nodeDegree.set(source, (nodeDegree.get(source) || 0) + 1);
          nodeDegree.set(target, (nodeDegree.get(target) || 0) + 1);
        });

        const connectedNodes = graphData.nodes.filter((node: any) =>
          ((nodeDegree.get(node.id) || 0) > 0 || node.id === 'overview') && node.id !== 'intro'
        );

        setData({ nodes: connectedNodes, links });
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

  // Configure D3 forces
  useEffect(() => {
    // Apply force settings after mount/data load
    setTimeout(() => {
      if (graphRef.current) {
        graphRef.current.d3Force('charge').strength(-300);
        graphRef.current.d3Force('link').distance(50);
        // Re-heat simulation
        graphRef.current.d3ReheatSimulation();
      }
    }, 500);
  }, [data]);

  // 搜索逻辑
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSelectedIndex(-1); // Reset selection
  };
  const filteredNodes = useMemo(() => {
    if (!searchTerm) return [];
    const lower = searchTerm.toLowerCase();
    return allNodes.filter((n: any) =>
      n.name.toLowerCase().includes(lower) ||
      (n.description && n.description.toLowerCase().includes(lower))
    ).slice(0, 8); // Limit results
  }, [searchTerm, allNodes]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredNodes.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < filteredNodes.length) {
        focusNode(filteredNodes[selectedIndex]);
      }
    }
  };

  const focusNode = (node: any) => {
    if (!graphRef.current) return;

    // Fly to node
    graphRef.current.centerAt(node.x, node.y, 1000);
    graphRef.current.zoom(6, 2000);
    setSearchTerm(''); // Clear search on select
    setSelectedIndex(-1);
    setHoverNode(node); // Show tooltip for selected
  };

  const handleNodeClick = useCallback((node) => {
    if (node.path) {
      history.push(node.path);
    }
  }, [history]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: 'calc(100vh - 60px)', position: 'relative', overflow: 'hidden', background: isDark ? '#1a202c' : '#ffffff' }}>

      {/* Search Overlay - Centered Floating Bar */}
      <div style={{
        position: 'absolute',
        top: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        width: 400,
        maxWidth: '90%'
      }}>
        <div style={{
          position: 'relative',
          width: '100%'
        }}>
          <input
            type="text"
            placeholder="✨ Search Knowledge Graph..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: '50px',
              border: '1px solid var(--ifm-color-emphasis-200)',
              backgroundColor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)',
              color: 'var(--ifm-font-color-base)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              outline: 'none',
              fontSize: '16px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'}
            onBlur={(e) => e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'}
          />
          {/* Search Icon */}
          <div style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.5,
            pointerEvents: 'none'
          }}>
            🔍
          </div>
        </div>

        {searchTerm && (
          <ul style={{
            listStyle: 'none',
            padding: '10px',
            margin: '10px 0 0',
            backgroundColor: isDark ? 'rgba(30,30,30,0.95)' : 'rgba(255,255,255,0.95)',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            maxHeight: '400px',
            overflowY: 'auto',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--ifm-color-emphasis-200)'
          }}>
            {filteredNodes.length > 0 ? filteredNodes.map((node: any, index: number) => (
              <li
                key={node.id}
                onClick={() => focusNode(node)}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  marginBottom: '4px',
                  transition: 'background 0.2s',
                  backgroundColor: index === selectedIndex ? 'var(--ifm-color-emphasis-200)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--ifm-color-emphasis-100)';
                  setSelectedIndex(index);
                }}
                onMouseLeave={(e) => e.currentTarget.style.background = index === selectedIndex ? 'var(--ifm-color-emphasis-200)' : 'transparent'}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--ifm-color-primary)' }}>{node.name}</div>
                {node.description && (
                  <div style={{ fontSize: '12px', color: 'var(--ifm-color-content-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2px' }}>
                    {node.description}
                  </div>
                )}
              </li>
            )) : (
              <li style={{ padding: '20px', color: 'gray', textAlign: 'center' }}>No results found</li>
            )}
          </ul>
        )}
      </div>

      {/* Hover Tooltip - Top Right Fixed */}
      {hoverNode && (
        <div style={{
          position: 'absolute',
          top: 30,
          right: 30,
          width: 320,
          padding: '24px',
          borderRadius: '20px',
          backgroundColor: isDark ? 'rgba(30,30,30,0.85)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          zIndex: 5,
          pointerEvents: 'none',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <h3 style={{ margin: '0 0 10px', fontSize: '18px', fontWeight: 700, color: 'var(--ifm-color-primary)', lineHeight: 1.3 }}>
            {(hoverNode as any).name}
          </h3>

          {(hoverNode as any).description ? (
            <p style={{ fontSize: '13px', lineHeight: '1.6', margin: '0 0 15px', color: 'var(--ifm-font-color-base)', opacity: 0.9 }}>
              {(hoverNode as any).description}
            </p>
          ) : (
            <p style={{ fontSize: '13px', color: 'var(--ifm-color-content-secondary)', fontStyle: 'italic', margin: '0 0 15px' }}>
              No description available.
            </p>
          )}

          {/* Stats Section */}
          <div style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            borderBottom: '1px solid var(--ifm-color-emphasis-200)'
          }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--ifm-color-content-secondary)' }}>Connections</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{(hoverNode as any).val ? Math.max(0, (hoverNode as any).val - 1) : 0}</div>
              </div>
            </div>

            {/* Neighbor Nodes List */}
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--ifm-color-content-secondary)', marginBottom: '5px' }}>Connected To</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {(() => {
                  const neighbors = data.links.reduce((acc: string[], link: any) => {
                    const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                    const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                    if (sourceId === (hoverNode as any).id) acc.push(targetId);
                    else if (targetId === (hoverNode as any).id) acc.push(sourceId);
                    return acc;
                  }, []);

                  const neighborNodes = data.nodes.filter((n: any) => neighbors.includes(n.id));

                  if (neighborNodes.length === 0) return <span style={{ fontSize: '12px', color: 'var(--ifm-color-content-secondary)' }}>None</span>;

                  return neighborNodes.map((n: any) => (
                    <span key={n.id} style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#f0f2f5',
                      color: isDark ? '#e6e6e6' : '#1f1f1f',
                      border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #d9d9d9',
                      display: 'inline-block'
                    }}>
                      {n.name}
                    </span>
                  ));
                })()}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {((hoverNode as any).allTags || []).map((tag: string) => (
              <span key={tag} style={{
                fontSize: '10px',
                padding: '4px 10px',
                borderRadius: '20px',
                backgroundColor: isDark ? 'rgba(56, 189, 248, 0.2)' : '#e6f7ff',
                color: isDark ? '#38bdf8' : '#0050b3',
                border: isDark ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid #91d5ff',
                fontWeight: 600,
                display: 'inline-block'
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
