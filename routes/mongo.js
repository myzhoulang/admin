var mongoose = require('mongoose'),
    db;

exports.connectionMongo = function(){
  mongoose.connect('mongodb://127.0.0.1:27017/jd', { server: { connectTimeoutMS: 1000 } });
  db = mongoose.connection;
  db.on('open', function(){
    console.log('链接打开')
  })
  db.on('error', function(err) {
    console.error('MongoDB connection error:', err.message);
  });
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