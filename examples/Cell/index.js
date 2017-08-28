var Model = require('../../dist/index');

Page(Object.assign({}, Model.Switch, {
  data: {
    checked: false
  },

  onLoad() {
  },

  onShow() {
  },

  handleModelSwitchChange(e) {
    this.setData({
      checked: e.checked
    });
  }
}));
