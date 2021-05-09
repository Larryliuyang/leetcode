
const spliter = ",";
const NN = "X";

var serialize = function(root) {
    let sb = [];
    buildingString(root, sb);
    return sb.join('');
};

function buildingString(node, sb) {
    if (node == null) {
        sb.push(NN)
        sb.push(spliter)
    }else{
        sb.push(node.val)
        sb.push(spliter);
        buildingString(node.left, sb);
        buildingString(node.right, sb);
    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let node = [].concat(data.split(spliter))
    
    return buildTree(node)
};


function buildTree(nodes) {
        let val =  nodes.shift();
        if(val === NN) return null;
        else{
            let node =  new TreeNode(parseInt(val));
            node.left = buildTree(nodes);
            node.right = buildTree(nodes);
            return node;
        }
    }