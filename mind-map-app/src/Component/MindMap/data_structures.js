export const initialDataSNodes = [
  {
    id: "Data Structure",
    color: "red",
    symbolType: "square",
    description:
      "Organizing and storing data efficiently for access and modification.",
    source: "Data_structures.pdf, Unit 1 - Definition",
  },
  {
    id: "Primitive Data Structures",
    color: "lightblue",
    description: "Basic data types such as Integers and Characters.",
    source: "Data_structures.pdf, Primitive Data Structures",
  },
  {
    id: "Non-Primitive Data Structures",
    color: "lightgreen",
    description: "Derived data types like Arrays, Structures, and Classes.",
    source: "Data_structures.pdf, Non-Primitive Data Structures",
  },
  {
    id: "Linear Data Structures",
    color: "lightgreen",
    description:
      "Data structures with a sequence, each element having a unique predecessor and successor. E.g. Stack, Queue.",
    source: "Data_structures.pdf, Linear Data Structures",
  },
  {
    id: "Non-Linear Data Structures",
    color: "lightgreen",
    description: "Hierarchical data structures like Trees and Graphs.",
    source: "Data_structures.pdf, Non-Linear Data Structures",
  },
  {
    id: "Static Data Structures",
    color: "orange",
    description:
      "Fixed size data structures created at compile time. E.g. Array.",
    source: "Data_structures.pdf, Static Data Structures",
  },
  {
    id: "Dynamic Data Structures",
    color: "orange",
    description:
      "Data structures whose size changes during runtime. E.g. Linked List.",
    source: "Data_structures.pdf, Dynamic Data Structures",
  },
  {
    id: "Sequential Access",
    color: "lightyellow",
    description: "Data is accessed in sequence. E.g. Linked List.",
    source: "Data_structures.pdf, Sequential and Direct Access",
  },
  {
    id: "Direct Access",
    color: "pink",
    description:
      "Data can be accessed directly without sequential traversal. E.g. Array.",
    source: "Data_structures.pdf, Sequential and Direct Access",
  },
  {
    id: "Stack",
    color: "lightcoral",
    description:
      "A linear data structure following Last In First Out (LIFO) order.",
    source: "Data_structures.pdf, Stack",
  },
  {
    id: "Queue",
    color: "lightcoral",
    description:
      "A linear data structure following First In First Out (FIFO) order.",
    source: "Data_structures.pdf, Queue",
  },
  {
    id: "Circular Queue",
    color: "purple",
    description:
      "A circular queue where the last position is connected to the first.",
    source: "Data_structures.pdf, Circular Queue",
  },
  {
    id: "Double Ended Queue",
    color: "purple",
    description:
      "A queue where elements can be inserted or deleted from both ends.",
    source: "Data_structures.pdf, Double Ended Queue",
  },
  {
    id: "Priority Queue",
    color: "lightblue",
    description:
      "A queue where each element is assigned a priority and served accordingly.",
    source: "Data_structures.pdf, Priority Queue",
  },
  {
    id: "Linked List",
    color: "cyan",
    description: "A sequence of nodes where each node points to the next one.",
    source: "Data_structures.pdf, Linked List",
  },
  {
    id: "Singly Linked List",
    color: "cyan",
    description:
      "A type of linked list where each node has one pointer to the next node.",
    source: "Data_structures.pdf, Singly Linked List",
  },
  {
    id: "Doubly Linked List",
    color: "cyan",
    description:
      "A type of linked list where each node has two pointers: one to the next node and one to the previous node.",
    source: "Data_structures.pdf, Doubly Linked List",
  },
  {
    id: "Circular Linked List",
    color: "cyan",
    description:
      "A linked list where the last node points back to the first node.",
    source: "Data_structures.pdf, Circular Linked List",
  },
  {
    id: "Tree",
    color: "green",
    description:
      "A non-linear data structure with a hierarchical relationship.",
    source: "Data_structures.pdf, Trees",
  },
  {
    id: "Binary Tree",
    color: "green",
    description: "A tree where each node has at most two children.",
    source: "Data_structures.pdf, Binary Tree",
  },
  {
    id: "Binary Search Tree",
    color: "green",
    description:
      "A binary tree where left children are smaller than the node, and right children are greater.",
    source: "Data_structures.pdf, Binary Search Tree",
  },
  {
    id: "Graph",
    color: "orange",
    description: "A collection of vertices connected by edges.",
    source: "Data_structures.pdf, Graph",
  },
  {
    id: "DFS",
    color: "orange",
    description: "Depth First Search traversal technique.",
    source: "Data_structures.pdf, Depth First Search (DFS)",
  },
  {
    id: "BFS",
    color: "orange",
    description: "Breadth First Search traversal technique.",
    source: "Data_structures.pdf, Breadth First Search (BFS)",
  },
  {
    id: "Sorting",
    color: "lightblue",
    description: "Arranging data in a specific order.",
    source: "Data_structures.pdf, Sorting",
  },
  {
    id: "Bubble Sort",
    color: "lightblue",
    description: "Sorting by repeatedly swapping adjacent elements.",
    source: "Data_structures.pdf, Bubble Sort",
  },
  {
    id: "Quick Sort",
    color: "lightblue",
    description: "A divide and conquer algorithm for sorting.",
    source: "Data_structures.pdf, Quick Sort",
  },
];

export const initialDataSLinks = [
  { source: "Data Structure", target: "Primitive Data Structures" },
  { source: "Data Structure", target: "Non-Primitive Data Structures" },
  { source: "Non-Primitive Data Structures", target: "Linear Data Structures" },
  {
    source: "Non-Primitive Data Structures",
    target: "Non-Linear Data Structures",
  },
  { source: "Linear Data Structures", target: "Stack" },
  { source: "Linear Data Structures", target: "Queue" },
  { source: "Queue", target: "Circular Queue" },
  { source: "Queue", target: "Double Ended Queue" },
  { source: "Queue", target: "Priority Queue" },
  { source: "Non-Linear Data Structures", target: "Tree" },
  { source: "Non-Linear Data Structures", target: "Graph" },
  { source: "Tree", target: "Binary Tree" },
  { source: "Binary Tree", target: "Binary Search Tree" },
  { source: "Graph", target: "DFS" },
  { source: "Graph", target: "BFS" },
  { source: "Data Structure", target: "Sorting" },
  { source: "Sorting", target: "Bubble Sort" },
  { source: "Sorting", target: "Quick Sort" },
];
