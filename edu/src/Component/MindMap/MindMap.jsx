import React from 'react';
import MindMapUtil from './MindMapUtil';

const initialElements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];

const MindMap = () => {
  return (
    <div>
      <h1>Mind Map with D3.js</h1>
      <MindMapUtil />
    </div>
  );
};

export default MindMap;