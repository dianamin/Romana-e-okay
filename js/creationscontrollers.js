/*
	Answers for creations. Elegantly written.
*/


app.controller('GeneralCheckerCtrl', function($scope) {
	$scope.checkText = function(model, properText) {
		//gets Levenshtein Distance of correct answer and answer given by user to check if given answer is correct
		var s = $scope[model];
		var correctText = properText.toLowerCase();
		if (s == undefined) return false;
		s = s.toLowerCase();

		var error = getLevenshteinDistance(s, correctText);
		if (error <= acceptedError(s, correctText)) {
			$scope[model] = properText;
			return true;
		}
		return false;
	}

	$scope.checkRadio = function(model, correctValue) {
		//checks radio input
		return $scope[model] == correctValue;
	}

});

app.controller('HarapAlbCtrl', function($scope) {
	//checks checkboxes input
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
