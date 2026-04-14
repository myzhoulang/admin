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
      unique: true // ⚡ Bolt: Added unique index for O(log N) lookups during registration check (prevents O(N) scan)
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
      default: Date.now // ⚡ Bolt: Use function reference to ensure unique timestamps per document creation
    },
    offset: {
      type:Number,
      default:new Date().getTimezoneOffset()
    }

  });
  mongoose.model('User', Users);
//}
