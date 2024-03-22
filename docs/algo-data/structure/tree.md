# 树

## 二叉树

### 二叉树常见术语
::: tip 常见术语
- **二叉树的「根节点」**: 位于二叉树的顶部的节点，没有父节点。
- **二叉树的「叶节点」**: 没有子节点，也被称为「叶子节点」。
- **二叉树的「边」**: 连接两个节点的线段，即节点引用（指针）。
- **节点所在的「层」**: 从顶至底，根节点所在的层为1。
- **节点的「度」**: 节点的子节点数量，二叉树的度取值范围0,1,2。
- **二叉树的「高度」**: 从顶至底，根节点所在的层为1。
- **节点的「深度」**: 从根节点至叶节点所经过的边的条数。
- **节点的「高度」**: 从距离该节点最远的叶节点到该节点所经过的边的条数。
:::

## 二叉树的遍历
### 层序遍历
::: code-group
```js [binary_tree_bfs.js]
const levelOrder = (root) => {
  const res = [];
  const queue = [root]
  while(queue.length) {
    const node = queue.shift()
    res.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return res
}
```
```ts [binary_tree_bfs.ts]
/* 二叉树节点类 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.left = left === undefined ? null : left; // 左子节点引用
        this.right = right === undefined ? null : right; // 右子节点引用
    }
}
const levelOrder = (root: TreeNode | null): number[] => {
  const res: number[] = []
  const queue = [root]
  while(queue.length) {
    const node = queue.shift()
    res.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return res
}
```
:::
