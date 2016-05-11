/**
 * Created by mk on 2016/5/11.
 */
var mongoose = require('mongoose');
var Schema = require('./Schema')
exports.register = function(req, res){
  console.log(req.body)
  var body = req.body;
  var oDate = new Date();
  console.log(mongoose.model)
  var User = mongoose.model('User');

  var year = oDate.getFullYear();
  var month = (oDate.getMonth() + 1);
  var date = oDate.getDate();
  var hours = oDate.getHours();
  var mins = oDate.getMinutes();
  var sec = oDate.getSeconds();


  var user = new User({
    name: body.name,
    email: body.email,
    password: body.password,
    insDate:Date.now()
  });
  console.log(488)
  user.save(function(err){
    console.log(Date.now())
    console.log(err);
    if(err){
      res.json({
        status: 500,
        message:err.message
      })
    }else{
      res.json({
        user: {
          insDate: user.insDate,
          name: user.name,
          email: user.email,
          _id: user._id
        },
        status: 200
      })
    }
  })
}
