app.controller('AlexandruLapusneanulCtrl', function($scope) {
	$scope.checkMagazine = function() {
		var s = $scope.Magazine;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "dacia literară");
		if (error <= acceptedError(s, "dacia literară")) {
			$scope.Magazine = "Dacia literară";
			return true;
		}
		return false;
	}

	$scope.checkLider = function() {
		var s = $scope.Lider;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "mihail kogălniceanu");
		if (error <= acceptedError(s, "mihail kogălniceanu")) {
			$scope.Lider = "Mihail Kogălniceanu";
			return true;
		}
		return false;
	}

	$scope.checkArticle = function() {
		var s = $scope.Article;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "introducție");
		if (error <= acceptedError(s, "introducție")) {
			$scope.Article = "Introducție";
			return true;
		}
		return false;
	}

	$scope.checkType = function() {
		return ($scope.Type == "proza");
	}

	$scope.checkPerspective = function() {
		return ($scope.Perspective == "obiectivizare");
	}
	$scope.checkCharactersNumber = function() {
		return ($scope.CharactersNumber == "multe");
	}

	$scope.checkName = function() {
		var s = $scope.Name;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "costache negruzzi");
		if (error <= acceptedError(s, "costache negruzzi")) {
			$scope.Name = "Costache Negruzzi";
			return true;
		}
		return false;
	}

	$scope.checkChapter1 = function() {
		var s = $scope.Chapter1;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "dacă voi nu mă vreți, eu vă vreu...");
		if (error <= acceptedError(s, "dacă voi nu mă vreți, eu vă vreu...")) {
			$scope.Chapter1 = "Dacă voi nu mă vreți, eu vă vreu...";
			return true;
		}
		return false;
	}

	$scope.checkChapter2 = function() {
		var s = $scope.Chapter2;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "ai să dai samă, doamnă!");
		if (error <= acceptedError(s, "ai să dai samă, doamnă!")) {
			$scope.Chapter2 = "Ai să dai samă, Doamnă!";
			return true;
		}
		return false;
	}

	$scope.checkChapter3 = function() {
		var s = $scope.Chapter3;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "capul lui moțoc vrem...");
		if (error <= acceptedError(s, "capul lui moțoc vrem...")) {
			$scope.Chapter3 = "Capul lui Moțoc vrem...";
			return true;
		}
		return false;
	}

	$scope.checkChapter4 = function() {
		var s = $scope.Chapter4;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "de mă voi scula, pre mulți am să popesc și eu...");
		if (error <= acceptedError(s, "de mă voi scula, pre mulți am să popesc și eu...")) {
			$scope.Chapter4 = "De mă voi scula, pre mulți am să popesc și eu...";
			return true;
		}
		return false;
	}

	$scope.checkConflict1 = function() {
		var s = $scope.Conflict1;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "domnitor");
		if (error <= acceptedError(s, "domnitor")) {
			$scope.Conflict1 = "Domnitor";
			return true;
		}
		return false;
	}

	$scope.checkConflict2 = function() {
		var s = $scope.Conflict2;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "boieri");
		if (error <= acceptedError(s, "boieri")) {
			$scope.Conflict2 = "Boieri";
			return true;
		}
		return false;
	}

	$scope.checkConflict3 = function() {
		var s = $scope.Conflict3;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "Moțoc");
		if (error <= acceptedError(s, "Moțoc")) {
			$scope.Conflict3 = "Moțoc";
			return true;
		}
		return false;
	}

	$scope.checkConflict4 = function() {
		var s = $scope.Conflict4;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "mulțime");
		if (error <= acceptedError(s, "mulțime")) {
			$scope.Conflict4 = "Mulțime";
			return true;
		}
		error = getLevenshteinDistance(s, "popor");
		if (error <= acceptedError(s, "popor")) {
			$scope.Conflict4 = "Popor";
			return true;
		}
		return false;
	}

	$scope.checkConflict5 = function() {
		var s = $scope.Conflict5;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "ruxanda");
		if (error <= acceptedError(s, "ruxanda")) {
			$scope.Conflict5 = "Doamna Ruxanda";
			return true;
		}
		error = getLevenshteinDistance(s, "doamna ruxanda");
		if (error <= acceptedError(s, "doamna ruxanda")) {
			$scope.Conflict5 = "Doamna Ruxanda";
			return true;
		}
		return false;
	}

	$scope.checkCharacterization1 = function() {
		var s = $scope.Characterization1;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "direct");
		if (error <= acceptedError(s, "direct")) {
			$scope.Characterization1 = "direct";
			return true;
		}
		return false;
	}

	$scope.checkCharacterization2 = function() {
		var s = $scope.Characterization2;
		if (s == undefined) return false;
		s = s.toLowerCase();
		var error = getLevenshteinDistance(s, "indirect");
		if (error <= acceptedError(s, "indirect")) {
			$scope.Characterization2 = "indirect";
			return true;
		}
		return false;
	}
});

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