```javascript
for(var i=0;i<liList.length;i++){
    // 有问题的代码
    liList[i].onclick=function(){
        // 在执行的时候，i已经变成4了，因为这里是全局变量i的引用
        alert(i);
    }
    // 用闭包解
    (function (i){
        liList[i].onclick=function(){
            alert(i));
        }
    })(i)
    // 用this来解
    liList[i].number=i;
    liList[i].onclick=function(){
        alert(this.number);
    }
}
// 用forEach解
liList.forEach((e,i)=>{
    e.onclick=function(){
        console.log(i);
    }
})
```
