var data = [
  {
    id: "100",
    name: "上海",
    children: [
      {
        id: "101",
        name: "浦东",
        children: [],
      },
      {
        id: "102",
        name: "浦西",
        children: [],
      },
    ],
  },
  {
    id: "200",
    name: "杭州",
    children: [
      {
        id: "201",
        name: "西湖",
        children: [
          {
            id: "2012",
            name: "断桥",
            children: [],
          },
        ],
      },
      {
        id: "202",
        name: "余杭",
        children: [],
      },
    ],
  },
];

function find(data, id) {
  function dfs(root) {
    let level = 1;
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (node.id === id) {
        return node;
      } else if (
        node.id[level] === id[level] &&
        node.children &&
        node.children.length > 0
      ) {
        level++;
        stack.push(...node.children);
      }
    }
    return null;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].id[0] === id[0]) {
      const r = dfs(data[i]);
      if (r) return r.name;
      break;
    }
  }
  return "";
}

console.log(find(data, "101"));
console.log(find(data, "201"));
console.log(find(data, "2012"));
