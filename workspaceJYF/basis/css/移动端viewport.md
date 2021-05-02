width=device-width, initial-scale=1

## 目的

让我们写的页面在水平方向上恰好与各个设备的屏幕严丝合缝，需要将页面布局视口设置为设备理想视口。

## 但是

- 只设置 width = device-width 苹果移动设备横屏时会有 bug
- 只设置 init-scale = 1 WP7 系统 IE 浏览器横屏会有 bug
  终极方案：

将 meta:vp 标签的属性值设置为 width=device-width, initial-scale=1 就不仅能够将页面的布局视口自动设置为各个移动设备的理想视口，还能够同时兼容 iphone、ipad 的 Safari 以及 WP7 IE 浏览器的横屏问题。

```javascript
<meta name="viewport" content="width=device-width, initial-scale=1">
```

> [详解 meta-viewport 标签中的 width 和 initial-scale 属性](https://blog.csdn.net/leman314/article/details/111936863)
