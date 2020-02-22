const express = require('express')
const db = require('./db/connect')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
// 解析表单数据  x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json
app.use(bodyParser.json())
// 指定静态资源
app.use('/public',express.static(path.join(__dirname,'./hehe')))
// 路由
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')
app.use('/user',userRouter)
app.use('/food',foodRouter)

app.listen(3000,() => {
    console.log('server start')
})