/**
 * Created by mk on 2016/5/10.
 */

var formidable = require('formidable'),
  http = require('http'),
  path = require('path'),
  util = require('util');


exports.uploadFile = function(req, res) {
  // Optimization: Removed console.log(req) as it's a synchronous, expensive operation that prints a massive object to the console.

  //
  var form = new formidable.IncomingForm();
  //
  form.encoding = 'utf-8';
  form.uploadDir = "../uploads";
  form.keepExtensions = true;
  form.maxFieldsSize = 2 * 1024 * 1024;

  form.parse(req, function(err, fields, files) {
    path.join(__dirname, 'public')
    res.json({fields: fields, files: files});
  });
}