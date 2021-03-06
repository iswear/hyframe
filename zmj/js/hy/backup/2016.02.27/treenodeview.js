var hy = hy || {};
hy.gui = hy.gui || {};
hy.gui.TreeNodeView = hy.extend(hy.gui.View);
hy.gui.TreeNodeView.prototype.defaultReuseIdentity = "treenode";
hy.gui.TreeNodeView.prototype.init = function(config){
    this.superCall("init",[config]);
    this._reuseIdentity = this.isUndefined(config.reuseIdentity) ? this.defaultReuseIdentity : config.reuseIdentity;
    this._nodePath = null;
}
hy.gui.TreeNodeView.prototype.setReuseIdentity = function(reuseIdentity){
    this._reuseIdentity = reuseIdentity;
}
hy.gui.TreeNodeView.prototype.getReuseIdentity = function(){
    return this._reuseIdentity;
}
hy.gui.TreeNodeView.prototype.setNodePath = function(nodePath){
    this._nodePath = nodePath;
}
hy.gui.TreeNodeView.prototype.getNodePath = function(){
    return this._nodePath;
}