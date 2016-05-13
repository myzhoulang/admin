/**
 * Created by up on 2016/5/6.
 */

define(['app'], function(app){
  // register
  app.registerController('registerCtrl', ['$scope', 'register', function($scope, register){
    angular.extend($scope, {
      register: function(f){
        register.register(f).then(function(data){
          console.log(data)
        },function(err){
          console.log(err)
        })
      }
    });
  }]);
});