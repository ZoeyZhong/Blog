var express = require('express');
var router =express.Router();//Express.js 4.0 有加入一個新的 Router 功能，它就像一個迷你的應用程式，可以讓應用程式內部的路由撰寫更方便、更有彈性。添加非路由中间键

//监听以/admin开头的路由,不需要再写/admin/user了，
// router.get('/user',function(req,res,next) {
//     res.send('User');
// })

//每一个node.js执行文件，都自动创建一个module对象，同时，module对象会创建一个叫exports的属性，初始化的值是 {}
//module.exports属性可以被赋予一个新的值（例如函数或对象）,赋值给 `exports` 不会修改模块，必须使用 `module.exports`
// nodejs模块中的exports对象，你可以用它创建你的模块。例如：（假设这是rocker.js文件）
//
// exports.name = function() {
//     console.log('My name is Lemmy Kilmister');
// };
//
// 在另一个文件中你这样引用
//
// var rocker = require('./rocker.js');
// rocker.name(); // 'My name is Lemmy Kilmister'
// 其实，Module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是Module.exports而不是exports。
module.exports = router;
