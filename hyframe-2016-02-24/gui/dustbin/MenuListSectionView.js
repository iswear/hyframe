/**
 * Created by Administrator on 2015/10/31.
 */
HY.GUI.MenuListSectionView = function(config){
    this.init(config);
}
HY.GUI.MenuListSectionView.prototype = new HY.GUI.View();
HY.GUI.MenuListSectionView.prototype.defaultReuseIdentity = "default";
HY.GUI.MenuListSectionView.prototype.initMember = function(config){
    this.superCall("initMember",[config]);
    if(config.reuseIdentity != undefined){ this._reuseIdentity = config.reuseIdentity; } else { this._reuseIdentity = this.defaultReuseIdentity; }
    this._sectionIndex = -1;
}
HY.GUI.MenuListSectionView.prototype.getReuseIdentity = function(){
    return this._reuseIdentity;
}
HY.GUI.MenuListSectionView.prototype.setReuseIdentity = function(reuseIdentity){
    this._reuseIdentity = reuseIdentity;
}
HY.GUI.MenuListSectionView.prototype.getSectionIndex = function(){
    return this._sectionIndex;
}
HY.GUI.MenuListSectionView.prototype.setSectionIndex = function(sectionIndex){
    this._sectionIndex = sectionIndex;
}