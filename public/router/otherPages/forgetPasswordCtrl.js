/**
 * Created by up on 2016/5/6.
 */
define(['app'], function(app){
  app.registerController('forgetPasswordCtrl', ['$scope', '$state', function($scope, $state){
    angular.extend($scope, {
      goIndex: function(){
        $state.go('home.index');
      }
    })
  }]);
});
