const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// 将socket 服务器和express 进行结合

app.use(express.static(__dirname + '/client'))
// 客户端连接
io.on('connection', (client) => { 
  // 创建自定义时间 接收数据
  client.emit('hehe','欢迎光临')
  client.on('haha',msg => {
    console.log('haha' + msg)
  })
});


server.listen(8081,'0.0.0.0');// 表示允许所有的ip访问

