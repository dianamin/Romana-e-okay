/*
	Contains the Game controller
*/

app.controller('JocCtrl', function ($scope, $http) {
	// Life hears images (Zelda inspired):
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
		// For every wrong answer, we lose 1/4 heart
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
	$scope.score = 0;

	$scope.check = function() {
		// Checks given answer
		$scope.checked = true;
		if ($scope.GivenAnswer == $scope.questions[$scope.selectedQuestion].raspunsuri[$scope.questions[$scope.selectedQuestion].corect]) {
			$scope.correctAnswer = true;
			$scope.score += 50;
		}
		else {
			$scope.correctAnswer = false;
			$scope.loseLife();
			$scope.score -= 25;
			if ($scope.score < 0) $scope.score = 0;
		}
		showElement("QuestionRez");
	}

	$scope.chooseNextQuestion = function () {
		// Selects a random question that hasn't been selected before
		$scope.selectedQuestion = Math.floor(Math.random() * $scope.questionsNumber);
		while ($scope.asked[$scope.selectedQuestion]) $scope.selectedQuestion = Math.floor(Math.random() * $scope.questionsNumber);
		$scope.asked[$scope.selectedQuestion] = true;
		console.log($scope.selectedQuestion);
 		$scope.total--;
	}

	$scope.next = function() {
		// Next step in game
		if ($scope.total == 0) $scope.Won = true;
		hideElement("QuestionRez")
		$scope.checked = false;
 		$scope.chooseNextQuestion();
	}

	$scope.done = function() {
		return ($scope.Won || $scope.Lost);
	}

	// Getting data from .json file
	$http({method: 'GET', url: 'data/intrebari.json'}).success(function(data, status, headers, config) {
		$scope.questions = data;
		$scope.questionsNumber = $scope.questions.length;
		for (var i = 0; i < $scope.questionsNumber; i++) {
			$scope.asked[i] = false;
		}
 		$scope.chooseNextQuestion();
	});

	$scope.restart = function() {
		// Restarting the game
		$scope.selectedQuestion = 0;
		$scope.checked = false;
		$scope.correctAnswer = false;
		$scope.total = 15;
		$scope.score = 0;
		$scope.CurrentLife = 2;
		$scope.Lost = false;
		$scope.Won = false;

		for (var i = 0; i < $scope.questionsNumber; i++) {
			$scope.asked[i] = false;
		}
 		$scope.chooseNextQuestion();

		$scope.LifeLevel = [4, 4, 4];
	}

});