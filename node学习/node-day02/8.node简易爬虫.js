/**
 * 1. 请求网站数据
 * 2. 将数据保存到本地文件
 * */ 
const http = require('https')
const fs = require('fs')
let url = 'https://www.iqiyi.com/'
http.get(url,(res) => {
    let rawData = ''
    // 数据分段  只要接受数据就会触发data事件  chunk 每次接受数据的片段
    res.on('data',(chunk) => {
        // console.log('数据传输')
        // console.log(chunk)
        // console.log(chunk.toString())
        rawData += chunk.toString('utf8')
    })
    res.on('end',() => {
        // 将请求的数据保存到本地
        fs.writeFileSync('./iqiyi.html',rawData)
        console.log('数据传输完毕')
    })
}).on('error',(err) => {
    console.log('请求错误')
})