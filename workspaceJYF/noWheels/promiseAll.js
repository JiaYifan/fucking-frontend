function myPromiseAll(list){
    return new Promise((resolve,reject)=>{
        var result = Array.from(list,()=>undefined);
        var count = 0;
        list.forEach((e,idx)=>{
            var newPromise = Promise.resolve(e);
            newPromise.then((v)=>{
                result[idx]=v;
                count++;
                if(result.length===count) resolve(result);
            }).catch(e=>{reject(e)});
        })
    })
}

var a = "a";
var b = new Promise((resolve)=>{setTimeout(()=>{resolve("b")},1000)});
var c = new Promise((resolve,reject)=>{setTimeout(()=>{reject("c")},1000)});

myPromiseAll([a,b,]).then((r)=>{console.log(r)});
myPromiseAll([a,b,c]).then((r)=>{console.log(r)});
