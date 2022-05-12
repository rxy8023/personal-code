## 树
### 树的概念
树是一树是一种数据结构，它是由n(n>=1)个有限结点组成一个具有层次关系的集合种数据结构，它是由n(n>=1)个有限结点组成一个具有层次关系的集合。
```Javascript
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
```

### 深度优先遍历（DFS）
```javascript
// 递归遍历
const dfsTree = (tree) => {
  console.log(tree.val)
  tree.forEach((child) => {
    dfsTree(val)
  })
}
// 非递归遍历，使用栈
const dfsTree = (tree) => {
  const array = [tree]
  while(array.length > 0) {
    const element = array.pop()
    console.log(element.val)
    element.children.forEach(item => {
      array.push(item)
    })
  }
}
```
### 广度优先遍历（BFS）
```javascript
// 递归遍历，使用队列
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
```
## 二叉树
### 二叉树的概念

二叉树是一个每个结点最多只能有两个分支的树，左边的分支称之为左子树，右边的分支称之为右子树
二叉树中，每一个节点的左右子树的高度相差不能大于 1，称为平衡二叉树。

```javascript
// 对象存储发
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
    val: 3,
    left: null,
    right: null
  }
}
```
数组存储法(是用于满二叉树)
1. 位置为 i 的节点，它的父节点位置为 i/2
2. 它的左子节点 2i
3. 它的右子节点 2i+1
因此，如果我们把完全二叉树存储在数组里（从下标为 1 开始存储），我们完全可以通过下标找到任意节点的父子节点。从而完整的构建出这个完全二叉树。这就是数组存储法。
数组存储法相对于链式存储法不需要为每个节点创建它的左右指针，更为节省内存。

### 二叉树的遍历
之所以叫前序、中序、后序遍历，是因为根节点在前、中、后
### 前序遍历
对于二叉树中的任意一个节点，先打印该节点，然后是它的左子树，最后右子树
#### 递归实现
```javascript
var inorderTraversal = function(root) {
  const res = []
  const resc = (node) => {
    if (!node) return
    res.push(node.val)
    resc(node.left)
    resc(node.right)
  }
  resc(root)
  return res
}

```
#### 非递归实现
利用栈来记录遍历的过程，实际上，递归就使用了调用栈，所以这里我们可以使用栈来模拟递归的过程

1. 首先根入栈
2. 将根节点出栈，将根节点值放入结果数组中
3. 然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
4. 继续出栈（左子树被出栈）
5. 依次循环出栈遍历入栈，直到栈为空，遍历完成
```javascript
const preorderTraversal = (root) => {
  const result = []
  const stack = []
  if (!root) return []
  stack.push(root)
  while(stack.length > 0) {
    // 第一步的时候，先访问的是根节点
    const curNode = stack.pop()
    result.push(curNode.val)
    if (curNode.left !==null) stack.push(curNode.left)
    if (curNode.right!==null) stack.push(curNode.left)
  }
  return result
}
```


### 中序遍历
对于二叉树中的任意一个节点，先打印它的左子树，然后是该节点，最后右子树
```javascript
const inorderTraversal = (root) => {
  let result = []
  let stack = []
  let p = root//指针
  if (!root) return result
   while(stack.length || p) {
    while(p) {
        //先把左子树全部丢在栈里面去
        stack.push(p)
        p = p.left//将指针指向left左节点，并把它推到栈中
    }
    //把最近左节点弹出来（栈顶的节点元素）
    const n = stack.pop()
    result.push(n.val)
    //访问右节点
    p = n.right
  }
  return result
}
```

### 后序遍历
对于二叉树中的任意一个节点，先打印它的左子树，然后是右子树，最后该节点
```javascript
const postorderTraversal = (root) => {
  const result = []
  const rsc = (node) => {
    if (!node) return
    rsc(node.left)
    rsc(node.right)
    result.push(node.val)
  }
  rsc(root)
  return result
}
```
## 相关算法
### leetCode94 二叉树的中序遍历
### leetcode102 二叉树的层序遍历
```javascript
// 深度优先遍历
var levelOrder = function(root) {
    const result = []
    if(!root) return result
    const func = (node, depth) => {
        if(!node) return
        result[depth] = result[depth] || []
        result[depth].push(node.val)
        func(node.left, depth + 1)
        func(node.right, depth + 1)
    }
    func(root, 0)
    return result
};
```
### LeetCode104 二叉树的最大深度
### LeetCode111 二叉树的最小深度
### Leetcode101 对称二叉树
给定一个二叉树，检查它是否是镜像对称的。
#### 思路：
比较二叉树的 前序遍历 和 对称前序遍历 来判断是不是对称的。

前序遍历：根-左-右

对称前序遍历：根-右-左
``` javascript
// 递归
var isSymmetric = function(root) {
  if(!root) return true
  const func = (left, right) => {
      if(!left && !right) return true
      if(!left || !right) return false
      return left.val === right.val && func(left.left, right.right) && func(left.right, right.left)
  }
  return func(root.left, root.right)
};
// 迭代
var isSymmetric = function(root) {
  if(!root) return true
  // 用栈模拟递归
  let stack = [root.left, root.right]
  while(stack.length) {
    let right = stack.pop()
    let left = stack.pop()
    if(!left || !right) return false
    if (left.val !== right.val) return false
    stack.push(left.left)
    stack.push(right.right)
    stack.push(left.right)
    stack.push(right.left)
  }
}
```
### LeetCode112 路径总和
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
说明: 叶子节点是指没有子节点的节点。
#### 思路：
从左右子树开始分别递归，当然也可以维护两个栈来模拟递归（一个调用栈，一个sum栈）
``` javascript
var hasPathSum = function(root, targetSum) {
  // 根节点为空
  if (root === null) return false;

  // 叶节点 同时 sum 参数等于叶节点值
  if (root.left === null && root.right === null) return root.val === targetSum;

  // 总和减去当前值，并递归
  sum = sum - root.val
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
```

### 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

注意:
你可以假设树中没有重复的元素。

例如，给出
## 前端应用

自顶向下:上层数值将值传递给下层，直到最后一层停止递归
自底向上：上层数值依赖于下层数值，最后得到两个值（根的左子树的深度和根的右子树的深度）取最大值即可
