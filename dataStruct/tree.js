const TreeNode = (data, left, right) => {
    this.data = data;
    this.left = left;
    this.right = right;
    this.toString = data.toString();
};


class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert = (data) => {
        if (this.root === null) {
            this.root = TreeNode(data, null, null);
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                const newNode = TreeNode(data, null, null);
                if (parent.left === null) {
                    parent.left = newNode;
                    break;
                } else if (parent.right === null) {
                    parent.right = newNode;
                    break;
                } else {
                    current = current.left;
                }
            }
        }
    };

    print = () => {
        let current = this.root;
        while (true) {
            let str;
            if (current) {
                str += current.data.toString;
            } else {
                break;
            }
            if (current.left) {
                str += ',left='+current.left.data.toString;
                const leftChild = current.left;

            }
            if (current.right) {
                str += ',right='+current.right.data.toString;
            }
            str += '\n';
            current = current.left;
        }
    };

    printNode = (node) => {
        if (node) {
            let str = node.data.toString();
            if (node.left) {
                str += ',left='+node.left.data.toString();
            }
            if (node.right) {
                str += ',right='+node.right.data.toString();
            }
            str += '\n';
            str += this.printNode(node.left);
            str += this.printNode(node.right);
            return str;
        }
        return '';
    };
}