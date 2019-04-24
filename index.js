function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(currentNode, newNode) {
  // traverse the tree
  if(newNode.data === currentNode.data) {
    return true
  }

  if(currentNode.data > newNode.data) {
    if(!currentNode.left) {
      return currentNode.left = newNode
    } else {
      currentNode = currentNode.left
      return findOrAdd(currentNode, newNode)
    }
  } else {
    if(!currentNode.right) {
      return currentNode.right = newNode
    } else {
      currentNode = currentNode.right
      return findOrAdd(currentNode, newNode)
    }
  }
}

function min(currentNode) {
  if(currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}

function max(currentNode) {
  if(currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode
  }
}
