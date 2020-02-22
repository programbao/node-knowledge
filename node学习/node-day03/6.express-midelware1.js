const express = require('express')

const app = express()

// 中间件的使用----正常操作发起请求时  都是先走请求的接口先，如果有拦截器（中间件）拦截时就走拦截器先
// 全局
// app.use('/',(req,res,next) => {
//     console.log('中间件')
//     let {token} = req.query
//     if (token) {
//         next()
//     }else {
//         res.send('缺少token')
//     }
//     // next() // 是否继续往下执行
// })
// app.use((req,res,next) => {})
// app.get('/test1',(req,res) => {
    //     console.log('test1')
    //     // let {token} = req.query
    //     // if (token) {
    //     //     res.send('ok')
    //     // }else {
    //     //     res.send('on ok')
    //     // }
    //     res.send('test1')
    // })
    // app.get('/test2',(req,res) => {
    //     console.log('test2')
    //     // let {token} = req.query
    //     // if (token) {
    //     //     res.send('ok')
    //     // }else {
    //     //     res.send('on ok')
    //     // }
    //     res.send('test2')
    // })


// 局部  --- 中间件
// app.get('/test1',(req,res,next) => {
//     console.log('fun1')
//     next()
// },(req,res) => {
//     console.log('fun2')
//     res.send('test1')
// })
// // app.get('/pathname',fun,fun,fun,fun....)

// app.listen(3000,() => {
//     console.log('server start')
// })



// static 静态资源  中间件
const path = require('path')
console.log(__dirname)
console.log(path.join(__dirname,'./hehe'))
app.use(express.static(path.join(__dirname,'./hehe')))
// 域名:3000  直接指向规定的静态目录
app.listen(3000,() => {
    console.log('server start')
})