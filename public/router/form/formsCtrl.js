/**
 * Created by up on 2016/5/6.
 */
define(['app', 'dropzone','summernote-js'], function(app, dropzone){
  app.registerController('basicFormCtrl', ['$scope', function($scope){}]);

  app.registerController('fileUploadCtrl', ['$scope', function($scope){

  }]);

  app.registerController('textEditorCtrl', ['$scope', function($scope){
    angular.extend($scope, {
      code:'',
      getCode: function(){
        console.log($scope.code);
      }
    })
  }]);
});