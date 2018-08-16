var express = require('express');
var router =express.Router();
router.get('/',function(req,res,next) {
    res.render('main/index');//渲染当前views下面的index.html页面
});

module.exports = router;
