export const getAllBookmarks = (stateUpdater) => {
    chrome.bookmarks.getTree(results => {
        stateUpdater(results)
    })
}


export let getChildrenBookmark = (childId, stateUpdater) => {
    chrome.bookmarks.getChildren(childId, (results) => {
      stateUpdater(results);
    // console.log(results)
    });
};


export const getBookmarkNodes = () => {
    
}

export const getTreeNodes = () => {
    
}

let arrayOfNodes = [];
export let setArrayNodes = (nodes) => {
    arrayOfNodes.push(nodes)
    // console.log(arrayOfNodes)
//    return getArrayNodes(arrayOfNodes)
}

export let getArrayNodes = () => {
    console.log(arrayOfNodes)
    // return takeNodes
}



/* for (let i = 0; i < bookmarks.length; i++) {
    const bookmarkNodes = bookmarks[i];
    // console.log(bookmarkNodes)
    for (let j = 0; j < bookmarkNodes.children.length; j++) {
      const treeNode = bookmarkNodes.children[j];
      // console.log(treeNode)
      nodesContainer.push(treeNode)
        
    }
} */
