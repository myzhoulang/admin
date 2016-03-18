define(['app'], function(app){
  app.registerController('homeCtrl', ['$scope', '$state', function($scope, $state){
    console.log($state)
    angular.extend($scope, {
      login: function(){
        alert('login')
      }
    })
  }])
});