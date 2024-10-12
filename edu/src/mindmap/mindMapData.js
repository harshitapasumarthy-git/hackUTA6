// mindMapData.js
const mindMapData = {
  name: "Distributed Systems",
  children: [
    {
      name: "Consensus Algorithms",
      children: [{ name: "Paxos" }, { name: "Raft" }],
    },
    {
      name: "Replication",
      children: [
        { name: "State Machine Replication" },
        { name: "Primary-Backup" },
      ],
    },
    // Add more nodes as needed
  ],
};

export default mindMapData;
