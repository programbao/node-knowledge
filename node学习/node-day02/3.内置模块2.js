// 文件操作
const fs = require('fs')
// 创建文件 --- 覆盖写入
// fs.writeFile('name.txt','今天天气不错1234',(err) => {
//     console.log(err)
// })
// 写入文件
// fs.appendFile('name.txt','你好我是谁',(err) => {
//     console.log(err)
// })
// 读取文件
// fs.readFile('name.txt','utf8',(err,msg) => {
//     console.log(err)
//     console.log(msg)// 默认读取出来的是二进制数据流buff 需要转格式
//     // console.log(msg.toString('utf8'))
// })
// fs.mkdirSync('./name')
// 删除文件
fs.unlink('./pic/train.png',(err) => {
    console.log(err)
})