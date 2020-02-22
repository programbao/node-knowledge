// 创建服务器
const WebSocket = require('ws')
const ws = new WebSocket.Server({port: 8080}, () => {
  console.log('socket start')
})

let clients = []
ws.on('connection',(client) => {
  clients.push(client)
  client.send('欢迎光临') //数据传输字符串
  client.on('message',(msg) => {
    console.log('来自前端的数据：' + msg)
    if(msg.indexOf('广播') != -1) {
      sendAll()
    }
  })
  client.on('close',(msg) => {
    console.log('前端主动断开链接')
  })
})
function sendAll() {
  for (let index = 0; index < clients.length; index++) {
    clients[index].send('aldjlkdjf')
  }
}
