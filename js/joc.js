app.controller('JocCtrl', function ($scope) {
	$scope.heartImg = [
		"img/joc/heart_empty.png",
		"img/joc/heart_25.png",
		"img/joc/heart_50.png",
		"img/joc/heart_75.png",
		"img/joc/heart_full.png"
	]
	$scope.LifeLevel = [4, 4, 4];

	$scope.CurrentLife = 2;
	$scope.Lost = false;

	$scope.LoseLife = function() {
		$scope.LifeLevel[$scope.CurrentLife]--;
		if ($scope.LifeLevel[$scope.CurrentLife] == 0) $scope.CurrentLife--;
		if ($scope.CurrentLife == -1) $scope.Lost = true;
	}
});