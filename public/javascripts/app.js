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
  app.config(['$controllerProvider', '$compileProvider', function ($controllerProvider, $compileProvider) {
    app.registerController = $controllerProvider.register;
    app.directiveProvider = $compileProvider.directive;
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

        // 注册
        .state('register', {
          url:'/register',
          templateUrl:'/router/otherPages/register.tpl.html',
          controller:'registerCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["registerCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })


        // 404
        .state('notFound', {
          url: '/notFound',
          templateUrl: '/router/otherPages/notFound.tpl.html',
          controller: 'notFoundCtrl',
          resolve: {
            loadCtrl: ['$q', function ($q) {
              var defer = $q.defer();
              require(["otherPagesCtrl"], function () {
                defer.resolve()
              });
              return defer.promise;
            }]
          }
        })

        // 500
        .state('serverError', {
          url:'/serverError',
          templateUrl:'/router/otherPages/serverError.tpl.html'
        })

        //Forget password
        .state('forgetPassword', {
          url:'/forgetPassword',
          templateUrl:'/router/otherPages/forgetPassword.tpl.html',
          controller:'forgetPasswordCtrl',
          resolve:{
            loadCtrl:['$q', function($q){
              var defer = $q.defer();

              require(['forgetPasswordCtrl'], function(){
                defer.resolve();
              });

              return defer.promise;
            }]
          }
        })

        // home
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

        //Form
        .state('home.forms', {
          absract: true,
          template:'<div ui-view=""></div>',
          resolve: {
            loadCtrl:['$q', function($q){
              var defer = $q.defer();
              require(['formsCtrl'], function(){
                defer.resolve();
              });
              return defer.promise;
            }]
          }
        })
        .state('home.forms.basicForm', {
          url:'/basicForm',
          controller:'basicFormCtrl',
          templateUrl:'/router/form/basicForm.tpl.html'
        })
        .state('home.forms.fileUpload', {
          url:'/fileUpload',
          controller:'fileUploadCtrl',
          templateUrl:'/router/form/fileUpload.tpl.html'
        })

        // App Views
        .state('home.AppViews', {
          absract: true,
          template:'<div ui-view></div>',
          resolve:{
            loadCtrl:['$q', function($q){
              var defer = $q.defer();
              require(['AppViewsCtrl'], function(){
                defer.resolve();
              })
              return defer.promise;
            }]
          }
        })
        .state('home.AppViews.contacts', {
          url:'/contacts',
          controller:'contactsCtrl',
          templateUrl:'/router/appViews/contacts.tpl.html'
        })
        .state('home.AppViews.faq', {
          url:'/faq',
          controller:'faqCtrl',
          templateUrl:'/router/appViews/faq.tpl.html'
        })
        .state('home.AppViews.projects', {
          url:'/projects',
          controller:'projectsCtrl',
          templateUrl:'/router/appViews/projects.tpl.html'
        })
        .state('home.AppViews.teamsBoard', {
          url:'/teamsBoard',
          controller:'teamsBoardCtrl',
          templateUrl:'/router/appViews/teamsBoard.tpl.html'
        })
        .state('home.AppViews.pinBoard', {
          url:'/pinBoard',
          controller:'pinBoardCtrl',
          templateUrl:'/router/appViews/pinBoard.tpl.html'
        })
        .state('home.AppViews.blog', {
          url:'/blog',
          controller:'blogCtrl',
          templateUrl:'/router/appViews/blog.tpl.html'
        })
        .state('home.AppViews.socialFeed', {
          url:'/socialFeed',
          controller:'socialFeedCtrl',
          templateUrl:'/router/appViews/socialFeed.tpl.html'
        })
        .state('home.AppViews.fileManager', {
          url:'/fileManager',
          controller:'fileManagerCtrl',
          templateUrl:'/router/appViews/fileManager.tpl.html'
        })
        .state('home.AppViews.issueList', {
          url:'/issueList',
          controller:'issueListCtrl',
          templateUrl:'/router/appViews/issueList.tpl.html'
        })
        .state('home.AppViews.article', {
          url:'/article/:id',
          controller:'articleCtrl',
          templateUrl:'/router/appViews/article.tpl.html'
        })

        //Other Pages
        .state('home.otherPages', {
          abstract: true,
          template:'<div ui-view=""></div>',
          resolve:{
            loadCtrl: ['$q', function($q){
              var defer = $q.defer();
              require(['otherPagesCtrl'], function(){
                defer.resolve();
              })
              return defer.promise;
            }]
          }
        })
        .state('home.otherPages.searchResult', {
          url:'/searchResult',
          controller:'searchResultCtrl',
          templateUrl:'/router/otherPages/searchResult.tpl.html'
        })

        //Miscellaneous
        .state('home.miscellaneous', {
          abstract: true,
          template:'<div ui-view=""></div>',
          resolve:{
            loadCtrl: ['$q', function($q){
              var defer = $q.defer();
              require(['miscellaneousCtrl'], function(){
                defer.resolve();
              })
              return defer.promise;
            }]
          }
        })
        .state('home.miscellaneous.timeline', {
          url:'/timeline',
          controller:'timelineCtrl',
          templateUrl:'/router/miscellaneous/timeline.tpl.html'
        })
        .state('home.miscellaneous.agileBoard', {
          url:'/agileBoard',
          controller:'agileBoardCtrl',
          templateUrl:'/router/miscellaneous/agileBoard.tpl.html'
        })
        .state('home.miscellaneous.forum', {
          url:'/forum',
          controller:'forumCtrl',
          templateUrl:'/router/miscellaneous/forum.tpl.html'
        })
        .state('home.miscellaneous.validation', {
          url:'/validation',
          controller:'validationCtrl',
          templateUrl:'/router/miscellaneous/validation.tpl.html'
        })
        .state('home.miscellaneous.chatView', {
          url:'/chatView',
          controller:'chatViewCtrl',
          templateUrl:'/router/miscellaneous/chatView.tpl.html'
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
        .state('home.ui.video', {
          url:'/video',
          controller:'videoCtrl',
          templateUrl:'/router/ui/video.tpl.html'
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
        .state('home.ui.icons', {
          url:'/icons',
          controller:'iconsCtrl',
          templateUrl:'/router/ui/icons.tpl.html'
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
        .state('home.products.orders', {
          url:'/orders',
          controller:'ordersCtrl',
          templateUrl:'/router/products/orders.tpl.html'
        })
    }]);

  $(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
  return app;
});