var app = angular.module('app', []);

app.controller('PageChangeCtrl', function ($scope) {
	$scope.selected = 1;
	$scope.currentContext = context[0];
	$scope.Contexts = 5;

	$scope.hasLider = function() {
		return $scope.currentContext.lider != "-";
	}

	$scope.changePage = function(x) {
		if (x <= $scope.Contexts) {
			$scope.selected = x;
			$scope.currentContext = context[x - 1];
		}
	}
});