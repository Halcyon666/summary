
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

const DOCS_DIR = path.join(__dirname, '../docs');
const OUTPUT_FILE = path.join(__dirname, '../static/graph-data.json');

// 检测图中的循环
function findCycles(links) {
  const adj = new Map();
  links.forEach(link => {
    if (!adj.has(link.source)) adj.set(link.source, []);
    adj.get(link.source).push(link.target);
  });

  const cycles = [];
  const visited = new Set();
  const recursionStack = new Set();
  const path = [];

  function dfs(node) {
    visited.add(node);
    recursionStack.add(node);
    path.push(node);

    const neighbors = adj.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      } else if (recursionStack.has(neighbor)) {
        // 找到循环
        const cycleStart = path.indexOf(neighbor);
        const cycle = path.slice(cycleStart).concat([neighbor]);
        cycles.push(cycle);
      }
    }

    path.pop();
    recursionStack.delete(node);
  }

  for (const node of adj.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return cycles;
}

// 打破循环：移除导致循环的链接
function breakCycles(links) {
  const cycles = findCycles(links);

  if (cycles.length === 0) {
    return links;
  }

  console.warn(`⚠️  Detected ${cycles.length} cycle(s) in graph:`);
  cycles.forEach((cycle, i) => {
    console.warn(`  Cycle ${i + 1}: ${cycle.join(' -> ')}`);
  });

  // 创建链接集合便于查找
  const linkSet = new Set(links.map(l => `${l.source}->${l.target}`));

  // 对于每个循环，移除最后一个链接
  cycles.forEach(cycle => {
    if (cycle.length >= 2) {
      const source = cycle[cycle.length - 2];
      const target = cycle[cycle.length - 1];
      linkSet.delete(`${source}->${target}`);
      console.warn(`  Breaking cycle by removing: ${source} -> ${target}`);
    }
  });

  // 转换回数组
  const filteredLinks = [];
  linkSet.forEach(linkStr => {
    const [source, target] = linkStr.split('->');
    filteredLinks.push({ source, target });
  });

  return filteredLinks;
}

function generateGraph() {
  console.log('Generating graph data...');

  // Find all MD/MDX files
  const files = glob.sync('**/*.{md,mdx}', { cwd: DOCS_DIR });

  const nodes = [];
  const links = [];
  const idToNodeMap = new Map();

  // 1. First pass: Collect all nodes
  files.forEach(file => {
    const filePath = path.join(DOCS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    // Skip if no frontmatter or draft
    if (!data || data.draft) return;

    // Determine ID: use frontmatter id > file basename (without extension)
    // For Docusaurus, the file name (without ext) is often the default ID
    const fileBasename = path.basename(file, path.extname(file));
    const id = data.id || fileBasename;

    // Determine path (relative to docs root, for linking)
    // Remove extension and index
    let docPath = file.replace(/\.(md|mdx)$/, '');
    if (docPath.endsWith('/index')) docPath = docPath.slice(0, -6);

    // Fix: Normalize path separators for Windows to ensure forward slashes in URL
    docPath = docPath.split(path.sep).join('/');

    // Fix: Add baseUrl '/summary' because Docusaurus history.push needs absolute path
    // or relative to current, but absolute is safer.
    // NOTE: If you change baseUrl in docusaurus.config.ts, change it here too.
    const baseUrl = '/summary';

    const node = {
      id: id,
      // Fix: routeBasePath is "" in docusaurus.config.ts, so remove '/docs' prefix
      // Use absolute path relative to baseUrl
      path: baseUrl + '/' + docPath,
      name: data.title || data.sidebar_label || id,
      description: data.description || "", // Add description
      allTags: data.tags || [], // Add all tags for display
      group: data.tags ? data.tags[0] : 'other', // Color by first tag
      val: 1, // Default size
      sources: data.sources || [],
      references: data.references || []
    };

    nodes.push(node);
    idToNodeMap.set(id, node);
  });

  // 2. Second pass: Build links
  nodes.forEach(sourceNode => {
    // Handle 'sources' (outgoing links from this node)
    // sources: [targetId1, targetId2] -> sourceNode links to targetId
    if (sourceNode.sources) {
      const sources = Array.isArray(sourceNode.sources) ? sourceNode.sources : [sourceNode.sources];
      sources.forEach(targetId => {
        if (idToNodeMap.has(targetId)) {
          links.push({
            source: targetId, // Wait, if A has source B, it means B -> A (B is source of A)
            target: sourceNode.id
          });
        }
      });
    }

    // Handle 'references' (outgoing links from this node)
    // references: [targetId1] -> sourceNode links to targetId (sourceNode refers to targetId)
    if (sourceNode.references) {
      const refs = Array.isArray(sourceNode.references) ? sourceNode.references : [sourceNode.references];
      refs.forEach(targetId => {
        if (idToNodeMap.has(targetId)) {
          links.push({
            source: sourceNode.id,
            target: targetId
          });
        }
      });
    }
  });

  // 在生成最终链接前，检测并打破循环
  const filteredLinks = breakCycles(links);

  // Calculate degree (number of connections) for node size
  const degrees = new Map();
  filteredLinks.forEach(link => {
    degrees.set(link.source, (degrees.get(link.source) || 0) + 1);
    degrees.set(link.target, (degrees.get(link.target) || 0) + 1);
  });

  nodes.forEach(node => {
    node.val = (degrees.get(node.id) || 0) + 1; // Minimum size 1
  });

  const graphData = { nodes, filteredLinks };

  // Ensure static dir exists
  const staticDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(graphData, null, 2));
  console.log(`Graph data generated with ${nodes.length} nodes and ${filteredLinks.length} links.`);
}

generateGraph();
