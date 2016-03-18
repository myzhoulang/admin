/**
 * 创建app 模块 并在这里配置路由 最后返回这个模块
 */

define(['angular', '$'], function(angular, $){
  var app = angular.module('app', ['ngRoute', 'ui.router']);
  app.run([
    '$rootScope', 
    '$state', 
    '$stateParams', 
    function( $rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }]);

  // 将 controllerProvider 挂载到app 上
  app.config(['$controllerProvider', function($controllerProvider) {
    app.registerController = $controllerProvider.register;
  }]);
  
  // 配置路由
  app.config([
    '$httpProvider', 
    '$locationProvider', 
    '$urlRouterProvider',
    '$stateProvider',
    function($httpProvider, $locationProvider, $urlRouterProvider, $stateProvider){
      $locationProvider.html5Mode(true);
      $urlRouterProvider.when("/", "/login");
      
      // 登录页面
      $stateProvider
        .state('login', {
          url:'/login',
          templateUrl:'/router/login/login.tpl.html',
          controller: 'loginCtrl',
          resolve: {
            loadCtrl: ['$q',function ($q){
              var defer = $q.defer();
              require(["loginCtrl"], function() {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })
        .state('home', {
          abstract: true,
          templateUrl:'/router/home/home.tpl.html',
          controller: 'homeCtrl',
          resolve: {
              loadCtrl: ['$q',function ($q){
                var defer = $q.defer();
                require(["homeCtrl"], function() {
                  defer.resolve()
                });
                return defer.promise;
              }]
            }
        })
      .state('home.index', {
        url:'/index',
        templateUrl:'/router/home/index.tpl.html',
        controller: 'indexCtrl',
        resolve: {
            loadCtrl: ['$q',function ($q){
              var defer = $q.defer();
              require(["indexCtrl"], function() {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
      })
      .state('home.metrics', {
        url:'/metrics',
        templateUrl:'/router/metrics/metrics.tpl.html',
        controller:'metricsCtrl',
        resolve: {
          loadCtrl:['$q', function($q){
            var defer = $q.defer();
            require(["metricsCtrl"], function(){
              defer.resolve()
            });
            return defer.promise;
          }]
        }
      })
      .state('home.widgets', {
        url:'/widgets',
        templateUrl:'/router/widgets/widgets.tpl.html',
        controller:'widgetsCtrl',
        resolve: {
          loadCtrl:['$q', function($q){
            var defer = $q.defer();
            require(["widgetsCtrl"], function(){
              defer.resolve()
            });
            return defer.promise;
          }]
        }
      })
  }]);
  
  $(document).ready(function() {
	  angular.bootstrap(document, ['app']);
	});
  return app;
});