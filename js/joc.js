app.controller('JocCtrl', function ($scope, $http) {
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
	$scope.Won = false;

	$scope.loseLife = function() {
		$scope.LifeLevel[$scope.CurrentLife]--;
		if ($scope.LifeLevel[$scope.CurrentLife] == 0) $scope.CurrentLife--;
		if ($scope.CurrentLife == -1) $scope.Lost = true;
	}

	$scope.selectedQuestion = 0;
	$scope.questionsNumber = 0;
	$scope.questions;
	$scope.checked = false;
	$scope.correctAnswer = false;
	$scope.asked = new Array();
	$scope.total = 15;

	$scope.check = function() {
		$scope.checked = true;
		if ($scope.GivenAnswer == $scope.questions[$scope.selectedQuestion].raspunsuri[$scope.questions[$scope.selectedQuestion].corect])
			$scope.correctAnswer = true;
		else {
			$scope.correctAnswer = false;
			$scope.loseLife();
		}
		showElement("QuestionRez");
	}

	$scope.chooseNextQuestion = function () {
		$scope.selectedQuestion = Math.floor(Math.random() * $scope.questionsNumber);
		while ($scope.asked[$scope.selectedQuestion]) $scope.selectedQuestion = Math.floor(Math.random() * $scope.questionsNumber);
		$scope.asked[$scope.selectedQuestion] = true;
		console.log($scope.selectedQuestion);
 		$scope.total--;
		if ($scope.total == 0) $scope.Won = true;
	}

	$scope.next = function() {
		hideElement("QuestionRez")
		$scope.checked = false;
 		$scope.chooseNextQuestion();
	}

	$scope.done = function() {
		return ($scope.Won || $scope.Lost);
	}

	$http({method: 'GET', url: 'data/intrebari.json'}).success(function(data, status, headers, config) {
		$scope.questions = data;
		$scope.questionsNumber = $scope.questions.length;
		for (var i = 0; i < $scope.questionsNumber; i++) {
			$scope.asked[i] = false;
		}
 		$scope.chooseNextQuestion();
	});

});