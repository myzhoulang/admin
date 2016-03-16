require.config({
	baseUrl: "/javascripts/",
	paths: {
		'$': 'vendor/jquery.min',
		'angular':'vendor/angular.min',
		'angular-route':'vendor/angular-route.min',
		'angular-ui-router':'vendor/angular-ui-router',
		'bootstrap':'./bootstrap',
		'app':'./app'
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