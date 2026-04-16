/**
 * Created by mk on 2016/5/11.
 */

//
var mongoose = require('./mongo').mongoose
var Schema = mongoose.Schema
var objectId = Schema.Types.ObjectId
//exports.Schema = function(){
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
      unique: true // Bolt: Added unique index for O(log N) lookups and data integrity
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
      default: Date.now // Bolt: Use function reference to ensure it's evaluated at document creation
    },
    offset: {
      type:Number,
      default: function() { return new Date().getTimezoneOffset(); } // Bolt: Use function to ensure fresh evaluation
    }

  });
  mongoose.model('User', Users);
//}
