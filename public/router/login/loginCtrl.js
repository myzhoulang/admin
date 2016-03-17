define(['app'], function(app){
  console.log(app)
  app.registerController('loginCtrl', ['$scope', function($scope){
    angular.extend($scope, {
      login: function(){
        alert('login')
      }
    })
  }])
});