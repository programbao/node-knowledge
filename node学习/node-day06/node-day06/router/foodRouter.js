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
    //  console.log(req.body)
    //  console.log(req.body)
      let {name,price,desc,typename,typeid,img} = req.body
      // 判断参数是否错误
      foodModel.insertMany({name,price,desc,typename,typeid,img})
      .then((data) => {
        res.send({err: 0, msg: '添加成功'})
      })
      .catch((err) => {
        console.log(err)
        res.send({err: -1,msg: '添加失败'})
      })
})


/**
 * @api {post} /food/getInfoByType  分类查询
 * @apiName getInfoByType
 * @apiGroup Food
 *
 * @apiParam {String} typeid 菜品ID
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
  router.post('/getInfoByType',(req,res) => {
    let {typeid} = req.body
    foodModel.find({typeid})
    .then((data) => {
      res.send({err: 0, msg: '查询OK', list: data})
    })
    .catch((err) => {
      res.send({err: -1, msg: '查询失败'})
    })
  })


  /**
 * @api {post} /food/getInfoByKw  关键字查询
 * @apiName getInfoByKw
 * @apiGroup Food
 *
 * @apiParam {String} typeid 关键字
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
 router.post('/getInfoByKw',(req,res) => {
  //  $set $gte $or $and $regex regexp正则
   let {kw} = req.body
   let reg = new RegExp(kw) //创建一个正则表达式  匹配关键字
  //  foodModel.find({age:{$gte:16}})
  // foodModel.find({name: {$regex: reg}})  名字模糊
  foodModel.find({$or: [{name: {$regex: reg},desc: {$regex: reg}}]})  //名字及描述
  .then((data) => {
    res.send({err: 0, msg: '查询OK', list: data})
  })
  .catch((err) => {
    res.send({err: -1, msg: '查询失败'})
  })
 })

/**
 * @api {post} /food/del  删除
 * @apiName del
 * @apiGroup Food
 *
 * @apiParam {String} id 关键字
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
 router.post('/del',(req,res) => {
   let {_id} = req.body
  //  console.log(req.body)
  // 删除单个  删除多个
   foodModel.deleteMany({_id})
   .then((data) => {
    res.send({err: 0, msg: '删除OK'})
  })
  .catch((err) => {
    res.send({err: -1, msg: '删除失败'})
  })
 })


 /**
 * @api {post} /food/updata  修改
 * @apiName updata
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
 router.post('/update',(req,res) => {
  let {name,price,desc,typename,typeid,img,_id} = req.body
  foodModel.updateOne({_id},{name,price,desc,typename,typeid,img})
  .then((data) => {
    res.send({err: 0, msg: '修改OK'})
  })
  .catch((err) => {
    res.send({err: -1, msg: '修改失败'})
  })
 })


  /**
 * @api {post} /food/getInfoByPage  分页查询
 * @apiName getInfoByPage
 * @apiGroup Food
 *
 * @apiParam {Number} pageSize 每页数据条数
 * @apiParam {Number} page 每一页
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByPage',(req,res) => {
  let pageSize = req.body.pageSize  || 2 //设置默认值
  let page = req.body.page || 1
  // skip跳过几条取几条的意思；比如：我获取第一页是：当page=0时，(page-1)*pageSize，就相当于跳过0条取五条；因此，如果page=1时，就相当于跳过五条，取五条
  foodModel.find().limit(Number(pageSize)).skip(Number(page-1)*pageSize)
  .then((data) => {
    res.send({err: 0, msg: '查询OK', list: data})
  })
  .catch((err) => {
    res.send({err: -1, msg: '查询失败'})
  })
})

module.exports = router
