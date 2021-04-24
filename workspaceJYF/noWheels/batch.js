// 实现一个批量请求函数 multiRequest(urls, maxNum)
// 要求如下：

// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出

function myFetch(url) {
  const waitTime = Math.random() * 100 + 100;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(url);
      resolve(url);
    }, waitTime);
  });
}

function multiRequest(urls, maxNum) {
  return new Promise((resolve) => {
    const results = Array.from(urls, () => null);
    let numSuccess = 0;
    let waitIdx = maxNum;
    function triggerNext() {
      if (waitIdx < urls.length) {
        const thisIdx = waitIdx;
        myFetch(urls[thisIdx]).then((r) => {
          results[thisIdx] = r;
          numSuccess++;
          triggerNext();
        });
        waitIdx++;
      }
      if (numSuccess === urls.length) resolve(results);
    }
    for (let i = 0; i < maxNum; i++) {
      myFetch(urls[i]).then((r) => {
        results[i] = r;
        numSuccess++;
        triggerNext();
      });
    }
  });
}

multiRequest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 6).then((r) =>
  console.log(r)
);
