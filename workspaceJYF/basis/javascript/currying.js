function curryingAdd(...args) {
  const target = (...next) => curryingAdd(...[...next, ...args]);
  target.getValue = () => args.reduce((acc, e) => acc + e, 0);
  return target;
}

var f1 = curryingAdd(1, 2, 3);
console.log(f1.getValue()); // 6 输出是参数的和
var f2 = curryingAdd(1)(2, 3);
console.log(f2.getValue()); // 6
var f3 = curryingAdd(1)(2)(3)(4);
console.log(f3.getValue()); // 10

function curryingFn(...args) {
  const target = (...next) => curryingFn(...[...next, ...args]);
  target.handler = (value) => value;
  target.getValue = () => target.handler(args);
  return target;
}

var f1 = curryingFn(1, 2, 3);
f1.handler = (value) => value.reduce((acc, e) => acc + e, 0);
console.log(f1.getValue()); // 6
var f2 = curryingFn(1)(2, 3);
console.log(f2.getValue()); // [ 2,3,1 ]
var f3 = curryingFn(1)(2)(3)(4);
f3.handler = (value) => value.reduce((acc, e) => acc * e, 1);
console.log(f3.getValue()); // 24
