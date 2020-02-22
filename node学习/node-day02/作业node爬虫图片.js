/**
 * 1. 需要请求网页模块http---内置模块
 * 2. 写入文件---应该不用fs---内置模块
 * 3. 需要分析数据cheerio---第三方模块这个是插件 安装使用(npm install cheerio --save)
 * */ 

 const https = require('https')
 const http = require('http')

 const fs = require('fs')
 const cheerio = require('cheerio')

// 请求的地址url
let url = 'https://www.qunar.com/'
// 请求方式
https.get(url,(res) => {
    // 安全判断
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    console.log(statusCode)
    let err;
    if (statusCode !== 200) {
        let err = new Error('数据错误')
    }else if (!/^text\/html/.test(contentType)) {
        let err = new Error('数据类型错误')
    }
    if (err) {
        console.log(err)
        return false
    }
    // 数据处理
    // console.log(res)
    // let res = res.toString('utf8')
    let rawData = ''
    // 处理片段
    res.on('data',(chunk) => {
        rawData += chunk
    })
    // 处理完毕
    res.on('end',() => {
        // 捕获图片
        // 先选择要加载的数据
        let $ = cheerio.load(rawData)
        // 创建文件夹---存图片
        try {
            fs.mkdirSync('./pic')
        }
        catch (err) {
            let dirs = fs.readdirSync('./pic')
            for( var i of dirs) {
                console.log(i)
                fs.unlinkSync('./pic/'+i,(err) => {
                    console.log(err)
                })
            }
            fs.rmdirSync('./pic')
            fs.mkdirSync('./pic')
        }
        // if (true) {
        //     return
        // }
        // 获取img-并获取src---通过属性来获取
        $('img').each((index,el) => {
            let pic = $(el).attr('src')
            if (pic.indexOf('http') !== 0) {
                pic = 'http:' + pic
                http.get(pic,(res) => {
                    let handlePic = pic.split('/')
                    res.on('data',(chunk) => {
                        fs.writeFileSync('./pic/'+handlePic[handlePic.length - 1],chunk)
                        console.log('处理一个成功')
                    })
                }).on('error',(err) => {
                    console.log(err)
                })
            }else {
                https.get(pic,(res) => {
                    let handlePic = pic.split('/')
                    res.on('data',(chunk) => {
                        fs.writeFileSync('./pic/'+handlePic[handlePic.length - 1],chunk)
                        console.log('处理一个成功')
                    })
                }).on('error',(err) => {
                    console.log(err)
                })
            }
            console.log(pic)
            // 写入文件
         
        })
        // fs.writeFileSync('./httpUrl.html',rawData)
    })
    console.log('数据处理成功')
}).on('error',(err) => {
    console.log(err)
})