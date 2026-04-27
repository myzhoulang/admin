/**
 * Created by mk on 2016/5/11.
 */

//
var mongoose = require('./mongo').mongoose
var Schema = mongoose.Schema
//exports.Schema = function(){
  /**
   * ⚡ Bolt: Added unique index on email for O(log N) lookup performance during auth/registration.
   * Fixed defaults to use function references so they are evaluated at document creation time.
   */
  var Users = new Schema({
    name:{
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    sex:{
      type: Number
    },
    age:{
      type: Number,
      min:18,
      max:80
    },
    addrs:{
      type: String
    },
    insDate:{
      type: Date,
      default: Date.now
    },
    offset: {
      type:Number,
      default: function() { return new Date().getTimezoneOffset(); }
    }

  });
  mongoose.model('User', Users);
//}
