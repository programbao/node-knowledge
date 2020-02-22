// db.js文件

// 链接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/1902',{ useNewUrlParser: true ,useUnifiedTopology: true });//mongodb 链接那个本地库

var db = mongoose.connection;//数据库的链接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db ok')
});

// mongoose 操作对象就是用schema来操作
// schema 对象

// 创建一个和集合相关的schema 对象 类似表头

// var Schema = mongoose.Schema;
// 获取schema对象
var userSchema = new mongoose.Schema({
  us: {type: String,required: true},
  ps: {type: String,required: true},
  age: Number,
  sex: {type: Number,default: 0}
});
// 将schema 对象转化为数据模型
var User = mongoose.model('user', userSchema);// 该数据对象和集合关联 (‘集合名’,schema对象)
// 将操作数据库
User.insertMany({us: 'bao',ps: '123', age: 67})
.then(data => {
    console.log(data)
    console.log('插入成功')
})
.catch(err => {
    console.log('插入失败')
})

// // 查询
// User.find()
// .then(data => {
//     console.log(data)
//     console.log('查询成功')
// })
// .catch(err => {
//     console.log('查询失败')
// })


// 删除
// User.remove()
// .then(data => {
//     console.log(data)
//     console.log('删除 ok')
// })
// .catch(err => {
//     console.log('删除失败')
// })


