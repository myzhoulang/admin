define(['app'], function(app){
	// searchResult-ctrl
	app.registerController('searchResultCtrl', ['$scope', function($scope){

	}]);

	//notFoundCtrl
	app.registerController('notFoundCtrl', ['$scope', '$state', function($scope, $state){
		$scope.f = {};
		$scope.search = function(){
			$state.go('home.otherPages.searchResult', { q: $scope.f.q });
		};
	}]);
});