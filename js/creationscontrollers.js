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
});
