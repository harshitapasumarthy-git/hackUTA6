// MindMap.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MindMapUtil = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Sample data for the mind map
    const data = {
      name: "Root",
      children: [
        {
          name: "Node 1",
          children: [
            { name: "Node 1.1" },
            { name: "Node 1.2" }
          ]
        },
        {
          name: "Node 2",
          children: [
            { name: "Node 2.1" },
            { name: "Node 2.2" }
          ]
        },
      ],
    };

    const width = 800;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create a tree layout
    const treeLayout = d3.tree().size([height, width - 160]);

    // Create a root node
    const root = d3.hierarchy(data);
    treeLayout(root);

    // Create links between nodes
    svg.selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x)
      )
      .style("fill", "none")
      .style("stroke", "#ccc");

    // Create nodes
    const nodes = svg.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`);

    nodes.append('circle')
      .attr('r', 6)
      .style('fill', '#69b3a2');

    nodes.append('text')
      .attr('dy', '.35em')
      .attr('x', d => (d.children ? -8 : 8))
      .style('text-anchor', d => (d.children ? 'end' : 'start'))
      .text(d => d.data.name);
    
  }, []);

  return <svg ref={svgRef}></svg>;
};


export default MindMapUtil;