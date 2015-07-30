adminApp.controller('AdminListCtrl', function ($scope, $http) {
	$scope.list = [];
	$scope.chapters = [];

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		$scope.chapters = data;
	});
	
	$http({method: 'GET', url: '../php/get_lessons.php'}).success(function(data) {
		$scope.list = data;
	});


	$scope.anyChosenLesson = false;
	$scope.chosenLesson;
	
	$scope.choseLesson = function(lesson) {
		$scope.chosenLesson = lesson;
		$scope.anyChosenLesson = true;
	}

	$scope.delete = function(lesson) {
		if (confirm("Sigur vrei să ștergi lecția?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/delete_page.php',
		            data: ({ 'id': lesson.global_id, 'name': lesson.name }),
		            success: function(data) {
		            	location.reload();
					}
		        });
		    });
		}
	}
});

