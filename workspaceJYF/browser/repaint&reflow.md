(阮一峰)[https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html]
## 浏览器在处理重排时，会递归处理DOM节点，所以导致重排的成本高于重绘。

## 优化
1. 浏览器会尽量把变动集中在一起一次执行
2. 尽量不要把读操作和写操作放在一个语句里面：样式的写操作之后，如果有宽\高\offset\scroll\读操作，都会引发浏览器立即重新渲染，就不能用1的特性了
3. table元素的重排和重绘成本，要高于div元素
4. 不要一条条地改变样式，而要通过改变class，或者csstext属性，一次性地改变样式。
5. 尽量使用离线DOM，比如使用 cloneNode() 方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点
6. 先将元素设为display: none（需要1次重排和重绘），然后对这个节点进行操作，最后再恢复显示（需要1次重排和重绘）。
7. (适用于会有复杂动画的元素) position属性为absolute或fixed的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。
8. 只在必要的时候，才将元素的display属性为可见，因为不可见的元素不影响重排和重绘。另外，visibility : hidden的元素只对重绘有影响，不影响重排。
9. 使用虚拟DOM的脚本库，比如React等
10. 使用 window.requestAnimationFrame()、window.requestIdleCallback() 这两个方法调节重新渲染

## 网页生成步骤
1. HTML -> DON
2. CSS -> CSSOM
3. DOM + CSSOM = render tree
4. 生成布局（layout）
5. paint

"生成布局"（flow）+ "绘制"（paint）= 合称为"渲染"（render）

## 会导致重新渲染的
* 修改DOM
* 修改样式表
* 用户事件（比如鼠标悬停、页面滚动、输入框键入文字、改变窗口大小等等）

## 导致reflow
主要是改变了**页面布局**
1. 调整窗口大小
2. 调整字体大小
3. 样式表变动
4. 元素内容变化，尤其是输入控件
5. CSS伪类激活，在用户交互过程中发生
6. DOM操作，DOM元素增删、修改
7. width, clientWidth, scrollTop等布局宽高的计算

## 只会导致repaint的操作
1. 改变元素的可见性
2. 改变元素的轮廓
3. 改变元素的背景
