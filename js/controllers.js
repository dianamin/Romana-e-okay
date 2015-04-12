var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: '/pages/pasoptism.html'})
});


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


app.controller('AnswersPasoptismCtrl', function($scope) {
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

	$scope.ProseWritersNumber = 5;
	$scope.ProseWriter = new Array($scope.ProseWritersNumber);
	$scope.CorrectProseWriters = [false, true, false, true, false];
	$scope.showProseWriters = false;
	$scope.RightProseWriters = true;
	$scope.checkProseWriters = function() {
		$scope.RightProseWriters = true;
		for (var i = 0; i < $scope.ProseWritersNumber; i++) {
			if (typeof $scope.ProseWriter[i] === "undefined") {
				if ($scope.CorrectProseWriters[i] == true) $scope.RightProseWriters = false;
			}
			else if ($scope.ProseWriter[i] != $scope.CorrectProseWriters[i]) $scope.RightProseWriters = false;
		}
		$scope.showProseWriters = true;
		showElement("ProseWriters");
		return $scope.RightProseWriters;
	}

	$scope.PoetryWritersNumber = 5;
	$scope.PoetryWriter = new Array($scope.PoetryWritersNumber);
	$scope.CorrectPoetryWriters = [true, false, true, true, true];
	$scope.showPoetryWriters = false;
	$scope.RightPoetryWriters = true;
	$scope.checkPoetryWriters = function() {
		$scope.RightPoetryWriters = true;
		for (var i = 0; i < $scope.PoetryWritersNumber; i++) {
			if (typeof $scope.PoetryWriter[i] === "undefined") {
				if ($scope.CorrectPoetryWriters[i] == true) $scope.RightPoetryWriters = false;
			}
			else if ($scope.PoetryWriter[i] != $scope.CorrectPoetryWriters[i]) $scope.RightPoetryWriters = false;
		}
		$scope.showPoetryWriters = true;
		showElement("PoetryWriters");
		return $scope.RightPoetryWriters;
	}

	$scope.DramaWritersNumber = 5;
	$scope.DramaWriter = new Array($scope.DramaWritersNumber);
	$scope.CorrectDramaWriters = [true, true, false, false, true];
	$scope.showDramaWriters = false;
	$scope.RightDramaWriters = true;
	$scope.checkDramaWriters = function() {
		$scope.RightDramaWriters = true;
		for (var i = 0; i < $scope.DramaWritersNumber; i++) {
			if (typeof $scope.DramaWriter[i] === "undefined") {
				if ($scope.CorrectDramaWriters[i] == true) $scope.RightDramaWriters = false;
			}
			else if ($scope.DramaWriter[i] != $scope.CorrectDramaWriters[i]) $scope.RightDramaWriters = false;
		}
		$scope.showDramaWriters = true;
		showElement("DramaWriters");
		return $scope.RightDramaWriters;
	}
});

app.controller('AnswersJunimeaCtrl', function ($scope) {
	$scope.checkCrossingPhases = function() {
		return $scope.CrossingPhases == "ardere";
	}
	$scope.Intersection = new Array(5);
	$scope.CommonIdeas = [true, false, true, true, false];
	$scope.checkIntersection = function() {
		for (var i = 0; i < 5; i++) {
			if (typeof $scope.Intersection[i] === "undefined") {
				if ($scope.CommonIdeas[i] == true) return false;
			}
			else if ($scope.Intersection[i] != $scope.CommonIdeas[i]) return false;
		}
		return true;
	}

	$scope.checkCity = function() {
		var s = $scope.City;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "iași");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "iași")) {
			$scope.City = "Iași";
			return true;
		}
		return false;
	}
	$scope.checkYear = function() {	
		return $scope.Year == 1863;
	}

	$scope.ClassicsNumber = 7;
	$scope.Classics = new Array(7);
	$scope.TrueClassics = [true, false, true, false, false, true, true];
	$scope.showClassics = false;
	$scope.RightClassics = false;
	
	$scope.checkClassics = function() {
		$scope.RightClassics = true;
		for (var i = 0; i < $scope.ClassicsNumber; i++) {
			if (typeof $scope.Classics[i] === "undefined") {
				if ($scope.TrueClassics[i] == true) $scope.RightClassics = false;
			}
			else if ($scope.TrueClassics[i] != $scope.Classics[i]) $scope.RightClassics = false;
		}
		$scope.showClassics = true;
		showElement("Classics");
		return $scope.RightClassics;
	}

	$scope.CharacteristicsNumber = 7;
	$scope.Characteristic = new Array($scope.CharacteristicsNumber);
	$scope.showCharacteristics = false;
	$scope.RightCharacteristics = false;
	$scope.TrueCharacteristics = [true, false, true, true, true, false, true];
	$scope.checkCharacteristics = function() {
		$scope.RightCharacteristics = true;
		for (var i = 0; i < $scope.CharacteristicsNumber; i++) {
			if (typeof $scope.Characteristic[i] === "undefined") {
				if ($scope.TrueCharacteristics[i] == true) $scope.RightCharacteristics = false;
			}
			else if ($scope.TrueCharacteristics[i] != $scope.Characteristic[i]) $scope.RightCharacteristics = false;
		}
		$scope.showCharacteristics = true;
		showElement("Characteristics");

		return $scope.RightCharacteristics;
	}

	$scope.Direction = "";
	$scope.checkDirection = function() {
		var s = $scope.Direction;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "nouă");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "nouă")) {
			$scope.Direction = "nouă";
			return true;
		}
		return false;
	}

	$scope.VolumeName = "";
	$scope.checkVolumeName = function() {
		var s = $scope.VolumeName;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "critice");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "critice")) {
			$scope.VolumeName = "Critice";
			console.log("yay");
			return true;
		}
		return false;
	}
});

app.controller('AnswersPosteminescianismCtrl', function ($scope) {
	$scope.CharacteristicsNumber = 7;
	$scope.Characteristics = new Array($scope.CharacteristicsNumber);
	$scope.showCharacteristics = false;
	$scope.RightCharacteristics = false;
	$scope.TrueCharacteristics = [true, false, true, false, true, false, true];
	$scope.checkCharacteristics = function() {
		$scope.RightCharacteristics = true;
		for (var i = 0; i < $scope.CharacteristicsNumber; i++) {
			if (typeof $scope.Characteristics[i] === "undefined") {
				if ($scope.TrueCharacteristics[i] == true) $scope.RightCharacteristics = false;
			}
			else if ($scope.TrueCharacteristics[i] != $scope.Characteristics[i]) $scope.RightCharacteristics = false;
		}
		$scope.showCharacteristics = true;
		showElement("Characteristics");

		return $scope.RightCharacteristics;
	}

	$scope.Current = "";
	$scope.checkCurrent = function() {
		var s = $scope.Current;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "tradiționalismul");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "tradiționalismul")) {
			$scope.Current = "tradiționalismul";
			return true;
		}
		return false;
	}
});
