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

  //查找
  User.findOne({
    email: body.email
  },function(err,person){
    if(err){
      res.json({
        status: 500,
        message: err.message
      })

    }else{
      if(person){
        res.json({
          status: -1,
          message: '该账户已存在'
        });
      }else{
        user.save(function(err){
          var date = new Date();
          if(err){
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
    }
  });
}
