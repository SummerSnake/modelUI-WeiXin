var Model = require('../../dist/index');

Page(Object.assign({}, Model.Toast, {
  data: {},

  showToast() {
    this.showModelToast('toast的内容');
  }
}));
