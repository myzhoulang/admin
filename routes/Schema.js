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
      index: true,
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
      // ⚡ Bolt: Use function reference to ensure date is set at insertion time, not app start
      type: Date,
      default: Date.now
    },
    offset: {
      // ⚡ Bolt: Use function reference to ensure offset is calculated at insertion time
      type:Number,
      default: function() { return new Date().getTimezoneOffset(); }
    }

  });
  mongoose.model('User', Users);
//}
