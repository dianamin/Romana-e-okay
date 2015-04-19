app.controller('HarapAlbCtrl', function($scope) {
	$scope.CharacteristicsNumber = 5;
	$scope.Characteristics = new Array($scope.CharacteristicsNumber);
	$scope.showCharacteristics = false;
	$scope.RightCharacteristics = false;
	$scope.TrueCharacteristics = [true, false, true, true, true];
	$scope.checkCharacteristics = function() {
		$scope.RightCharacteristics = true;
		for (var i = 0; i < $scope.CharacteristicsNumber; i++) {
			if (typeof $scope.Characteristics[i] === "undefined") {
				if ($scope.TrueCharacteristics[i] == true) $scope.RightCharacteristics = false;
			}
			else if ($scope.TrueCharacteristics[i] != $scope.Characteristics[i]) $scope.RightCharacteristics = false;
		}
		$scope.showCharacteristics = true;
		showElement("FairytaleCharacteristics");

		return $scope.RightCharacteristics;
	}
});

app.controller('GeneralCheckerCtrl', function($scope) {
	$scope.checkText = function(model, properText) {
		var s = $scope[model];
		var correctText = properText.toLowerCase();
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, correctText);
		if (error <= acceptedError(s, correctText)) {
			$scope[model] = properText;
			return true;
		}
		return false
	}

	$scope.checkRadio = function(model, correctValue) {
		return $scope[model] == correctValue;
	}

/*

	$scope.checkMultipleChoice = function(number, chosen, correct, id) {
		$scope.allCorect = true;
		for (var i = 0; i < $scope.number; i++) {
			if (typeof $scope.choosen[i] === "undefined") {
				if ($scope.correct[i] == true) $scope.allCorect = false;
			}
			else if ($scope.choosen[i] != $scope.correct[i]) $scope.allCorect = false;
		}
		showElement(id);
		return $scope.allCorect;
	}
*/


});