// 多叉树的遍历，写出递归和非递归
const tree = {
  val: 1,
  children: [{
    val:2,
    children: [{
      val: 3,
      children: []
    }]
  }]
}

//  深度优先遍历（DFS）
// 递归遍历
const dfsTree = (tree) => {
  console.log(tree.val)
  tree.forEach((child) => {
    dfsTree(val)
  })
}
// 非递归遍历，使用栈
const dfsTreeStack = (tree) => {
  const array = [tree]
  while(array.length > 0) {
    const element = array.pop()
    console.log(element.val)
    element.children.forEach(item => {
      array.push(item)
    })
  }
}

// 广度优先遍历
const bfs = (root) => {
  // 新建一个队列使得根节点入队
  const array = [root]
  while(array.length > 0) {
    // 取出元素
    const element = array.shift()
    console.log(element.val)
    element.children.forEach((item) => {
      array.push(item)
    })
  }
}

// leetcode102 二叉树的层序遍历
// 深度优先
const levelOrder = (root) => {
    const result = []
    if(!root) return result
    const func = (node, depth) => {
        // 停止条件：找到最后一层节点
        if(!node) return
        result[depth] = result[depth] || []
        result[depth].push(node.val)
        func(node.left, depth + 1)
        func(node.right, depth + 1)
    }
    func(root, 0)
    return result
}
// 广度优先
var levelOrderWidth = function(root) {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    let cur = []
    let tmp = []
    while (queue.length) {
      let node = queue.shift()
      cur.push(node.val)
      if(node.left) tmp.push(node.left)
      if(node.right) tmp.push(node.right)
    }
    result.push(cur)
    queue = tmp
  }
  return result
};

const bTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: null,
      right: null
    },
  },
  right: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    },
  }
}

const maxDepth = (root) => {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// 广度优先
const maxDepthBfs = (root) => {
  if(!root) return 0
  let max = 0
  let queue = [root]

  while(queue.length) {
    max+=1
    let len = queue.length
    for(let i = 0;i<len; i++) {
      let node = queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }
  return max
}

// 对称二叉树，递归
var isSymmetric = function(root) {
  if(!root) return true
  const func = (left, right) => {
      if(!left && !right) return true
      if(!left || !right) return false
      return left.val === right.val && func(left.left, right.right) && func(left.right, right.left)
  }
  return func(root.left, root.right)
};
// 对称二叉树，迭代
var isSymmetricNew = function(root) {
  if(!root) return true
  // 用栈模拟递归
  let stack = [root.left, root.right]
  while(stack.length) {
    let right = stack.pop()
    let left = stack.pop()
    if (left && right) {
      if (left.val !== right.val) return false
      stack.push(left.left)
      stack.push(right.right)
      stack.push(left.right)
      stack.push(right.left)
    } else if(left || right) return false // 如果一个为空一个🈶值
  }
  return true
}
console.log(isSymmetric(bTree))


// 路径综合，递归
var hasPathSum = function(root, targetSum) {
  // 根节点为空
  if (root === null) return false;

  // 叶节点 同时 sum 参数等于叶节点值
  if (root.left === null && root.right === null) return root.val === targetSum;

  // 总和减去当前值，并递归
  sum = sum - root.val
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// 从前序与中序遍历序列构造二叉树
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if(preorder.length ===0 || inorder.length === 0) return null
  let node = new TreeNode(preorder[0])
  let index = inorder.indexOf(preorder[0])
  const inLeft = inorder.slice(0, index)
  const inRight = inorder.slice(index + 1)
  const preLeft = preorder.slice(1, index + 1)
  const preRight = preorder.slice(index + 1)
  node.right = buildTree(inLeft, preRight)
  node.left = buildTree(preLeft, inRight)
  return node
};

// 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
