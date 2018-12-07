const express = require('express');
const Router = express.Router();
//数据模型引入
const Goods = require('./mongo/model/goods.js')
// const nodeEmail=require('./nodeEmail.js')
//失去光标时,用户名验证

// ，插入数据库
Router.get('/goodsAdd', (req, res) => {
  res.append("Access-Control-Allow-Origin", "*")
  let {name,goodId,goodPic,nums,status,price,yhm} = req.query;
  Goods.find({
      $and: [
         {"name": name}, {"yhm": yhm}
      ]
   })
  .then((data)=>{
      if (data.length >= 1) {
        let id = data[0]._id
        nums = (data[0].nums-0) + (nums-0)
        Goods.updateMany({_id:id},{name,goodId,goodPic,nums,status,price,yhm})
        .then((data1)=>{
          res.send({err:0,msg:'插入成功1',data:data1})

        })
      }else{
        Goods.insertMany({name,goodId,goodPic,nums,status,price,yhm})
        .then((data1) => {
          res.send({ err: 0, msg: '插入成功', data: data1 })
          // console.log(data)
        })
      }

      
  })
  .catch((err) => {
         console.log(err);
    })

})

Router.get('/goodsGai', (req, res) => {
  res.append("Access-Control-Allow-Origin", "*")
  let {name,yhm,ext} = req.query;
  Goods.find({
      $and: [
         {"name": name}, {"yhm": yhm}
      ]
   })
  .then((data)=>{
      if (data.length >= 1) {
        let id = data[0]._id
        if(ext=="jia"){
          nums = (data[0].nums-0) + 1
        }else if(ext=="jian"){
          nums = (data[0].nums-0) - 1
        }
        Goods.updateMany({_id:id},{name,nums,yhm})
        .then((data1)=>{
          res.send({err:0,msg:'插入成功1',data:data1})

        })
      }else{
        Goods.insertMany({name,goodId,goodPic,nums,status,price,yhm})
        .then((data1) => {
          res.send({ err: 0, msg: '插入成功', data: data1 })
          // console.log(data)
        })
      }

      
  })
  .catch((err) => {
         console.log(err);
    })

})



Router.get('/goodsDell', (req, res) => {
  res.append("Access-Control-Allow-Origin", "*")
  let {name,yhm} = req.query;
  Goods.find({
      $and: [
         {"name": name}, {"yhm": yhm}
      ]
   })
  .then((data)=>{
      if (data.length >= 1) {
        let id = data[0]._id
        Goods.deleteMany({_id:id})
        .then((data)=>{
          res.send({err:0,msg:'删除功',data:null})
        })
        .catch((err)=>{
          console.log(err)
          res.send({err:-1,msg:'删除no成功',data:null})
        })
        
      }
  })
  .catch((err) => {
         console.log(err);
    })

})





module.exports = Router;