### 实现socket的方式
1. net
2. socket.io 麻烦  兼容性最好
3. websoket  h5新增  低版本浏览器不兼容  使用方式简单
### 前端后端 链接
1. 搭建socket服务器  new WebSocket.server({prot: 8080}, () => {})
 ws.on('connection)
 2. 前端进行连接
 new WebSocket('ws://localsocket:8080)
 ws.onOpen()
 ### 数据交互
 client.on('message',() => {})
 3. 前端主动发送数据
 4. 后端主动发送数据
 wx.onmessage=() => {}
 wx.send()
 前后端断开的处理
 ws.on('close')
 wx.onClose()
 5. 断开链接

 ### 什么时候用长链接
 1. 实时刷新(轮询)
 2. 服务器端发送数据


 ### 时间换空间  空间换时间



 #### 身份验证
 http请求  无状态
 1. 登录时候  发布一个加密字符串 (用户相关信息) 给前端

 2. 调用其他接口 将密字符串  作为参数传递给服务器
 3. 根据权限进行验证
 session+cookie
cookie-parser
express-session
 jwt