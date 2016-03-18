define(['app'], function(app){
  console.log(app)
  app.registerController('loginCtrl', ['$scope', '$state', function($scope, $state){
    angular.extend($scope, {
      login: function(){
        $state.go('home.index')
      }
    })
  }])
});