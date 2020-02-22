"use strict";
const nodemailer = require("nodemailer");
// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com", // 发送方邮箱 qq 163
    port: 465, // 端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: '2962631411@qq.com', // 发送方的邮箱地址
        pass: 'xnhupjwwhygtdddh' // smtp 验证码
    }
});
// 你的邮件信息  await transporter.sendMail(


// transporter.sendMail(mailObj)


function send(mail, code) {
    let mailObj = {
        from: '"Fred Foo 👻" <2962631411@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "我是未来人", // Subject line  标题
        text: `您的验证码是${code},有效期五分钟`, // plain text body 文本
        //html: "<b>Hello world?</b>" // html body
    };
    return new Promise((resolve,reject) => {
        transporter.sendMail(mailObj, (err, data) => {
            if (err) {
                reject()
            }else {
                resolve()
            }
        })
    })
    
}
module.exports = {send}