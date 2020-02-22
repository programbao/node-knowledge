const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/footModel')


/**
 * @api {post} /food/add  添加菜品
 * @apiName addfood
 * @apiGroup Food
 *
 * @apiParam {String} name 菜名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 类型名
 * @apiParam {String} typeid 类型ID
 * @apiParam {String} img 图片
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/add',(req,res) => {
     console.log(req.body)
    //  console.log(req.body)
      let {name,price,desc,typename,typeid,img} = req.body
      
      // 判断参数是否错误
      foodModel.insertMany({name,price,desc,typename,typeid,img})
      .then((data) => {
        console.log(data)
        res.send({err: 0, msg: '添加成功'})
      })
      .catch((err) => {
        console.log(err)
        res.send({err: -1,msg: '添加失败'})
      })
})

module.exports = router