Page({
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['Button', 'Cell', 'Form', 'Switch']
      },
      {
        id: 'base',
        name: '基础组件',
        open: false,
        pages: ['Badge', "Card", 'Flex', 'Grids', 'Icon', 'Label', 'Panel', 'Text',]
      },
      {
        id: 'operate',
        name: '操作反馈',
        open: false,
        pages: ['Dialog', 'Loadmore', 'Progress', 'Quantity', 'Steps', 'Toast', 'Toptips']
      },
      {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['Tab', 'Dropdown', 'Swiper', 'SwiperTab',]
      },
      {
        id: 'tool',
        name: '拓展组件',
        open: false,
        pages: ['RedEnvelope']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});