const fs = require('fs')

// 判断一个文件是否存在
//  fs.stat('./hehe.js',(err,stats) => {
//      if (err) {
//         console.log('文件不存在')
//      }else {
//         fs.unlink('./hehe.js',(err) => {
//             console.log(err)
//         })
//      }
//  })

// 异步操作需要保持一定的执行顺序  回调函数的嵌套   回调地狱


// promise  asyc/awiat(es7)  蓝鸟。。。
function delfile () {
    return new Promise((reslove,reject) => {
        // 异步操作
        fs.unlink('./hehe.js',(err) => {
            if (err) {
                // 失败
                reject('失败了')//外部通过插头处接收，内部执行失败
            }else {
                reslove('成功了')//外部走then的处理函数 表示异步处理成功
            }
        })
    })
}
// 说明如果在异步操作promise中，只要你执行成功了就可以走then，失败了就走catch
delfile().then(msg => {
    console.log('then:'+msg)
}).catch(err => {
    console.log('err:'+err)
})