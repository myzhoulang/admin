var mongoose = require('mongoose'),
    db;

exports.connectionMongo = function(){
  mongoose.connect('mongodb://127.0.0.1:27017/jd');
  db = mongoose.connection;
  db.on('open', function(){
    console.log('链接打开')
  })
}

function closeConnection(){
  mongoose.connection.close(function(){
    console.log('关闭数据库链接')
  })
}

exports.closeConnection = closeConnection

// 程序退出
process.on('SIGINT', function(){
  closeConnection()
  process.exit(0)
});


exports.mongoose = mongoose;