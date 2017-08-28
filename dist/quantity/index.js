function handle(e, num) {
  var dataset = e.currentTarget.dataset;
  var componentId = dataset.componentId;
  var disabled = dataset.disabled;
  var quantity = +dataset.quantity;

  if (disabled) return null;

  callback.call(this, componentId, quantity + num);
}

function callback(componentId, quantity) {
  quantity = +quantity;
  var e = { componentId, quantity };
  console.info('[model:quantity:change]', e);

  if (this.handleModelQuantityChange) {
    this.handleModelQuantityChange(e);
  } else {
    console.warn('页面缺少 handleModelQuantityChange 回调函数');
  }
}

var Quantity = {
  _handleModelQuantityMinus(e) {
    handle.call(this, e, -1);
  },

  _handleModelQuantityPlus(e) {
    handle.call(this, e, +1);
  },

  _handleModelQuantityBlur(e) {
    var dataset = e.currentTarget.dataset;
    var componentId = dataset.componentId;
    var max = +dataset.max;
    var min = +dataset.min;
    var value = e.detail.value;

    if (!value) {
      setTimeout(() => {
        callback.call(this, componentId, min);
      }, 16);
      callback.call(this, componentId, value);
      return '' + value;
    }

    value = +value;
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    callback.call(this, componentId, value);

    return '' + value;
  }
};

module.exports = Quantity;
