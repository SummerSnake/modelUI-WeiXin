Page({
  data: {
    selectItem: true,
    model_ph: 'Model'
  },
  //点击选择类型
  itemShow: function () {
    var selectItem = this.data.selectItem;
    if (selectItem === true) {
      this.setData({
        selectItem: false,
      })
    } else {
      this.setData({
        selectItem: true,
      })
    }
  },
  //点击切换
  nowSelect: function (e) {
    this.setData({
      model_ph: e.target.dataset.now,
      selectItem: true
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})