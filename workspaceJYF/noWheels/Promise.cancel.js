function cancellation(aPromise, token) {
  return Promise.race([
    aPromise,
    new Promise((resolve, reject) => {
      token.cancel = () => {
        reject("cancel");
      };
    }),
  ]);
}
const token = {};
function getPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 10000);
  });
}

let main = cancellation(getPromise(), token)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });

setTimeout(() => {
  token.cancel();
  main = null;
}, 5000);
