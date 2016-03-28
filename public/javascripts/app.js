/**
 * 创建app 模块 并在这里配置路由 最后返回这个模块
 */

define(['angular', '$'], function (angular, $) {
  var app = angular.module('app', ['ngRoute', 'ui.router']);
  app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]);

  // 将 controllerProvider 挂载到app 上
  app.config(['$controllerProvider', function ($controllerProvider) {
    app.registerController = $controllerProvider.register;
  }]);

  // 配置路由
  app.config([
    '$httpProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    function ($httpProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.when("/", "/login");

      // 登录页面
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/router/login/login.tpl.html',
          controller: 'loginCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["loginCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })
        .state('home', {
          abstract: true,
          templateUrl: '/router/home/home.tpl.html',
          controller: 'homeCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["homeCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })
        .state('home.index', {
          url: '/index',
          templateUrl: '/router/home/index.tpl.html',
          controller: 'indexCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["indexCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })
        .state('home.metrics', {
          url: '/metrics',
          templateUrl: '/router/metrics/metrics.tpl.html',
          controller: 'metricsCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["metricsCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })
        .state('home.widgets', {
          url: '/widgets',
          templateUrl: '/router/widgets/widgets.tpl.html',
          controller: 'widgetsCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["widgetsCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })

        // UI
        .state('home.ui', {
          abstract: true,
          template:'<div ui-view=""></div>',
          resolve:{
            loadCtrl:['$q', function($q){
              var defer = $q.defer();
              require(['uiCtrl'], function(){
                defer.resolve();
              });
              return defer.promise;
            }]
          }
        })
        .state('home.ui.buttons', {
          url: '/uiButtons',
          controller:'buttonsCtrl',
          templateUrl: '/router/ui/buttons.tpl.html'
        })
        .state('home.ui.draggablePanels', {
          url:'/draggablePanels',
          controller:'draggablePanelsCtrl',
          templateUrl:'/router/ui/draggablePanels.tpl.html'
        })
        .state('home.ui.panels', {
          url:'/panels',
          controller:'panelsCtrl',
          templateUrl:'/router/ui/panels.tpl.html'
        })
        .state('home.ui.tabs', {
          url:'/tabs',
          controller:'tabsCtrl',
          templateUrl:'/router/ui/tabs.tpl.html'
        })
        .state('home.ui.notifs', {
          url:'/notifs',
          controller:"notifsCtrl",
          templateUrl:'/router/ui/notifs.tpl.html'
        })
        .state('home.ui.badgesLabels', {
          url:'/badgesLabels',
          controller:'badgesLabelsCtrl',
          templateUrl:'/router/ui/badgesLabels.tpl.html'
        })

        // tables
        .state('home.tables', {
          abstract: true,
          template:'<div ui-view></div>',
          resolve: {
            loadCtrl:['$q', function($q){
              var defer = $q.defer();
              require(['tablesCtrl'], function(){
                defer.resolve();
              });
              return defer.promise;
            }]
          }
        })
        .state('home.tables.staticTables', {
          url:'/staticTables',
          controller:'staticTablesCtrl',
          templateUrl:'/router/tables/staticTables.tpl.html'
        })
        .state('home.tables.dataTables', {
          url:'/dataTables',
          controller: 'dataTablesCtrl',
          templateUrl:'/router/tables/dataTables.tpl.html'
        })
        .state('home.tables.fooTable', {
          url:'/fooTable',
          controller:'fooTableCtrl',
          templateUrl:'/router/tables/fooTable.tpl.html'
        })

        //products
        .state('home.products', {
          abstract: true,
          template:'<div ui-view></div>',
          resolve:{
            loadCtrl: ['$q', function($q){
              var defer = $q.defer();
              require(['productsCtrl'], function(){
                defer.resolve();
              });
              return defer.promise;
            }]
          }
        })
        .state('home.products.productsGrid', {
          url:'/productsGrid',
          controller:'productsGridCtrl',
          templateUrl:'/router/products/productsGrid.tpl.html'
        })
        .state('home.products.productsList', {
          url:'/productsList',
          controller:'productsListCtrl',
          templateUrl:'/router/products/productsList.tpl.html'
        })
        .state('home.products.product', {
          url:'/product/:id',
          controller:'prodcutCtrl',
          templateUrl:'/router/products/product.tpl.html'
        })
    }]);

  $(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
  return app;
});