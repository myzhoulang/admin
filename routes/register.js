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

  // ⚡ Bolt: Optimize registration by attempting to save directly.
  // Reducing database round-trips from 2 to 1 for successful registrations.
  user.save(function(err){
    if(err){
      // ⚡ Bolt: Handle MongoDB duplicate key error (code 11000)
      if (err.code === 11000) {
        return res.json({
          status: -1,
          message: '该账户已存在'
        });
      }
      res.json({
        status: 500,
        message:err.message
      })
    }else{
      res.json({
        user: {
          name: user.name,
          email: user.email,
          _id: user._id
        },
        status: 200
      })
    }
  });
}
