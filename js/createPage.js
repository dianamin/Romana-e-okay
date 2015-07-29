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

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		$scope.chapters = data;
		$scope.$apply();
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
	

	$scope.save = function() {
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$scope.lesson.content = editor.getValue();
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
		            		'new_author': $scope.lesson.author
		            	}),
		            success: function(data) {
		            	alert(data);
		            	//window.location.href = "#/";
					}
		        });
		    });
		}
	}

	$scope.cancel = function() {
		$scope.editedPage = editor.getValue();
		if (confirm("Sigur vrei sa renunți la modificări?")) {
			window.location.href = "#/";
		}
	}

});