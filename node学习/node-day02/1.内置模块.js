// 1. 文件读取
const fs = require('fs')
// 同步读取
let dirs = fs.readdirSync('./')
// 这里是同步读取错误---捕获错误---在关键位置捕获错误信息
// try{
//     // 可能出错的代码
//     let dirs = fs.readdirSync('./')
// }
// catch (err) {
//     // 捕获错误
//     console.log('出错')
//     console.log(err)
// }
// console.log(dirs)


// 异步读取
// fs.readdir('./node',(err,data)=> {
//     console.log(err)
//     console.log(data) 
//     // 这里是异步读取错误
//     if (err) { // err 为真有错误，默认是null
//         console.log('读取错误')
//         console.log(console.log(err[0].Error))
//     }else {
//         console.log(data)
//     }
// })

// 错误的回调；优先 在回调函数中第一个参数表示错误对象 默认为null 如果出现错误err 就是错误对象

// 小总结：
/**
 * 
 * 错误处理 同步 try catch ；异步： 错误回调优先
 * 文件的错误
 * 异步不会阻塞后面代码的执行
 * 
 * curd：代表增删改查
 * c(creat)u(updata)r(read)d(del)
 */
// 读文件 fs.readdir
// 创建文件 fs.mkdir