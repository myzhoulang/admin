define(['app'], function(app){
  console.log(app)
  app.registerController('loginCtrl', ['$scope', '$state', function($scope, $state){
    angular.extend($scope, {
      login: function(data){
        // login.login(data)
        $state.go('home.index')
      }
    })
  }])
});