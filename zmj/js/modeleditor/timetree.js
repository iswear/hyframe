var modeleditor = modeleditor || {};
modeleditor.class = modeleditor || {};
modeleditor.class.TimeTreeNode = hy.extend(hy.gui.TreeNodeView);
modeleditor.class.TimeTreeNode.prototype.defaultReuseIdentity = "structtreenode";
modeleditor.class.TimeTreeNode.prototype.defaultActiveColor = hy.gui.colors.BLUE;
modeleditor.class.TimeTreeNode.prototype.init = function(config){
    this.superCall("init", [config]);
    this._nodeTimeline = new hy.gui.Timeline({
        contextMenu:[{name:'gegegegege'},{name:'gegegegege'},{name:'gegegegege'},{name:'gegegegege'},{name:'gegegegege'},{name:'gegegegege'}]
    });
    this.addChildNodeAtLayer(this._nodeTimeline, 0);
    this.addObserver(this.notifyLayoutSubNodes, this, this._layoutTreeNodeView);
    this.addObserver(this.notifyPaint, this, this._paintSeparateLine);
}
modeleditor.class.TimeTreeNode.prototype.setNodeUnit = function(nodeUnit){
    if(nodeUnit){
        this._nodeUnit = nodeUnit;
    }
}
modeleditor.class.TimeTreeNode.prototype.getNodeUnit = function(){
    return this._nodeUnit;
}
modeleditor.class.TimeTreeNode.prototype._layoutTreeNodeView = function(sender){
    this._nodeTimeline.setX(0);
}
modeleditor.class.TimeTreeNode.prototype._paintSeparateLine = function(sender, dc, rect){
    dc.setStrokeStyle("#666");
    dc.setLineWidth(1);
    dc.beginPath();
    dc.moveTo(0, this.getHeight() - 0.5);
    dc.lineTo(this.getWidth(), this.getHeight() - 0.5);
    dc.stroke();
}

modeleditor.class.TimeTree = hy.extend(hy.gui.TreeView);
modeleditor.class.TimeTree.prototype.notifySyncNodeText = "syncnodetext";
modeleditor.class.TimeTree.prototype.defaultNodeHeight = 20;
modeleditor.class.TimeTree.prototype.defaultNodeEditEnable = false;
modeleditor.class.TimeTree.prototype.defaultNodeSelectEnable = true;
modeleditor.class.TimeTree.prototype.init = function(config) {
    this.superCall("init", [config]);
    this._nodeHeight = this.isUndefined(config.nodeHeight) ? this.defaultNodeHeight : config.nodeHeight;
}
modeleditor.class.TimeTree.prototype.setNodeHeight = function(nodeHeight){
    this._nodeHeight = nodeHeight;
}
modeleditor.class.TimeTree.prototype.getNodeHeight = function(){
    return this._nodeHeight;
}
modeleditor.class.TimeTree.prototype.getNodeUnitOfNodePath = function(nodePath,nodeDeepth){
    if(nodePath && nodeDeepth >= 0 && nodeDeepth <= nodePath.length){
        var node = this.getRoot();
        if(node){
            for(var i=0; i<nodeDeepth; ++i){
                node = node.getChildUnitAtIndex(nodePath[i]);
                if(!node){
                    break;
                }
            }
            return node;
        }else{
            return null;
        }
    }else{
        return null;
    }
}

modeleditor.class.TimeTree.prototype.numberOfNodeInPath = function(treeView, nodePath){
    var node = this.getRoot();
    var nodeDeepth = nodePath.length;
    for(var i=0;i<nodeDeepth;++i){
        if(node){
            node = node.getChildUnitAtIndex(nodePath[i]);
        }else{
            return 0;
        }
    }
    if(node){
        var childUnits = node.getChildUnits();
        return childUnits.length;
    }else{
        return 0;
    }
}
modeleditor.class.TimeTree.prototype.heightOfNodeInPath = function(treeView, nodePath){
    return this._nodeHeight;
}
modeleditor.class.TimeTree.prototype.widthOfNodeInPath = function(treeView, nodePath){
    var nodeView = treeView.getNodeViewOfNodePath(nodePath, nodePath.length);
    if(nodeView){
        return nodeView.getHeight() * (nodePath.length+2) + 10;
    }else{
        return 0;
    }
}
modeleditor.class.TimeTree.prototype.contextMenuOfNodeInPath = function(treeView, nodePath){
    return null;
}
modeleditor.class.TimeTree.prototype.viewOfNodeInPath = function(treeView,nodePath) {
    var nodeRoot = this.getRoot();
    if (nodeRoot) {
        var nodeDeepth = nodePath.length;
        for (var i = 0; i < nodeDeepth; ++i) {
            nodeRoot = nodeRoot.getChildUnitAtIndex(nodePath[i]);
        }
        var nodeView = treeView.getReuseNodeViewOfIdentity("treenode");
        if (nodeView == null) {
            nodeView = new modeleditor.class.TimeTreeNode({reuseIdentity: "treenode"});
        }
        if (this._selNodePath && this._compareNodePath(nodePath, nodePath.length, this._selNodePath, this._selNodePath.length)) {
            nodeView.setSelected(true);
        } else {
            nodeView.setSelected(false);
        }
        nodeView.setNodeUnit(nodeRoot);
        return nodeView;
    } else {
        return null;
    }
}