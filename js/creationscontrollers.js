app.controller('ChiritaCtrl', function($scope) {
	$scope.checkConflict1 = function() {
		var s = $scope.Conflict1;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "chirița");
		if (error <= acceptedError(s, "chirița")) {
			$scope.Conflict1 = "Chirița";
			return true;
		}
		return false;
	}

	$scope.checkConflict2 = function() {
		var s = $scope.Conflict2;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "bârzoi");
		if (error <= acceptedError(s, "bârzoi")) {
			$scope.Conflict2 = "Bârzoi";
			return true;
		}
		return false;
	}

	$scope.checkConflict3 = function() {
		var s = $scope.Conflict3;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "luluța");
		if (error <= acceptedError(s, "luluța")) {
			$scope.Conflict3 = "Luluța";
			return true;
		}
		return false;
	}

	$scope.checkConflict4 = function() {
		var s = $scope.Conflict4;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "leonaș");
		if (error <= acceptedError(s, "leonaș")) {
			$scope.Conflict4 = "Leonaș";
			return true;
		}
		return false;
	}

	$scope.checkCity = function() {
		var s = $scope.City;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "iași");
		if (error <= acceptedError(s, "iași")) {
			$scope.City = "Iași";
			return true;
		}
		return false;
	}

	$scope.checkTeacher = function() {
		var s = $scope.Teacher;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "șarl");
		if (error <= acceptedError(s, "șarl")) {
			$scope.Teacher = "Șarl";
			return true;
		}
		return false;
	}

	$scope.checkLanguage = function() {
		var s = $scope.Language;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "franceza");
		if (error <= acceptedError(s, "franceza")) {
			$scope.Language = "franceza";
			return true;
		}
		return false;
	}

	$scope.checkName = function() {
		var s = $scope.Name;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "luluța");
		if (error <= acceptedError(s, "luluța")) {
			$scope.Name = "Luluța";
			return true;
		}
		return false;
	}
});

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