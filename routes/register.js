/**
 * Created by mk on 2016/5/11.
 */

var Schema = require('./Schema')
var Q = require('q')
var mongo = require('./mongo')
var mongoose = mongo.mongoose

exports.register = function(req, res){
  var body = req.body
  var User = mongoose.model('User')

  var user = new User({
    name: body.name,
    email: body.email,
    password: body.password
  });

  // ⚡ Bolt: Direct save to reduce DB round-trip from 2 to 1.
  // Requires 'unique: true' index on email in Schema.
  user.save(function(err){
    if(err){
      // 11000 is MongoDB's duplicate key error code
      if (err.code === 11000) {
        return res.json({
          status: -1,
          message: '该账户已存在'
        });
      }
      return res.json({
        status: 500,
        message: err.message
      });
    }

    res.json({
      user: {
        name: user.name,
        email: user.email,
        _id: user._id
      },
      status: 200
    });
  });
}
