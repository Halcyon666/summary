import React from 'react';
import Layout from '@theme/Layout';
import GraphView from '../components/GraphView';

export default function GraphPage() {
  return (
    <Layout
      title="Knowledge Graph"
      description="Visualizing relationships between documentation pages">
      <main>
        <GraphView />
      </main>
    </Layout>
  );
}
