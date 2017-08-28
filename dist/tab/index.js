var Tab = {
  _handleModelTabChange(e) {
    var dataset = e.currentTarget.dataset;
    var componentId = dataset.componentId;
    var selectedId = dataset.itemId;
    var data = { componentId, selectedId };

    console.info('[model:tab:change]', data);
    if (this.handleModelTabChange) {
      this.handleModelTabChange(data);
    } else {
      console.warn('页面缺少 handleModelTabChange 回调函数');
    }
  }
};

module.exports = Tab;
