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
		'homeCtrl':'../router/home/homeCtrl',
		'indexCtrl':'../router/home/indexCtrl'
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