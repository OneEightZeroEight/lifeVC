const express = require('express');
const Router = express.Router();
//数据模型引入
const User = require('./mongo/model/user.js');
// const email = require('./sendMail.js');

const sendMessage = require('./sendMessage.js');

// const nodeEmail=require('./nodeEmail.js')
//失去光标时,用户名验证
var client = new sendMessage();
let checkCode = 'aaa';
Router.get('/getCheck',(req,res)=>{
  res.append("Access-Control-Allow-Origin", "*")
  let us = req.query.us;
  var code = Math.floor((Math.random()*999999)+111111);
  checkCode = code;
  client.sendMessage(us,code,function(data){
    console.log(data,checkCode);
    res.send(data);
  });
})
setTimeout(function(){
  checkCode='aaa'
},300000)
//手机验证码认证
// Router.get('/check', (req, res) => {
//   res.append("Access-Control-Allow-Origin", "*")
//   let us = req.query.us;
//   User.find({ us: us })
//     .then((data) => {
//       if (data.length >= 1) {
//         res.send({ err: -1, msg: '该用户已被注册', data: null })
//       } else {
//         res.send({ err: 0, msg: '该账号可以注册', data: null })
//       }
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
// })

Router.get('/yz', (req, res) => {
  res.append("Access-Control-Allow-Origin", "*")
  let {us,checkWord}= req.query;
  if(checkCode == checkWord){
    User.find({ us: us })
    .then((data) => {
      if (data.length >= 1) {
        res.send({ err: -1, msg: '该用户已被注册', data: null })
      } else {
        res.send({ err: 0, msg: '该账号可以注册', data: null })
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }else{
    res.send({ err: -2, msg: '验证码错误', data: null })
  }
})

// 点击注册，插入数据库
Router.get('/reg', (req, res) => {
  res.append("Access-Control-Allow-Origin", "*")
  let { us, ps } = req.query;
  // console.log(req.query)
  User.insertMany({ us, ps })
    .then((data) => {
      res.send({ err: 0, msg: '插入成功', data: data })
      // console.log(data)
    })
    .catch((err) => {
      // console.log(err);
    })

})

//点击登录,判断有没有数据
Router.get('/login', (req, res) => {
  res.append("Access-Control-Allow-Origin", "*")
  let { us, ps } = req.query
  User.find({ 'us': us })
    .then((data) => {
      if (data.length >= 1) {
        if(data[0].ps == ps){
          res.send({ err: 0, msg: '登录成功', data: data })
        }else{
          res.send({ err: -2, msg: '密码错误', data: null })
        }
      } else {
        res.send({ err: -1, msg: '该用户名未注册', data: null })
      }
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = Router;





