require.config({
	baseUrl: "/javascripts/",
	paths: {
		'$': 'vendor/jquery',
		'angular':'vendor/angular',
		'angular-route':'vendor/angular-route',
		'angular-ui-router':'vendor/angular-ui-router',
		'bootstrap':'./bootstrap',
		'app':'./app',
		'loginCtrl': '../router/login/loginCtrl',
		'registerCtrl':'../router/otherPages/registerCtrl',
		'homeCtrl':'../router/home/homeCtrl',
		'indexCtrl':'../router/home/indexCtrl',
		'metricsCtrl':'../router/metrics/metricsCtrl',
		'widgetsCtrl': '../router/widgets/widgetsCtrl',
		'formsCtrl':'../router/form/formsCtrl',
		'AppViewsCtrl':'../router/appViews/AppViewsCtrl',
		'otherPagesCtrl':'../router/otherPages/otherPagesCtrl',
		'miscellaneousCtrl':'../router/miscellaneous/miscellaneousCtrl',
		'forgetPasswordCtrl':'../router/otherPages/forgetPasswordCtrl',
		'uiCtrl': '../router/ui/uiCtrl',
		'tablesCtrl':'../router/tables/tablesCtrl',
		'productsCtrl':'../router/products/productsCtrl'
	},
	shim:{
		'$':{
			exports:'$'
		},
		'angular': {
			exports:'angular'
		},
		'app':{
			deps: ['angular', 'angular-route', 'angular-ui-router']
		},
		'angular-route': {
			deps:['angular']
		},
		'angular-ui-router':{
			deps:['angular-route']
		}
	},

	deps: ['./bootstrap']
});