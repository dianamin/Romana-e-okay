var editor;

/*
	Editing pages controller in admin view.
*/

adminApp.controller('EditPageCtrl', function ($scope, $http, $routeParams) {
	$scope.lesson = {};
	$scope.error = "";

	$scope.lessonId =  $routeParams.lessonId; 
	//gets edited lesson id from url
	
	$scope.chapters = [];

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		//gets chapters from database
		$scope.chapters = data;
	});
	

	$http.post('../php/page_content.php' , $scope.lessonId)
    .success(function(data){
    	//gets page .html file content if logged in as admin
		$scope.lesson = data;
		if (data == ":(") alert("Nu ai permisiunea necesară!");
		
		$scope.$apply();
		//inits CodeMirror editor
		editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
		    lineNumbers: true,
		    mode:  "xml"
		});
		$('.CodeMirror').resizable({
			resize: function() {
				editor.setSize($(this).width(), $(this).height());
			}
		});
    })


	$scope.checkText = function(s) {
		//Checks if there are enough letters in string s to be considered valid
		var l = s.length;
		s = s.toLowerCase();
		var letters = 0;
		for (var i = 0; i < l; i++) {
			var code = s.charCodeAt(i);
			if ((code >= 97) && (code <= 122)) letters++;
		}
		if (letters <= 3) return false;
		return true;
	}

	$scope.edit = function() {
		//checks if input is valid
		$scope.lesson.current = editor.getValue();

		if (!$scope.checkText($scope.lesson.name)) $scope.error += "Nu ai completat corect numele operei. ";
		if (!$scope.checkText($scope.lesson.author)) $scope.error += "Nu ai completat corect autorul operei. ";
		if (!$scope.checkText($scope.lesson.type)) $scope.error += "Nu ai completat corect genul operei. ";
		if (!$scope.checkText($scope.lesson.img)) $scope.error += "Nu pus linkul imaginii corespunzătoare operei. ";
		if (!$scope.checkText($scope.lesson.current)) $scope.error += "Nu ai completat conținutul lecției. ";

		if ($scope.error != "") return; //shows errors if somethink is valid
		//else
		if (confirm("Sigur vrei să salvezi modificările?")) {
			//if user is sure about saving changes and is logged in as admin
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_page.php',
		            data: ({
		            		'new_content': $scope.lesson.current, 
		            		'lesson_id': $scope.lessonId, 
		            		'new_chapter': $scope.lesson.chapterId,
		            		'new_img': $scope.lesson.img,
		            		'new_type': $scope.lesson.type,
		            		'new_name': $scope.lesson.name,
		            		'new_author': $scope.lesson.author
		            	}),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!"); //if user is not logged in as admin
		            	else window.location.href = "#/lessons"; //else reloading page
					}
		        });
		    });
		}
	}

	$scope.cancel = function() {
		//cancel editing
		if (confirm("Sigur vrei sa renunți la modificări?")) {
			window.location.href = "#/lessons";
		}
	}

});
