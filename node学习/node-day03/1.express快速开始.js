const express = require('express')
const app = express()
// express 实例化
// 最简单的api 接口
app.get('/user/login',((req,res) => {
    console.log('你好')
    res.send({'err':0,'msg':'regist:ok'})
}))
app.listen(3000,() => {
    // 监听3000 端口 开启服务器
    console.log('server start')
})

// 协议
//http://www.baidu.com/user/hehe?us=23&ps=212
// http://localhost:3000/user/login