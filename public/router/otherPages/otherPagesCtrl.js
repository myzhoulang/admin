define(['app'], function(app){
	// searchResult-ctrl
	app.registerController('searchResultCtrl', ['$scope', function($scope){

	}]);

	//notFoundCtrl
	app.registerController('notFoundCtrl', ['$scope', '$state', function($scope, $state){
		$scope.search = function(searchQuery){
			$state.go('home.otherPages.searchResult', {query: searchQuery});
		};
	}]);
});
