/*
	Contains the Game controller
*/


app.factory('GameFactory', function ($http) {
	//gets questions from json files
	var allData = [[]];

	var read = function(index) {

		if (index == -1) return;

		var fileName = creations[index].global_id;
		$http({method: 'GET', url: 'json/questions/' + fileName + '.json'}).success(function(data, status, headers, config) {
			allData[fileName] = data;
			read(index - 1);
		});
	}

	read(creations.length - 1);

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
	$scope.Lessons = creations;
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
		//inits variables 
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
		//get lessons selected by user and inits game
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
 	
		var pos = $(window).scrollTop();
		$('html, body').animate({scrollTop: pos + 300}, 'slow');
	}

	$scope.addScore = function() {
		//adds score to database if user is logged in 
		if (userConnected == true) {
			$(function(){
	            $.ajax({
	                type: "POST",
	                url: 'php/add_score.php',
	                data: ({'id': userID, 'score': $scope.score}),
	                success: function(data) {
                    	document.getElementById('user-score').innerHTML = data;
	                }
	            });
	        });
		}
	}

	$scope.loseLife = function() {
		// For every wrong answer, 1/4 heart is lost
		$scope.LifeLevel[$scope.CurrentLife]--;
		if ($scope.LifeLevel[$scope.CurrentLife] == 0) $scope.CurrentLife--;
		if ($scope.CurrentLife == -1) {
			$scope.Lost = true;
			$scope.addScore();
		}
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
		if ($scope.total == 0 && $scope.score != 0)	{
			$scope.Won = true;
			$scope.addScore();
		}
		hideElement("QuestionRez")
		$scope.checked = false;
 		if ($scope.total != 0) $scope.chooseNextQuestion();
	}

	$scope.done = function() {
		//checks if game is finished
		return ($scope.Won || $scope.Lost);
	}
	

	$scope.restart = function() {
		// Restarting the game
		$scope.started = false;
	}
});