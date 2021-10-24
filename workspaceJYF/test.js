function MyPromise(fn) {
  var that = this;
  that.status = "pending";
  that.onFullFillCallBackList = [];
  that.onRejectCallBackList = [];
  function resolve(v) {
    status = "resolved";
    that.value = v;
    that.onFullFillCallBackList.forEach((cb) => cb(v));
  }
  function reject(v) {
    status = "rejected";
    that.value = v;
    that.onRejectCallBackList.forEach((cb) => cb(v));
  }
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
MyPromise.prototype.then = function (FullFill, Reject) {
  var that = this;
  var onFullFill = typeof FullFill === "function" ? FullFill : (v) => v;
  var onReject =
    typeof Reject === "function"
      ? Reject
      : (v) => {
          throw v;
        };
  if (that.status === "pending") {
    that.onFullFillCallBackList.push(onFullFill);
    that.onRejectCallBackList.push(onReject);
  }
  if (that.status === "resolved") {
    onFullFill(that.value);
  }
  if (that.status === "rejected") {
    onReject(that.value);
  }
};

// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 0);
// }).then((value) => {
//   console.log(value);
// });

MyPromise.all = function (promiseList) {
  function listAll() {
    var promise = new MyPromise((resolve) => {
      resolve();
    });
    return function queue(newPromise) {
      promise = promise.then(() => newPromise);
      return promise;
    };
  }
  return new MyPromise((resolve) => {
    var count = 0;
    var results = Array.from(promiseList, () => "");
    var addQueue = listAll();
    promiseList.forEach((p, idx) => {
      addQueue(p).then((v) => {
        results[idx] = v;
        count++;
        if (count === promiseList.length) {
          resolve(results);
        }
      });
    });
  });
};

const promise1 = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 100, "ok");
});
// const promise2 = 42;
const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

MyPromise.all([promise1, promise3]).then((values) => {
  console.log(values);
});
