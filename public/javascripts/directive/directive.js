/**
 * Created by mk on 2016/5/10.
 */


define(['$', 'app'], function($, app){
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
      },
      link: function(scope, element, attrs){
        $(element).dropzone({ url: "/api/upload" });
      }
    }
  });

  // 编辑器
  app.directiveProvider('summernote', ['$timeout', function($timeout){
    return {
      restrict:'AE',
      replace:true,
      require:['?ngModel'],
      scope:{
        summernoteConfig: '=config',
        editable: '=',
        editor: '=',
        init: '&onInit',
        enter: '&onEnter',
        focus: '&onFocus',
        blur: '&onBlur',
        paste: '&onPaste',
        keyup: '&onKeyup',
        keydown: '&onKeydown',
        change: '&onChange',
        imageUpload: '&onImageUpload',
        mediaDelete: '&onMediaDelete'
      },
      controller:function($scope, $element, $attrs){
        var summernoteConfig = angular.copy($scope.summernoteConfig) || {};
        var currentElement;

        // 配置 属性
        if (angular.isDefined($attrs.height)) { summernoteConfig.height = +$attrs.height; }
        if (angular.isDefined($attrs.minHeight)) { summernoteConfig.minHeight = +$attrs.minHeight; }
        if (angular.isDefined($attrs.maxHeight)) { summernoteConfig.maxHeight = +$attrs.maxHeight; }
        if (angular.isDefined($attrs.placeholder)) { summernoteConfig.placeholder = $attrs.placeholder; }
        if (angular.isDefined($attrs.focus)) { summernoteConfig.focus = true; }
        if (angular.isDefined($attrs.airmode)) { summernoteConfig.airMode = true; }
        if (angular.isDefined($attrs.dialogsinbody)) { summernoteConfig.dialogsInBody = true; }
        if (angular.isDefined($attrs.lang)) {
          if (!angular.isDefined($.summernote.lang[$attrs.lang])) {
            throw new Error('"' + $attrs.lang + '" lang file must be exist.');
          }
          summernoteConfig.lang = $attrs.lang;
        }

        // 配置方法
        summernoteConfig.callbacks = summernoteConfig.callbacks || {};

        // 处理用户回调函数
        if (angular.isDefined($attrs.onInit)) {
          summernoteConfig.callbacks.onInit = function(evt) {
            $scope.init({evt:evt});
          };
        }
        if (angular.isDefined($attrs.onEnter)) {
          summernoteConfig.callbacks.onEnter = function(evt) {
            $scope.enter({evt:evt});
          };
        }
        if (angular.isDefined($attrs.onFocus)) {
          summernoteConfig.callbacks.onFocus = function(evt) {
            $scope.focus({evt:evt});
          };
        }
        if (angular.isDefined($attrs.onPaste)) {
          summernoteConfig.callbacks.onPaste = function(evt) {
            $scope.paste({evt:evt});
          };
        }
        if (angular.isDefined($attrs.onKeyup)) {
          summernoteConfig.callbacks.onKeyup = function(evt) {
            $scope.keyup({evt:evt});
          };
        }
        if (angular.isDefined($attrs.onKeydown)) {
          summernoteConfig.callbacks.onKeydown = function(evt) {
            $scope.keydown({evt:evt});
          };
        }
        if (angular.isDefined($attrs.onImageUpload)) {
          summernoteConfig.callbacks.onImageUpload = function(files) {
            $scope.imageUpload({files:files, editable: $scope.editable});
          };
        }
        if (angular.isDefined($attrs.onMediaDelete)) {
          summernoteConfig.callbacks.onMediaDelete = function(target) {
            // make new object that has information of target to avoid error:isecdom
            var removedMedia = {attrs: {}};
            removedMedia.tagName = target[0].tagName;
            angular.forEach(target[0].attributes, function(attr) {
              removedMedia.attrs[attr.name] = attr.value;
            });
            $scope.mediaDelete({target: removedMedia});
          };
        }

       

        $scope.activate = function(scope, element, ngModel){
          var updateNgModel = function(){
            var newValue = element.summernote('code');
            if(element.summernote('isEmpty')){
              newValue = '';
            }
            if(ngModel && ngModel.$viewValue !== newValue){
              $timeout(function(){
                ngModel.$setViewValue(newValue);
              },0);
            }
          }

          var originalOnChange = summernoteConfig.callbacks.onChange;
          summernoteConfig.callbacks.onChange = function(contents){
            $timeout(function(){
            if (element.summernote('isEmpty')) {
              contents = '';
            }
            updateNgModel();
            }, 0);

            if(angular.isDefined($attrs.onChange)){
              $scope.change({contents: contents, editable: $scope.editable});
            } else if(angular.isFunction(originalOnChange)){
              originalOnChange.apply(this, arguments);
            }
          }
          element.summernote(summernoteConfig);

          var editor$ = element.next('.note-editor'),
            unwatchNgModel;
          editor$.find('.note-toolbar').click(function() {
            updateNgModel();

            // sync ngModel in codeview mode
            if (editor$.hasClass('codeview')) {
              editor$.on('keyup', updateNgModel);
              if (ngModel) {
                unwatchNgModel = scope.$watch(function () {
                  return ngModel.$modelValue;
                }, function(newValue) {
                  editor$.find('.note-codable').val(newValue);
                });
              }
            } else {
              editor$.off('keyup', updateNgModel);
              if (angular.isFunction(unwatchNgModel)) {
                unwatchNgModel();
              }
            }
          });

          if (ngModel) {
            ngModel.$render = function() {
              if (ngModel.$viewValue) {
                element.summernote('code', ngModel.$viewValue);
              } else {
                element.summernote('empty');
              }
            };
          }
          if (angular.isDefined($attrs.editable)) {
            $scope.editable = editor$.find('.note-editable');
          }
          if (angular.isDefined($attrs.editor)) {
            $scope.editor = element;
          }
          currentElement = element;

          element.on('$destroy', function() {
            element.summernote('destroy');
            $scope.summernoteDestroyed = true;
          });
        };



        $scope.$on('$destroy', function () {
          if(!$scope.summernoteDestroyed){
            $element.summernote('destroy');
          }
        });
        
      },
      link: function(scope, element, attrs, ctrls){
        var ngModel = ctrls[0];
        var clearWatch = scope.$watch(function() { return ngModel.$viewValue; }, function(value) {
              clearWatch();
              // element.append(value);
              scope.activate(scope, $(element), ngModel);
            }, true);
      }
    }
  }]);

  // video
  app.directiveProvider('aVideo', function(){
    return {
      restrict:'AE',
      template:'<video class="video-js vjs-default-skin" controls preload="auto" data-setup="{}"></video>',
      link: function(scope, element, attrs){
        var src = attrs.src;
        var poster = attrs.poster;
        var parent = $(element).parent();
        var oVideoWrap;
        console.log(parent)
        $(element).find('video').attr({
          poster: poster
        }).append('<source src="'+src+'"></source>');
        var player = videojs(element.find('video')[0], { /* Options */ }, function() {
          console.log('Good to go!');

          oVideoWrap = $(element).find('.video-js');
          // console.log(parent.width())
          oVideoWrap.css({
            width: '100%',
            heigt: parent.width()
          })
          // this.play(); // if you don't trust autoplay for some reason
          // How about an event listener?
          this.on('ended', function() {
            console.log('awww...over so soon?');
          });
        });
      }
    }
  });
});
