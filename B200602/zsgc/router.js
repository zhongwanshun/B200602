/*
    路由模块
*/

const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 路由处理
// 渲染主页
router.get('/', service.showIndex);
// 添加图书(跳转到添加图书的页面)
router.get('/toAdd', service.toAdd);
// 添加图书(提交表单)
router.post('/add', service.add);
// 跳转到编辑图书信息页面
router.get('/toEdit', service.toEdit);
// 编辑图书提交表单
router.post('/edit', service.edit);
// 删除图书信息
router.get('/delete', service.delete);

module.exports = router;