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
  const res: number[] = [];
  const queue = [root]
  while(queue.length) {
    const node = queue.shift()
    res.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return res
}
