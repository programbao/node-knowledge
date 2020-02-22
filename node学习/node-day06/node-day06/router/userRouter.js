const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const Mail = require('../db/utils/mail')
let codes = {}//保存内存验证码

/**
 * @api {post} /user/reg  用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 *@apiParam {String} ps 用户密码
 *@apiParam {String} code 邮箱验证码
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/reg',(req,res) => {
    // 获取数据
    let {us,ps,code} = req.body
    if (!us||!ps||!code) return res.send({err: -1,msg: '参数错误'})
    console.log(codes)
    console.log(codes[us])
    console.log(code)
    if (codes[us]!=code) {return res.send({err: -4,msg: '验证码错误'})}
    User.find({us})
    .then((data) => {
        if (data.length === 0) {
            return User.insertMany({us: us,ps: ps})
        }else {
            res.send({err: -3, msg: '用户名已经存在'})
        }
    })
    .then(() => {
        res.send({err: 0,msg: '注册OK'})
    })
    .catch((err) => {
        res.send({err: -1, msg: '注册失败'})
    })
    // 返回数据
})

/**
 * @api {post} /user/login  用户登录
 * @apiName 用户登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 */
router.post('/login',(req,res) => {
    let {us,ps} = req.body
    if(!us||!ps) {return res.send({err: -1,msg: '参数错误'})}
    User.find({us,ps})
    .then((data) => {
        if(data.length>0) {
            res.send({err: 0, msg: '登录OK'})
        }else {
            res.send({err: -2, msg: '用户名或密码不正确'})
        }
        console.log(data)
    })
    .catch((err) => {
        return res.send({err: -1, msg: '登录失败'})
    })
})


/**
 * @api {post} /user/getMailCode  发送邮箱验证码
 * @apiName 发送邮箱验证码
 * @apiGroup User
 *
 * @apiParam {String} mail 邮箱
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 发送邮箱验证码
router.post('/getMailCode',(req,res) => {
    let {mail} = req.body
    let code = parseInt(Math.random()*10000+10000)//产生随机的验证码 
    Mail.send(mail,code)
    .then(() => {
        // 将邮箱和验证码匹配的验证码保存到缓存中
        codes[mail] = code
        res.send({err: 0, msg: '验证码发送成功'})
    })
    .catch((err) => {
        res.send({err: -1,msg: '验证码发送no ok'})
    })
})
module.exports = router