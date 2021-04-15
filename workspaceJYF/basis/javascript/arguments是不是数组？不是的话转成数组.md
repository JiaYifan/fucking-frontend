arguments是一个类似数组的对象，它也包含了数组的索引和length属性，但不提供数组的一些操作方法，例如sort等。
```javascript
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);
var args = [].slice.bind(arguments)();

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```