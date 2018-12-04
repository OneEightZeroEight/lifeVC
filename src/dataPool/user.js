const express=require('express');
const Router=express.Router();
//数据模型引入
const User=require('./mongo/model/user.js')
// const nodeEmail=require('./nodeEmail.js')
//失去光标时,用户名验证
Router.post('/yz',(req,res)=>{
  let us=req.body.us;
  // console.log(us);
  User.find({us:us})
  .then((data)=>{
    if(data.length>=1){
       res.send({err:0,msg:'该用户已被注册',data:data})
     console.log(data)
   }else{res.send({err:-1,msg:'该账号可以注册',data:data})
     console.log(data)
   }
    
  })
  
})

// 点击注册，插入数据库
Router.post('/reg',(req,res)=>{
  let {us,ps}=req.body;
    User.insertMany({us,ps})
  .then((data)=>{
    res.send({err:0,msg:'插入成功',data:data})
    // console.log(data)
  })
 .catch((err)=>{
  // console.log(err);
 })
})
//点击登录,判断有没有数据
Router.post('/login',(req,res)=>{
  let {us,ps}=req.body
  console.log(req.body)
  User.find({us,ps})
  .then((data)=>{
    if(data.length>=1){
     res.send({err:0,msg:'登录成功',data:data})
     console.log(data)
    }else{res.send({err:-1,msg:'登录失败'})
     console.log(data)}   
  })
 
})
module.exports=Router;