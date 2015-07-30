adminApp.controller('QuestionsCtrl', function ($scope, $http) {
	var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
	    lineNumbers: true,
	    mode:  "javascript"
	});

	$scope.list = [];
	
	$http({method: 'GET', url: '../php/get_lessons.php'}).success(function(data) {
		$scope.list = data;
		var l = $scope.list.length;
		for (var i = 0; i < l; i++) {
			var img = $scope.list[i].img;
			if (img.substring(0, 4) != "http") $scope.list[i].img = "../" + img;
		}
	});


	$scope.chosenLesson = {};
	$scope.anyChosenLesson = false;
	$scope.content;
	
	$scope.chooseLesson = function() {
		$scope.anyChosenLesson = true;
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: '../php/get_questions_file.php',
	            data: ({ 'id': $scope.chosenLesson.global_id }),
	            success: function(data) {
	            	if (data == ':(') alert("Nu ai permisiunea necesară!");
	            	else {
		            	$scope.content = data;
		            	editor.setValue(data);
					}
				}
	        });
	    });
	}

	$scope.saveQuestions = function() {
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$scope.content = editor.getValue();
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_questions_file.php',
		            data: ({ 'id': $scope.chosenLesson.global_id, 'content': $scope.content }),
		            success: function(data) {
		            	if (data == ':(') alert("Nu ai permisiunea necesară!");
		            	else {
			            	location.reload();
						}
					}
		        });
		    });
		}
	}
});

