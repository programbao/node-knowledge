// 链接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/1902',{ useNewUrlParser: true ,useUnifiedTopology: true });//mongodb 链接那个本地库

var db = mongoose.connection;//数据库的链接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db ok')
});
