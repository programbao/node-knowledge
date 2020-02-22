const url = require('url')
// url.parse 转对象---urlString
// let urlString = 'https://nodejs.org/dist/latest-v13.x/docs/api/url.html'
// let urlObj = url.parse(urlString)
// console.log(urlObj)

// url.format --- 对象转字符串
let urlString  = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'nodejs.org',
    port: null,
    hostname: 'nodejs.org',
    hash: null,
    search: null,
    query: null,
    pathname: '/dist/latest-v13.x/docs/api/url.html',
    path: '/dist/latest-v13.x/docs/api/url.html',
    href: 'https://nodejs.org/dist/latest-v13.x/docs/api/url.html' }
    console.log(url.format(urlString))

    /**
     * URL 类比json记忆
     * url.parse 将url字符串转成对象
     * url.format 将url对象转字符串
     * */ 

    //  json：json是一种数据格式
    // json对象：json格式的对象
    // json字符串：json格式的字符串
    // 例如： {"name": "123"}