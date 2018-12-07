 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let goodsSchema=new Schema({
    name:{type:String,required:true},
    goodId:{type:String,required:true},
    goodPic:{type:String,required:true},
    nums:{type:Number,required:true},
    status:{type:String,required:true},
    price:{type:Number,required:true},
    yhm:{type:String,required:true}
    // show:{type:Number,default:false}

 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
//抛出数据模型