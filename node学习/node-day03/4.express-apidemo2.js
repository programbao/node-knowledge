const express = require('express')
const app = express()
// express 实例化
const bodyParser = require('body-parser')
// app.user 使用中间件（插件）
// 解析表单数据  x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json
app.use(bodyParser.json())

// 最简单的api 接口
app.get('/user/login',((req,res) => {
    //  接受get 参数  query
    console.log(req.query)
    console.log('你好')
    let {ps,yu} = req.query
    // 处理参数
    if (ps === '123'&&yu==='567') {
        res.send({'err':0,'msg':'login ok'})
    }else {
        res.send({'err':0,'msg':'pa no ok'})
    }
    
}))

app.get('/hehe',(req,res) => {
    res.send('我是呵呵')
})
app.post('/user/reg',(req,res) => {
    // 接受post数据  消息体  请求体  req.body
    let {ps,yu} = req.body
    if (ps==='123'&&yu==='567') {
        res.send({'err':0,'msg':'all no ok'})
    }else {
        res.send({'err':-1,'msg':'no ok'})
    }
    // console.log(req.body) 
    // express 不能直接解析消息体的解析
    // 通过第三方的插件实现解析
})

app.listen(3000,() => {
    // 监听3000 端口 开启服务器
    console.log('server start')
})

// 协议
//http://www.baidu.com/user/hehe?us=23&ps=212
// http://localhost:3000/user/login

/**
 * api 接口的构成要素
 * ip
 * port
 * pathname   语义化
 * method get post
 * 接受用户传递数据  数据格式是有后端确定的
 * */ 