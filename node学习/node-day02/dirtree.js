// 打印目录树
const fs = require('fs')
// fs.readdir('./tree',(err,dirs) => {
//     console.log(err)
//     for(let index = 0; index<dirs.length; index++) {
//         console.log(dirs[index])
//     }
// })

// fs.stat 是类，是fs的方法,判断文件类型
fs.stat('./tree',(err,stats) => {
    if (stats.isFile()) {
        console.log('is File')
    }else {
        console.log('is dir')
    }
})