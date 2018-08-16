var express = require('express');
var router =express.Router();
var User = require('../models/User');//引入user模型，有这样一个模块，我们不需要直接去操作数据库，而是像操作对象一样去操作数据库
// router.get('/user',function(req,res,next) {
//     res.send('Admin-user');
// })

//统一返回格式
var responseData;
router.use(function (req,res,next) {
    responseData={
        code:0,
        message:''
    }
    next();
});

//用户注册,注册逻辑
// 1.用户名不能为空
// 2.密码不能为空
// 3.两次输入密码必须一致
// 4.用户是否已经被注册了（数据库查询）
router.post('/user/register',function (req,res,next) {
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

    //用户名是否为空
    if(username==''){
        responseData.code=1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }
    //密码不能为空
    if(password==''){
        responseData.code=1;
        responseData.message='密码不能为空';
        res.json(responseData);
        return;
    }
    //两次输入的密码必须一致
    if(password!=repassword){
        responseData.code=3;
        responseData.message='两次输入的密码不一致';
        res.json(responseData);
        return;
    }
    //用户名是否已经被注册了，如果数据库中已经存在和我们要注册的用户名同名的数据，表示该用户名已经被注册了
    User.findOne({
        username:username
    }).then(function (userInfo) {
        if( userInfo ){
            console.log(userInfo);
            //表示数据库中有该记录
            responseData.code=4;
            responseData.message ='用户名已经被注册了';
            res.json(responseData);
            return;
        }
        //保存用户注册信息到数据库中
        var user = new User({
            username:username,
            password:password
        });
        return user.save();
    }).then(function (newUserInfo) {
        responseData.message='注册成功';
        res.json(responseData);
        return;
    });
});

module.exports = router;
