export class TreeNode {
  val: number;
  left: TypeNode;
  right: TypeNode;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export type TypeNode = TreeNode | null;

class BinarySearchTree {
  root: TypeNode;
  constructor() {
    this.root = null;
  }

  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.val <= node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(val: number) {
    const node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  inOrderTraverse(node: TypeNode = this.root) {
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.val);
      this.inOrderTraverse(node.right);
    }
  }

  preOrderTraverse(node: TypeNode = this.root) {
    if (node !== null) {
      console.log(node.val);
      this.preOrderTraverse(node.left);
      this.preOrderTraverse(node.right);
    }
  }

  postOrderTraverse(node: TypeNode = this.root) {
    if (node !== null) {
      this.postOrderTraverse(node.left);
      this.postOrderTraverse(node.right);
      console.log(node.val);
    }
  }

  findMin(): number | null {
    let current = this.root;
    let minValue = null;
    while (current) {
      minValue = current.val;
      current = current.left;
    }
    return minValue;
  }

  findMax(): number | null {
    let current = this.root;
    let maxValue = null;
    while (current) {
      maxValue = current.val;
      current = current.right;
    }
    return maxValue;
  }

  search(val: number, node: TypeNode = this.root): boolean {
    if (node === null) return false;
    if (val < node.val) {
      return this.search(val, node.left);
    } else if (val > node.val) {
      return this.search(val, node.right);
    } else {
      return true;
    }
  }

  remove(val: number) {
    this.removeNode(this.root, val);
  }

  private removeNode(node: TypeNode, val: number): TypeNode {
    if (node === null) return null;
    if (val < node.val) {
      node.left = this.removeNode(node.left, val);
      return node;
    } else if (val > node.val) {
      node.right = this.removeNode(node.right, val);
      return node;
    } else {
      //需要移除的节点是一个叶子节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      //需要移除的节点包含一个子节点
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 需要移除的节点包含两个子节点
      // 1、需要找到它右侧子树中的最小节点来代替它的位置
      // 2、将它右侧子树中的最小节点移除
      // 3、将更新后的节点的引用指向原节点的父节点
      const aux = this.findMinNode(node.right);
      node.val = aux!.val;
      node.right = this.removeNode(node.right, aux!.val);
      return node;
    }
  }

  private findMinNode = function (node: TypeNode) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  };
}
