function say() {
  console.log(a);
  console.log(this.a);
}
a = "window";
var obj1 = (function () {
  var a = "1-1";
  return {
    a: "1-2",
    say: function () {
      console.log(a);
      console.log(this.a);
    },
  };
})();
var obj2 = (function () {
  var a = "2-1";
  return {
    a: "2-2",
    say: function () {
      console.log(a);
      console.log(this.a);
    },
  };
})();
say(); // window window
obj1.say(); // 1-1 1-2
obj2.say(); // 2-1 2-2
obj1.say = say;
obj1.say(); // window 1-2
obj1.say = obj2.say;
obj1.say(); // 2-1 1-2
