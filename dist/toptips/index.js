module.exports = {
  showModelTopTips(content = '', options = {}) {
    let modelTopTips = this.data.modelTopTips || {};
    // 如果已经有一个计时器在了，就清理掉先
    if (modelTopTips.timer) {
      clearTimeout(modelTopTips.timer);
      modelTopTips.timer = undefined;
    }

    if (typeof options === 'number') {
      options = {
        duration: options
      };
    }

    // options参数默认参数扩展
    options = Object.assign({
      duration: 3000
    }, options);

    // 设置定时器，定时关闭topTips
    let timer = setTimeout(() => {
      this.setData({
        'modelTopTips.show': false,
        'modelTopTips.timer': undefined
      });
    }, options.duration);

    // 展示出topTips
    this.setData({
      modelTopTips: {
        show: true,
        content,
        options,
        timer
      }
    });
  }
};
