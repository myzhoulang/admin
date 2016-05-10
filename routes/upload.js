/**
 * Created by mk on 2016/5/10.
 */

var formidable = require('formidable'),
  http = require('http'),
  util = require('util');

exports.uploadFile = function(req, res) {
  //创建表单上传
  var form = new formidable.IncomingForm();
  //设置编辑
  form.encoding = 'utf-8';
  //设置文件存储路径
  form.uploadDir = "../uploads";
  //保留后缀
  form.keepExtensions = true;
  //设置单文件大小限制
  form.maxFieldsSize = 2 * 1024 * 1024;
  //form.maxFields = 1000;  设置所以文件的大小总和

  form.parse(req, function(err, fields, files) {
    console.log(files)
    res.jsonp(util.inspect({fields: fields, files: files}));
  });
}