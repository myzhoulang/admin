/**
 * Created by mk on 2016/5/10.
 */

var formidable = require('formidable'),
  http = require('http'),
  util = require('util');

exports.uploadFile = function(req, res) {
  //�������ϴ�
  var form = new formidable.IncomingForm();
  //���ñ༭
  form.encoding = 'utf-8';
  //�����ļ��洢·��
  form.uploadDir = "../uploads";
  //������׺
  form.keepExtensions = true;
  //���õ��ļ���С����
  form.maxFieldsSize = 2 * 1024 * 1024;
  //form.maxFields = 1000;  ���������ļ��Ĵ�С�ܺ�

  form.parse(req, function(err, fields, files) {
    console.log(files)
    res.jsonp(util.inspect({fields: fields, files: files}));
  });
}