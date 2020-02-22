const qs = require('querystring')
// let string = 'name=baozhong&pass=123&sex=0'
// // let obj = qs.parse(string)
// let obj = qs.parse(string,'&','=')
// // 将query字符串变成query对象  如果不用这个内置模块，也可以用split
// console.log(obj)
// 如果string不是正常的格式，那就用特定的格式区分
// let string = 'name-baozhong#pass-123#sex=0'
// // 第一个参数是切分的字符串，第二个参数是以哪个来切分键值对，第三个参数是以哪个来切分键和值
// let obj = qs.parse(string,'#','-')

// stringify --- 对象转化为字符串
// let obj = { name: 'baozhong', pass: '123', sex: '0' }
// let string = qs.stringify(obj)
// console.log(string)

// 编码
// let string = 'w=你好&foo=bar'
// let result = qs.escape(string)
// console.log(result)
// 解码
let string = 'w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar'
let result = qs.unescape(string)
console.log(result)