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
      unique: true,
      lowercase: true,
      trim: true
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
      // ⚡ Bolt: Use function reference instead of immediate call to ensure date is set at creation time
      default: Date.now
    },
    offset: {
      type:Number,
      // ⚡ Bolt: Wrap in function to ensure offset is calculated at document creation time
      default: function() { return new Date().getTimezoneOffset(); }
    }

  });
  mongoose.model('User', Users);
//}
