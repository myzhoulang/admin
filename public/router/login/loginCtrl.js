define(['app'], function(app){
  console.log(app)
  app.registerController('loginCtrl', ['$scope', '$state', function($scope, $state){
    $scope.f = {};
    angular.extend($scope, {
      login: function(data){
        // login.login(data)
        console.log('Logging in with:', data);
        $state.go('home.index')
      }
    })
  }])
});