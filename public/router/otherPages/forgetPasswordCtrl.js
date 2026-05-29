/**
 * Created by up on 2016/5/6.
 */
define(['app'], function(app){
  app.registerController('forgetPasswordCtrl', ['$scope', '$state', function($scope, $state){
    $scope.f = {};
    angular.extend($scope, {
      goIndex: function(f){
        console.log('Sending reset email to:', f.email);
        $state.go('home.index');
      }
    });
  }]);
});
