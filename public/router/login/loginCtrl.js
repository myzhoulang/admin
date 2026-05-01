define(['app'], function(app){
  console.log(app)
  app.registerController('loginCtrl', ['$scope', '$state', function($scope, $state){
    // Initialize scope object for form data to follow the "dot rule"
    $scope.f = {};

    angular.extend($scope, {
      login: function(data){
        // login.login(data)
        $state.go('home.index')
      }
    })
  }])
});
