const express = require('express')
const app = express()
// app.get('/user/add',(req,res) => {

// })
let userRouter = require('./router/userRouter')
let foodRouter = require('./router/foodRouter')
app.use('/user',userRouter)
app.use('/food',foodRouter)

app.listen(3000,() => {
    console.log('server start')
})