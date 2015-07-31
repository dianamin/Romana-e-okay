/*
	Contains questions files and operations for admin view.
*/

adminApp.controller('QuestionsCtrl', function ($scope, $http) {
	//inits CodeMirror editor
	var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
	    lineNumbers: true,
	    mode:  "javascript"
	});

	$scope.list = [];
	
	$http({method: 'GET', url: '../php/get_lessons.php'}).success(function(data) {
		//gets lessons from database
		$scope.list = data;
	});


	$scope.chosenLesson = {};
	$scope.anyChosenLesson = false;
	$scope.content;
	
	$scope.chooseLesson = function() {
		//display chosen lesson questions file if the user is logged in as admin
		$scope.anyChosenLesson = true;
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: '../php/get_questions_file.php',
	            data: ({ 'id': $scope.chosenLesson.global_id }),
	            success: function(data) {
	            	if (data == ':(') alert("Nu ai permisiunea necesară!"); //if user is not logged in as admin
	            	else {
		            	$scope.content = data; //else set editor value to questions file content
		            	editor.setValue(data);
					}
				}
	        });
	    });
	}

	$scope.saveQuestions = function() {
		//save questions file content if the user is logged in as admin and is sure about it
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$scope.content = editor.getValue();
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_questions_file.php',
		            data: ({ 'id': $scope.chosenLesson.global_id, 'content': $scope.content }),
		            success: function(data) {
		            	if (data == ':(') alert("Nu ai permisiunea necesară!"); //id user is not logged in as admin
		            	else {
			            	location.reload(); //else reload page
						}
					}
		        });
		    });
		}
	}
});

