
// const cheerio = require('cheerio')
// const $ = cheerio.load('<div><p>你好</p><img src="http://www.baidu.com"><img src="http://www.baidu.com"></div>')
// 将一组HTML格式的字符串  转化为类dom之后可以通过 jq的语法选中其中的元素
// console.log($('img').attr('src'))
// console.log($('p').text())
// $('img').each((index,el) => {
//     console.log($(el).attr('src'))
// })


const http = require('https')
const fs = require('fs')
const cheerio = require('cheerio')
let url = 'https://www.qunar.com/'
let json = 'https://nodejs.org/dist/index.json'
http.get(url,(res) => {
    // 安全判断
    const { statusCode } = res
    const contentType = res.headers['content-type']// 文件类型
    console.log(statusCode,contentType)
    let err = null
    if (statusCode !== 200) {
        err = new Error('请求错误')
    }else if (!/^text\/html/.test(contentType)) {
        // 格式类型是网页
        err = new Error('请求类型错误')
    }
    if (err) {
        console.log(err)
        res.resume()// 重置缓存
        return false
    }
    //  数据的处理
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
        // 通过cheerio来分析
        let $ = cheerio.load(rawData)
        $('img').each((index,el) => {
            console.log($(el).attr('src'))
        })
        console.log('数据传输完毕')
    })
}).on('error',(err) => {
    console.log('请求错误')
})