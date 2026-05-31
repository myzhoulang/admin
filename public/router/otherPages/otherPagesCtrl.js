define(['app'], function(app){
	// searchResult-ctrl
	app.registerController('searchResultCtrl', ['$scope', function($scope){

	}]);

	//notFoundCtrl
	app.registerController('notFoundCtrl', ['$scope', '$state', function($scope, $state){
		$scope.f = {
			query: '',
			search: function(){
				$state.go('home.otherPages.searchResult');
			}
		};
	}]);
});