var Model = require('../../dist/index');

Page(Object.assign({}, Model.TopTips, {
  data: {},

  showTopTips() {
    this.showModelTopTips('toptips的内容');
  }
}));
