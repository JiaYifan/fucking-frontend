> 参照 lodash [throttle](https://github.com/lodash/lodash/blob/master/throttle.js) [debounce](https://github.com/lodash/lodash/blob/master/debounce.js)

[知乎比较赞的回答](https://zhuanlan.zhihu.com/p/86426949)

```javascript
function debounce(func, wait, immediate) {
  var timeout, result;

  var debounced = function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);

    var later = function () {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(this, args);

    return result;
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
```
