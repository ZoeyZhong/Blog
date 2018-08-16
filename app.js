// 应用程序的启动文件

// 加载express模块
var express = require('express');
//加载模板处理模块
var swig=require('swig');
//加载数据库模块
var mongoose = require('mongoose');

//加载body-parser，用来处理post提交过来的数据
var bodyPaser = require('body-parser');

//创建app应用=>Nodejs Http.createServer();
var app=express();

//设置静态文件托管
//当用户访问的url以/public开始，那么直接返回对应的__dirname+'/public'文件
app.use('/public',express.static(__dirname+'/public'));




//配置应用模板
// 定义当前应用所使用的模板引擎
// 第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数：用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
// 设置模板文件存放的目录，第一个参数：必须是views,第二个参数：目录
app.set('views','./views');
// 注册所使用的模板引擎，第一个参数：必须是views engine，第二个参数：和app.engine这个方法中定义的模板引擎的名称是一致的
app.set('view engine','html');
//在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false});

//bodyparser设置
app.use(bodyPaser.urlencoded({extended:true}));

// //首页
// app.get('/',function(req,res,next){
//     //res.send('<h1>welcome to my blog</h1>');
//     // 第一个参数：读取指定目录下的指定文件，解析并返回给客户端,第一个参数表示模板文件，相对于views目录
//     // 第二个参数：传递给模板使用的数据
//     res.render('index');
// })

//没必要用这样的方式处理，后端不需要处理的文件，写起来太麻烦//静态文件托管的处理
// app.get('/main.css',function(req,res,next){
//     //告诉他传输数据类型
//     res.setHeader('content-type','text/css');
//     res.send("body {background:red;}");
// })


/*
* 根据不同的功能划分模块
* */
app.use('/admin',require('./routers/admin'));

app.use('/api',require('./routers/api'));

app.use('/',require('./routers/main'));

//连接数据库
//输入内容：连接的地址和协议mongodb
mongoose.connect('mongodb://localhost:27017/Blog',function(err){
    if(err)
    {
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        //监听http请求
        app.listen(8080);
    }
});


