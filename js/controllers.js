var app = angular.module('app', ['ngRoute']);

app.controller('PageChangeCtrl', function ($scope) {
	$scope.selected = 0;
	$scope.currentContext = context[0];
	$scope.Contexts = 5;
	$scope.chosenView = "none";
	$scope.SelectedCreation = -1;

	$scope.hasLider = function() {
		return $scope.currentContext.lider != "-";
	}

	$scope.changePage = function(x) {
		if (x == 0) $scope.selected = 0;
		$scope.SelectedCreation = -1;
		if (x > 0 && x <= $scope.Contexts) {
			$scope.selected = x;
			$scope.currentContext = context[x - 1];
			$scope.chosenView = "none";
			$scope.SelectedCreation = -1;
		}
	}

	$scope.chooseView = function(x) {
		$scope.chosenView = x;
		$scope.SelectedCreation = -1;
		showElement(x);
	}

	$scope.openCreation = function(id) {
		console.log(creations[$scope.selected - 1][id].page);
		$scope.SelectedCreation = creations[$scope.selected - 1][id].page;
	}

});

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
})
