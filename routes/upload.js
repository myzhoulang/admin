/**
 * Created by mk on 2016/5/10.
 */

var formidable = require('formidable'),
  http = require('http'),
  path = require('path'),
  util = require('util');


exports.uploadFile = function(req, res) {
  console.log(req);

  //
  var form = new formidable.IncomingForm();
  //
  form.encoding = 'utf-8';
  //�����ļ��洢·��
  form.uploadDir = "../uploads";
  //������׺
  form.keepExtensions = true;
  //���õ��ļ���С����
  form.maxFieldsSize = 2 * 1024 * 1024;
  //form.maxFields = 1000;  ���������ļ��Ĵ�С�ܺ�

  form.parse(req, function(err, fields, files) {
    console.log(files.file.path)
    path.join(__dirname, 'public')
    res.json({fields: fields, files: files});
  });
}