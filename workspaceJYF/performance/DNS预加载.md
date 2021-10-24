[X-DNS-Prefetch-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)

打开和关闭 DNS 预读取
你可以通过在服务器端发送 X-DNS-Prefetch-Control 报头，或是在文档中使用值为 http-equiv 的 <meta> 标签：

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

您可以通过将 content 的参数设置为“on”来改变设置。

强制查询特定主机名
你可以通过使用 rel 属性值为 link type 中的 dns-prefetch 的 `<link>` 标签来对特定域名进行预读取：

```html
<link rel="dns-prefetch" href="http://www.spreadfirefox.com/" />
```

在这个例子中，Firefox 将预解析域名"www.spreadfirefox.com"。

而且，<link> 元素也可以使用不完整的 URL 的主机名来标记预解析，但这些主机名前必需要有双斜线：

```html
<link rel="dns-prefetch" href="//www.spreadfirefox.com" />
```

强制对域名进行预读取在一些情况下很有用, 比如, 在网站的主页上，强制在整个网站上频繁引用的域名的预解析，即使它们不在主页本身上使用。即使主页的性能可能不受影响，这将提高整体站点性能。
