class 本质是语法糖，多了一个静态方法的功能

```javascript
class A {}

class B extends A {
  constructor() {
    super(); //ES6 要求，子类的构造函数必须执行一次super函数。
  }
}
```

注意，super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super()在这里相当于 `A.prototype.constructor.call(this)`
