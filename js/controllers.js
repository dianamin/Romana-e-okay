var app = angular.module('app', ['ngRoute']);

app.controller('PageChangeCtrl', function ($scope) {
	$scope.selected = 0;
	$scope.currentContext = context[0];
	$scope.Contexts = 5;
	$scope.chosenView = "none";

	$scope.hasLider = function() {
		return $scope.currentContext.lider != "-";
	}

	$scope.changePage = function(x) {
		if (x == 0) $scope.selected = 0;
		if (x > 0 && x <= $scope.Contexts) {
			$scope.selected = x;
			$scope.currentContext = context[x - 1];
			$scope.chosenView = "none";
		}
	}

	$scope.chooseView = function(x) {
		$scope.chosenView = x;
		showElement(x);
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


app.controller('AnswersInterbelicaCtrl', function ($scope) {
	$scope.Magazine = "";
	$scope.checkMagazine = function() {
		var s = $scope.Magazine;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "sburătorul");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "sburătorul")) {
			$scope.Magazine = "Sburătorul";
			return true;
		}
		return false;
	}

	$scope.Theory = "";
	$scope.checkTheory = function() {
		var s = $scope.Theory;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "imitației");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "imitației")) {
			$scope.Theory = "imitației";
			return true;
		}
		return false;
	}

	$scope.CharacteristicsNumber = 7;
	$scope.Characteristics = new Array($scope.CharacteristicsNumber);
	$scope.showCharacteristics = false;
	$scope.RightCharacteristics = false;
	$scope.TrueCharacteristics = [true, true, true, true, false, true];
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

	$scope.Period = "";
	$scope.checkPeriod = function() {
		var s = $scope.Period;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "interbelică");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "interbelică")) {
			$scope.Period = "interbelică";
			return true;
		}
		return false;
	}

	$scope.Characteristics2Number = 5;
	$scope.Characteristics2 = new Array($scope.Characteristics2Number);
	$scope.showCharacteristics2 = false;
	$scope.RightCharacteristics2 = false;
	$scope.TrueCharacteristics2 = [true, true, true, true, false];
	$scope.checkCharacteristics2 = function() {
		$scope.RightCharacteristics2 = true;
		for (var i = 0; i < $scope.Characteristics2Number; i++) {
			if (typeof $scope.Characteristics2[i] === "undefined") {
				if ($scope.TrueCharacteristics2[i] == true) $scope.RightCharacteristics2 = false;
			}
			else if ($scope.TrueCharacteristics2[i] != $scope.Characteristics2[i]) $scope.RightCharacteristics2 = false;
		}
		$scope.showCharacteristics2 = true;
		showElement("Characteristics2");

		return $scope.RightCharacteristics2;
	}
});


app.controller('AnswersPostbelicaCtrl', function ($scope) {
	$scope.Novel = "";
	$scope.checkNovel = function() {
		var s = $scope.Novel;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "moromeții");
		if (error == 0) return true;
		else if (error <= acceptedError(s, "moromeții")) {
			$scope.Novel = "Moromeții";
			return true;
		}
		return false;
	}

	$scope.CharacteristicsNumber = 6;
	$scope.Characteristics = new Array($scope.CharacteristicsNumber);
	$scope.showCharacteristics = false;
	$scope.RightCharacteristics = false;
	$scope.TrueCharacteristics = [true, true, false, true, true, false];
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

	$scope.checkGeneration = function() {
		return $scope.Generation == 80;
	}
});