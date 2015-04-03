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

var showElement = function(id) {
	document.getElementById(id).setAttribute("style", "animation: fade-in 1s; -webkit-animation: fade-in 1s");
}
var hideElement = function(id) {
	document.getElementById(id).setAttribute("style", "animation: fade-out 1s; -webkit-animation: fade-out 1s");
}

var getLevenshteinDistance = function(string1, string2) {
	var n = string1.length;
	var m = string2.length;

	var distance = [];

	for (var i = 0; i <= n; i++) distance[i] = new Array(m + 1);

	distance[0][0] = 0;

	for (var i = 0; i <= m; i++) distance[0][i] = i;
	for (var i = 0; i <= n; i++) distance[i][0] = i;

	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= m; j++) {
			if (string1[i - 1] == string2[j - 1]) distance[i][j] = distance[i - 1][j - 1];
			else distance[i][j] = Math.min(distance[i - 1][j], distance[i - 1][j - 1], distance[i][j - 1]) + 1;
		}
	}


	return distance[n][m];
}



var acceptedError = function(string1, string2) {
	var n = string1.length;
	var m = string2.length;

	var d = getLevenshteinDistance(string1, string2);

	var epsilon = Math.min(n, m) / 2;
	return epsilon;
}

getLevenshteinDistance("inceputul", "inceputul");

app.controller('AnswersCtrl', function($scope) {
	$scope.checkRevYear = function() {
		return $scope.RevYear == 1848;
	}
	$scope.checkPosition = function() {
		var s = $scope.Position;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "inceputul");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "începutul")) {
			$scope.Position = "începutul";
			return true;
		}

		error = getLevenshteinDistance(s, "startul");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "startul")) {
			$scope.Position = "startul";
			return true;
		}
		return false;
	}
	$scope.checkCharacteristics = function() {
		if ($scope.CharacteristicCheck != "Coexistența curentelor literare") return false;
		showElement("characteristic1");
		return true;
	}
});