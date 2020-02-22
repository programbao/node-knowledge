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
const fs = require('fs')
// fs.mkdir('./test',(err,data) => {
//     console.log(err)
//     console.log(data)
// })
// 注意：创建文件夹，只是需要一个参数即可，应为创建成功与否，通过err就可以判断出来，不必要用data参数

// 更改
// fs.rename('./test','./test01',(err) => {
//     if (err) {
//         console.log('更改失败')
//         console.log(err)
//     }else {
//         console.log('ok')
//     }
// })
// 删除 --- 只能删除空的文件夹
fs.rmdir('./test01',(err)=>{
    if (err) {
        console.log('删除失败')
        console.log(err)
    }else {
        console.log('ok')
    }
})