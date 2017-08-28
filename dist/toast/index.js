module.exports = {
  showModelToast(title, timeout) {
    var modelToast = this.data.modelToast || {};
    clearTimeout(modelToast.timer);

    // 弹层设置~
    modelToast = {
      show: true,
      title
    };
    this.setData({
      modelToast
    });

    var timer = setTimeout(() => {
      this.clearModelToast();
    }, timeout || 3000);

    this.setData({
      'modelToast.timer': timer
    });
  },

  clearModelToast() {
    var modelToast = this.data.modelToast || {};
    clearTimeout(modelToast.timer);

    this.setData({
      'modelToast.show': false
    });
  }
};
