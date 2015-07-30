adminApp.controller('CreatePageCtrl', function ($scope, $http, $routeParams) {
	$scope.lesson = {
		"name": "",
		"author": "",
		"type": "",
		"img": "",
		"chapterId": "1",
		"content": '',
	};

	$scope.chapters = [];
	$scope.lessons = [];

	$scope.error = "";

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		$scope.chapters = data;
		editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
		    lineNumbers: true,
		    mode:  "xml"
		});
		$('.CodeMirror').resizable({
			resize: function() {
				editor.setSize($(this).width(), $(this).height());
			}
		});
	});


	$http({method: 'GET', url: '../php/get_lessons.php'}).success(function(data) {
		$scope.lessons = data;
	});


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
	

	$scope.save = function() {
		$scope.error = "";
		var pageName;
		$scope.lesson.content = editor.getValue();
		alert($scope.lesson.content);

		if (!$scope.checkText($scope.lesson.name)) $scope.error += "Nu ai completat corect numele operei. ";
		else {
			var l = $scope.lessons.length;
			var unique = true;
			pageName = "partials/creations/" + $scope.lesson.name.replace(/\s/g, '').toLowerCase();
			var currentPageName;
			for (var i = 0; i < l && unique; i++) {
				if ($scope.lessons[i].page == pageName) unique = false;
				if ($scope.lessons[i].name == $scope.lesson.name) unique = false;
			}
			if (unique == false) $scope.error += "Opera există deja. "
		}
		if (!$scope.checkText($scope.lesson.author)) $scope.error += "Nu ai completat corect autorul operei. ";
		if (!$scope.checkText($scope.lesson.type)) $scope.error += "Nu ai completat corect genul operei. ";
		if (!$scope.checkText($scope.lesson.img)) $scope.error += "Nu pus linkul imaginii corespunzătoare operei. ";
		if (!$scope.checkText($scope.lesson.content)) $scope.error += "Nu ai completat conținutul lecției. ";

		if ($scope.error != "") return;
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/save_page.php',
		            data: ({
		            		'new_content': $scope.lesson.content,
		            		'new_chapter': $scope.lesson.chapterId,
		            		'new_img': $scope.lesson.img,
		            		'new_type': $scope.lesson.type,
		            		'new_name': $scope.lesson.name,
		            		'new_author': $scope.lesson.author,
		            		'new_page': pageName
		            	}),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!");
		            	else window.location.href = "#/lessons";
					}
		        });
		    });
		}
	}

	$scope.cancel = function() {
		$scope.editedPage = editor.getValue();
		if (confirm("Sigur vrei sa renunți la modificări?")) {
			window.location.href = "#/lessons";
		}
	}

});