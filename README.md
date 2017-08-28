本框架改写自ZanUI，经整合扩展后作为公司及个人UI库使用，现发布至github，希望能给小程序开发人员带来帮助。

只需导入`dist`目录，`examples`目录为参考案例，无需导入。

在你的`app.wxss`直接引入`./dist/index.wxss`。

根据功能的不同，可以将组件大致的分为4类：

#### 1. 简单组件

如按钮组件，只要按照wxml结构写就好了

~~~html
<!-- examples/btn/index.html -->

<view class="model_btn">按钮</view>
~~~

#### 2. 复杂组件

如加载更多组件，需要先引入定义好的模版，然后给模版传递数据

~~~html
<!-- examples/loadmore/index.html -->

<!-- 引入组件模版 -->
<import src="./dist/loadmore/index.wxml" />

<!-- 加载中 -->
<template is="model_loadmore" data="{{loading: true}}" />

<!-- 一条数据都没有 -->
<template is="model_loadmore" data="{{nodata: true}}" />

<!-- 没有更多数据了 -->
<template is="model_loadmore" data="{{nomore: true}}" />
~~~

#### 3. 带事件回调的组件

如数量选择组件，需要先引入模版，然后给模版传递数据

~~~html
<!-- examples/quantity/index.html -->

<import src="./dist/quantity/index.wxml" />

<template is="model_quantity" data="{{ ...quantity, componentId: 'customId' }}" />
~~~

然后通过`model.Quantity`把相关回调注入到页面中

~~~js
// examples/quantity/index.js

var model = require('./dist/index');

Page(Object.assign({}, model.Quantity, {
  data: {
    quantity: {
      quantity: 10,
      min: 1,
      max: 20
    },
  },

  handleModelQuantityChange(e) {
    // 如果页面有多个Quantity组件，则通过唯一componentId进行索引
    var compoenntId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      'quantity.quantity': quantity
    });
  }
}));
~~~

#### 4. API类组件

如Toast组件，需要先引入模版，并在页面上使用。

> 注意`modelToast`这个数据也是通过`model.Toast`注入到页面的

~~~html
<!-- examples/toast/index.html -->

<import src="./dist/toast/index.wxml" />

<view bindtap="showToast">显示toast</view>

<template is="model_toast" data="{{ modelToast }}"></template>
~~~

将API注入到页面后，就可以通过`this`来直接调用相应的API了

~~~js
<!-- examples/toast/index.js -->

var model = require('./dist/index');

Page(Object.assign({}, model.Toast, {
  showToast() {
    this.showModelToast('toast的内容');
  }
}));

~~~

更多示例可以在项目的`examples`目录中查看。