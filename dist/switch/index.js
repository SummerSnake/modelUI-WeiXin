var Switch = {
  _handleModelSwitchChange(e) {
    var dataset = e.currentTarget.dataset;

    var checked = !dataset.checked;
    var loading = dataset.loading;
    var disabled = dataset.disabled;
    var componentId = dataset.componentId;

    if (loading || disabled) return;

    console.info('[model:switch:change]', { checked, componentId });

    if (this.handleModelSwitchChange) {
      this.handleModelSwitchChange({
        checked,
        componentId
      });
    } else {
      console.warn('页面缺少 handleModelSwitchChange 回调函数');
    }
  }
};

module.exports = Switch;
