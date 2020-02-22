const express = require('express')
const db = require('./db/connect')
const app = express()
const bodyParser = require('body-parser')
// 解析表单数据  x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json
app.use(bodyParser.json())
// 路由
const userRouter = require('./router/userRouter')
app.use('/user',userRouter)

app.listen(3000,() => {
    console.log('server start')
})