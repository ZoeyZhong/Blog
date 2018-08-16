var mongoose=require('mongoose');//记载模块
//将刚刚定义好的表结构加载进来
var usersSchema = require('../schemas/users');

module.exports = mongoose.model('User',usersSchema);//创建模型类，将模型暴露出去