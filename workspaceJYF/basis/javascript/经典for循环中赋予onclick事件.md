```javascript
for(var i=0;i<liList.length;i++){
    // 有问题的代码
    iList[i].onclick=function(){
        // 函数内部没有i,就从再上一层的上下文中找到已经变成4的i
        alert(i));
    }
    // 用闭包解
    (function (i){
        iList[i].onclick=function(){
            alert(i));
        }
    })(i)
    // 用this来解
    liList[i].number=i;
    liList[i].onclick=function(){
        alert(this.number)
    }
}
```