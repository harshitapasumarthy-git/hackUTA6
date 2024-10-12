// parseDocument.js
export const parseDocument = (text) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const stack = [];
  let root = null;

  lines.forEach((line) => {
    const match = line.match(/^(#+)\s+(.*)$/);
    if (match) {
      const level = match[1].length;
      const name = match[2].trim();
      const node = { name, children: [] };

      while (stack.length && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        root = node;
      } else {
        const parent = stack[stack.length - 1].node;
        parent.children.push(node);
      }

      stack.push({ level, node });
    }
  });

  return root;
};
