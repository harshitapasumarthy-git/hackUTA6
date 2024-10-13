export const initialDSNodes = [
  {
    id: "Distributed Systems",
    color: "red",
    symbolType: "square",
    description:
      "A collection of autonomous computing elements that appear as a single system.",
  },
  {
    id: "Characteristics",
    color: "lightblue",
    description:
      "Key properties like autonomy, transparency, and coherence in distributed systems.",
  },
  {
    id: "Autonomous Components",
    color: "lightgreen",
    description: "Independent computers with their own resources and time.",
  },
  {
    id: "Single Coherent System",
    color: "lightgreen",
    description: "The system appears as one unified system to the user.",
  },
  {
    id: "Challenges",
    color: "orange",
    description:
      "Issues such as synchronization, fault tolerance, and performance bottlenecks.",
  },
  {
    id: "Coordination and Synchronization",
    color: "orange",
    description:
      "Managing the complex interactions and operations across distributed systems.",
  },
  {
    id: "Partial Failure",
    color: "orange",
    description:
      "Handling failures where parts of the system might stop working while others continue.",
  },
  {
    id: "Goals",
    color: "lightyellow",
    description:
      "Objectives like resource sharing, transparency, scalability, and openness.",
  },
  {
    id: "Resource Accessibility",
    color: "pink",
    description: "Ease of accessing and sharing remote resources.",
  },
  {
    id: "Distribution Transparency",
    color: "lightcoral",
    description: "Hiding the complexity of distributed resources from users.",
  },
  {
    id: "Types of Transparency",
    color: "lightcoral",
    description:
      "Different types like access, location, migration, replication, failure, concurrency.",
  },
  {
    id: "Access Transparency",
    color: "lightcoral",
    description: "Hide how resources are accessed.",
  },
  {
    id: "Location Transparency",
    color: "lightcoral",
    description: "Hide the physical location of resources.",
  },
  {
    id: "Migration Transparency",
    color: "lightcoral",
    description: "Hide that a resource may be moved to another location.",
  },
  {
    id: "Performance and Reliability",
    color: "purple",
    description:
      "Using multiple machines to enhance performance and fault tolerance.",
  },
  {
    id: "Scalability",
    color: "cyan",
    description:
      "Growth in size, geographical area, and administrative domains without losing performance.",
  },
  {
    id: "Types of Scalability",
    color: "cyan",
    description: "Includes size, geographical, and administrative scalability.",
  },
  {
    id: "Vertical Scaling",
    color: "cyan",
    description: "Adding resources to a single node.",
  },
  {
    id: "Horizontal Scaling",
    color: "cyan",
    description: "Adding more nodes to the system.",
  },

  // Lecture 2 Nodes (Expanded)
  {
    id: "Types of Distributed Systems",
    color: "red",
    symbolType: "square",
    description:
      "Different categories of distributed systems, such as computing, information, and pervasive systems.",
  },
  {
    id: "High Performance Distributed Computing",
    color: "lightblue",
    description:
      "Distributed systems focused on parallel computing, clusters, and grid computing.",
  },
  {
    id: "Parallel Computing Systems",
    color: "lightgreen",
    description:
      "Multiple CPUs share the same memory for high-speed computation but with limited scalability.",
  },
  {
    id: "Distributed Shared Memory Systems",
    color: "lightgreen",
    description:
      "Memory is shared across machines, enabling processors to access remote memory.",
  },
  {
    id: "Cluster Computing Systems",
    color: "lightgreen",
    description:
      "Homogeneous computers connected by a high-speed network to work on distributed tasks.",
  },
  {
    id: "Grid Computing Systems",
    color: "lightgreen",
    description:
      "Heterogeneous systems spread across locations for distributed computing tasks.",
  },
  {
    id: "Cloud Computing Systems",
    color: "lightgreen",
    description:
      "Cloud infrastructure provides scalable and on-demand computing.",
  },
  {
    id: "Service Models",
    color: "lightgreen",
    description: "Different service models like SaaS, PaaS, IaaS, and more.",
  },
  {
    id: "SaaS",
    color: "lightgreen",
    description:
      "Software as a Service - Applications running on cloud infrastructure.",
  },
  {
    id: "PaaS",
    color: "lightgreen",
    description:
      "Platform as a Service - Developer tools and services for building applications on the cloud.",
  },
  {
    id: "IaaS",
    color: "lightgreen",
    description:
      "Infrastructure as a Service - Users get access to virtualized computing resources like servers and storage.",
  },
  {
    id: "Distributed Information Systems",
    color: "orange",
    description:
      "Systems focused on data distribution, often involving transaction processing.",
  },
  {
    id: "Transaction Processing",
    color: "orange",
    description:
      "All-or-nothing distributed transactions that maintain system consistency.",
  },
  {
    id: "Distributed Pervasive Systems",
    color: "lightyellow",
    description:
      "Mobile and embedded systems in the environment, like sensor networks.",
  },
  {
    id: "Ubiquitous Computing",
    color: "pink",
    description:
      "Systems that are continuously present and interact seamlessly with users.",
  },
  {
    id: "Mobile Computing",
    color: "lightcoral",
    description: "Mobile devices adapt to changing network conditions.",
  },
  {
    id: "Wireless Sensor Networks",
    color: "purple",
    description:
      "A network of sensors that communicate wirelessly and monitor environments.",
  },
  {
    id: "Sensor Network Challenges",
    color: "purple",
    description:
      "Includes dynamic setup, result aggregation, and network failure management.",
  }
];

export const initialDSLinks = [
  // Links from Lecture 1 (Expanded)
  { source: "Distributed Systems", target: "Characteristics" },
  { source: "Characteristics", target: "Autonomous Components" },
  { source: "Characteristics", target: "Single Coherent System" },
  { source: "Distributed Systems", target: "Challenges" },
  { source: "Challenges", target: "Coordination and Synchronization" },
  { source: "Challenges", target: "Partial Failure" },
  { source: "Distributed Systems", target: "Goals" },
  { source: "Goals", target: "Resource Accessibility" },
  { source: "Goals", target: "Distribution Transparency" },
  { source: "Distribution Transparency", target: "Types of Transparency" },
  { source: "Types of Transparency", target: "Access Transparency" },
  { source: "Types of Transparency", target: "Location Transparency" },
  { source: "Types of Transparency", target: "Migration Transparency" },
  { source: "Goals", target: "Performance and Reliability" },
  { source: "Goals", target: "Scalability" },
  { source: "Scalability", target: "Types of Scalability" },
  { source: "Types of Scalability", target: "Vertical Scaling" },
  { source: "Types of Scalability", target: "Horizontal Scaling" },

  // Links from Lecture 2 (Expanded)
  {
    source: "Types of Distributed Systems",
    target: "High Performance Distributed Computing",
  },
  {
    source: "High Performance Distributed Computing",
    target: "Parallel Computing Systems",
  },
  {
    source: "High Performance Distributed Computing",
    target: "Distributed Shared Memory Systems",
  },
  {
    source: "High Performance Distributed Computing",
    target: "Cluster Computing Systems",
  },
  {
    source: "High Performance Distributed Computing",
    target: "Grid Computing Systems",
  },
  {
    source: "High Performance Distributed Computing",
    target: "Cloud Computing Systems",
  },
  { source: "Cloud Computing Systems", target: "Service Models" },
  { source: "Service Models", target: "SaaS" },
  { source: "Service Models", target: "PaaS" },
  { source: "Service Models", target: "IaaS" },
  {
    source: "Types of Distributed Systems",
    target: "Distributed Information Systems",
  },
  {
    source: "Distributed Information Systems",
    target: "Transaction Processing",
  },
  {
    source: "Types of Distributed Systems",
    target: "Distributed Pervasive Systems",
  },
  { source: "Distributed Pervasive Systems", target: "Ubiquitous Computing" },
  { source: "Distributed Pervasive Systems", target: "Mobile Computing" },
  {
    source: "Distributed Pervasive Systems",
    target: "Wireless Sensor Networks",
  },
  { source: "Wireless Sensor Networks", target: "Sensor Network Challenges" },

];
