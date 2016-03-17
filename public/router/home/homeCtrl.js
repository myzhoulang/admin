define(['app'], function(app){
  console.log(app)
  app.registerController('homeCtrl', ['$scope', '$state', function($scope, $state){
    console.log($state)
    angular.extend($scope, {
      login: function(){
        alert('login')
      }
    })
  }])
});