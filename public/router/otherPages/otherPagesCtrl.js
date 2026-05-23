define(['app'], function(app){
	// searchResult-ctrl
	app.registerController('searchResultCtrl', ['$scope', function($scope){

	}]);

	//notFoundCtrl
	app.registerController('notFoundCtrl', ['$scope', '$state', function($scope, $state){
		$scope.f = {};
		$scope.search = function() {
			if ($scope.f.search) {
				$state.go('otherPages.searchResult', { query: $scope.f.search });
			}
		};
	}]);
});