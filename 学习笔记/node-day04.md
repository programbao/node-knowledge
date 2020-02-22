### promise
大量的异步操作  如果需要顺序执行  通过回调函数执行---回调地狱

通过promise解决回调地狱
1. 封装promise 函数

```
function test () {
    //返回promise
    return new Primise((resolve,reject) => {
        // 需要的异步处理
        成功时候 resolve
        失败时候 reject
    })
}
```
2. 根据顺序  形成链式调用
test().then().then().catch()

3. 捕获错误


### node操作mongoose