var hy = hy || {};
hy.gui = hy.gui || {};
hy.gui.TextBox = hy.extend(hy.gui.Label);
hy.gui.TextBox.prototype.defaultEditEnable = true;
hy.gui.TextBox.prototype.defaultMouseEnable = true;
hy.gui.TextBox.prototype.init = function(config){
    this.superCall("init",[config]);
    this._editEnable = this.isUndefined(config.editEnable) ? this.defaultEditEnable : config.editEnable;
    this.addObserver(this.notifySyncText,this,this._syncTextBoxToInputBox);
    this.addObserver(this.notifyMouseOver,this,this._showHtmlTextBox);
    this.addObserver(this.notifyMouseOut,this,this._hideHtmlTextBox);
    this.addObserver(this.notifyFocus,this,this._focusHtmlTextBox);
    this.addObserver(this.notifyBlur,this,this._blurHtmlTextBox);
    this.addObserver(this.notifyClick,this,this._blurHtmlTextBox);
}
hy.gui.TextBox.prototype.setEditEnable = function(editEnable){
    this._editEnable = editEnable;
}
hy.gui.TextBox.prototype.getEditEnable = function(){
    return this._editEnable;
}
hy.gui.TextBox.prototype._focusHtmlTextBox = function(sender, e){
    var app = this.getApplication();
    if(app){
        app.getInputTextBox().focusForNode(this);
    }
}
hy.gui.TextBox.prototype._blurHtmlTextBox = function(sender, e){
    var app = this.getApplication();
    if(app && app.getInputTextBox().getInputNode() == this){
        app.getInputTextBox().blurForNode(this);
    }
}
hy.gui.TextBox.prototype._showHtmlTextBox = function(sender, e){
    var app = this.getApplication();
    if(app){
        app.getInputTextBox().showForNode(this);
    }
}
hy.gui.TextBox.prototype._hideHtmlTextBox = function(sender, e){
    var app = this.getApplication();
    if(app && app.getInputTextBox().getInputNode() == this){
        app.getInputTextBox().hideForNode(this);
    }
}
hy.gui.TextBox.prototype._syncTextBoxToInputBox = function(){
    var app = this.getApplication();
    if(app && app.getInputNode() == this){
        app.getInputTextBox().value = this.getText();
    }
}
