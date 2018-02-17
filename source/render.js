const renderHtmlFromTemplate = (template) => {    
    const domParser = new DOMParser();
    const docResult = domParser.parseFromString(template, 'text/html');
    
    return docResult.body.firstElementChild;
}

const cleanNode = (node) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}    

const addElementToNode = (element, parentNode) => {
    return parentNode.appendChild(element);
}

export { renderHtmlFromTemplate, cleanNode, addElementToNode };


