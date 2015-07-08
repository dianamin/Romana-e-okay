/*
	Contains the Game controller
*/


app.factory('GameFactory', function ($http) {
	var allData = [[]];
	/*
	for (var i = 0; i < pages.length; i++) {
		idChapter = pages[i].id;
		if (pages[i].category == "lesson") {
			a = pages[i].creations;
			for (var j = 0; j < a.length; j++) {
				idLesson = a[j].id;
				fileName = idChapter + "a" + idLesson;
				console.log(fileName);
				$http({method: 'GET', url: 'data/questions/' + fileName + '.json'}).success(function(data, status, headers, config) {
					allData[fileName] = data;
					console.log(fileName, data);
				});
			}
		}
	}*/

	var read = function(page, lesson) {
		if (lesson == -1) {
			page--;
			while(page >= 0 && pages[page].category != "lesson") page--;
			if (page < 0) return;
			lesson = pages[page].creations.length - 1;
		}

		var fileName = pages[page].id + "a" + pages[page].creations[lesson].id;
		$http({method: 'GET', url: 'data/questions/' + fileName + '.json'}).success(function(data, status, headers, config) {
			allData[fileName] = data;
			read(page, lesson - 1);
		});
	}
	read(pages.length, -1);

	return {
		getQuestions: function(id) {
			return allData[id];
		}
	}
});



app.controller('JocCtrl', function ($scope, $http, GameFactory) {
	// Life hears images (Zelda inspired):
	$scope.heartImg = [
		"img/joc/heart_empty.png",
		"img/joc/heart_25.png",
		"img/joc/heart_50.png",
		"img/joc/heart_75.png",
		"img/joc/heart_full.png"
	] 

	$scope.Chapters = pages;
	$scope.SelectedChapter = "";
	$scope.SelectedLessons = [];
	$scope.Lost = false;
	$scope.Won = false;

	$scope.selectedQuestion = 0;
	$scope.questionsNumber = 0;
	$scope.questions = [];
	$scope.checked = false;
	$scope.correctAnswer = false;
	$scope.asked = new Array();
	$scope.total = 15;
	$scope.score = 0;
	$scope.started = false;
	
	$scope.LifeLevel = [];
	$scope.maxHeart = 4;

	$scope.Lifes;
	$scope.CurrentLife;
	$scope.Lost = false;
	$scope.Won = false;

	$scope.errors = "";

	$scope.init = function() {
		$scope.selectedQuestion = 0;
		$scope.questionsNumber = 0;
		$scope.questions = [];
		$scope.checked = false;
		$scope.correctAnswer = false;
		$scope.asked = new Array();
		$scope.total = 15;
		$scope.score = 0;
		$scope.started = false;
		$scope.LifeLevel = [];
		$scope.Lost = false;
		$scope.Won = false;
	}


	$scope.StartGame = function() {
		var len = $scope.SelectedLessons.length;
		$scope.errors = "";

		if ($scope.SelectedChapter == "") $scope.errors = "Nu ai ales perioada! ";
		if (len == 0) $scope.errors += "Nu ai ales operele!";

		if ($scope.errors != "") return;

		$scope.init();

		for (var i = 0; i < len; i++) {
			var id = $scope.SelectedChapter + "a" + $scope.SelectedLessons[i];
			$scope.questions = $scope.questions.concat(GameFactory.getQuestions(id))
		}
		$scope.questionsNumber = $scope.questions.length;
		for (var i = 0; i < $scope.questionsNumber; i++) $scope.asked[i] = false;
		$scope.started = true;

		$scope.total = Math.min($scope.questionsNumber, 15);

		$scope.Lifes = Math.max(Math.floor($scope.total / 5), 1);
		$scope.CurrentLife = $scope.Lifes - 1;
		for (var i = 0; i < $scope.Lifes; i++) $scope.LifeLevel.push($scope.maxHeart);  

 		$scope.chooseNextQuestion();
	}

	$scope.loseLife = function() {
		// For every wrong answer, 1/4 heart is lost
		$scope.LifeLevel[$scope.CurrentLife]--;
		if ($scope.LifeLevel[$scope.CurrentLife] == 0) $scope.CurrentLife--;
		if ($scope.CurrentLife == -1) $scope.Lost = true;
		console.log($scope.CurrentLife);
	}
	

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
 		$scope.total--;
	}

	$scope.next = function() {
		// Next step in game
		if ($scope.total == 0)	$scope.Won = true;
		hideElement("QuestionRez")
		$scope.checked = false;
 		if ($scope.total != 0) $scope.chooseNextQuestion();
	}

	$scope.done = function() {
		return ($scope.Won || $scope.Lost);
	}

	// Getting data from .json file
	

	$scope.restart = function() {
		// Restarting the game
		$scope.started = false;
	}
});