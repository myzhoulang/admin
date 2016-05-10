/**
 * Created by mk on 2016/5/10.
 */


define(['app'], function(app){
  console.log(app)
  app.directiveProvider('dropzone',function(){
    return {
      restrict:'AE',
      replace:true,
      template:'<form action="/file-upload"'+
                  'class="dropzone" enctype="multipart/form-data">'+
                  '<div class="dz-default dz-message">'+
                    '<span>Drop files here to upload</span>'+
                  '</div>'+
                '</form>',
      controller:function($scope, $element, $attrs){
        alert(1)
      },
      link: function(scope, element, attrs){
        $(element).dropzone({ url: "/api/upload" });
      }
    }
  });
});
