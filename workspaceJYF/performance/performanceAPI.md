```javascript
const calcTime = () => {
  let times = {};
  let t = window.performance.timing;

  // 重定向时间
  times.redirectTime = t.redirectEnd - t.redirectStart;

  // DNS 查询耗时
  times.dnsTime = t.domainLookupEnd - t.domainLookupStart;

  // TCP 建立连接完成握手的时间
  connect = t.connectEnd - t.connectStart;

  // TTFB 读取页面第一个字节的时间
  times.ttfbTime = t.responseStart - t.navigationStart;

  // DNS 缓存时间
  times.appcacheTime = t.domainLookupStart - t.fetchStart;

  // 卸载页面的时间
  times.unloadTime = t.unloadEventEnd - t.unloadEventStart;

  // TCP 连接耗时
  times.tcpTime = t.connectEnd - t.connectStart;

  // request 请求耗时
  times.reqTime = t.responseEnd - t.responseStart;

  // 解析 DOM 树耗时
  times.analysisTime = t.domComplete - t.domInteractive;

  // 白屏时间
  times.blankTime = t.domLoading - t.fetchStart;

  // domReadyTime 即用户可交互时间
  times.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart;

  // 用户等待页面完全可用的时间
  times.loadPage = t.loadEventEnd - t.navigationStart;

  return times;
};
```
