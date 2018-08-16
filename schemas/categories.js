//连接数据库
var mongoose=require('mongoose');
//数据库操作文档，可以查看http://mongoosejs.com
//schema=mongoose.Schema;表示数据库中的一个表

//用户的表结构,对外界进行提供，将new出来的用户对象暴露出去
module.exports = new mongoose.Schema({
    //用户名
    username:String,
    //密码
    password:String,
    //是否是管理员
    isAdmin:{
        type:Boolean,
        default:false
    }
});
//仅仅只是表结构是不够，需要定义一个模型类，模型类又是根据表结构来操作的