## ndoe 03

### 通过express 框架  书写api

### 什么是api
 ajax
 前端后端分离  前端通过ajax 请求数据
 $.get('http://www.baidu.com/user/login?us=123&us=123',() => {})
 http://www.baidu.com/user/login?us=123&us=123  api 接口

 前端： 1.写界面  2.请求数据  3.数据处理
 后端： 写api接口

 #### 例如
 登录接口逻辑分析
 1. 接受用户传递数据
 2. 处理数据
 3. 返回数据

### express 基本使用
1. 安装 express
```
npm install express --save
```
模块（第三方）的引用  从当前的目录的node_modules 以此向上找

### 服务器相关
 服务器：1. 服务器就是一台电脑  2. 服务器软件(apach tomcat iis ngnix node)  3.服务器ID 和端口号
 局域网：服务器通过网线（无线）连接  每一个电脑都会有一个ip
 外网：
 ip: 确定服务器主机的位置
 port：确定服务器里每一个程序
#### api接口的书写
 + 接受数据
   - get  req.query
   - post req.body 需要body-parser插件进行解析 
      + 注意数据格式 json x-www-form-urencode formdata
### postman 接口测试

### 中间件 middlewear
 + 内置中间件 static
 + 自定义中间件 （全局 局部）
 + 第三方中间件（body-parser）（拦截器）

 中间件使用  一定要注意 next

 ### 静态资源目录 static
 指定一个目录 目录可以被访问 Apache（www）

 ### 路由
 user/add
 user/del
 food/add
 food/del

### 非关系数据库（文档）mongodb
#### 安装
 1. 下载  百度地址
 2. 安装
    + 最后一个对号不能选
    + 缺少数据库文件 c/data/db
    + 不是内部的命令 需要设置环境变量  mongod 的bin 目录路径

#### 指令
 1. mongodb 数据库名
 2. mongod  命令行启动数据库命令
 3. mongo   命令函操作数据库指令
 4. mongoose node 操作数据库的插件