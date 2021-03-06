/*	
	Gets list of lessons for admin view.
	Contains lessons delete operation.
*/
adminApp.controller('AdminListCtrl', function ($scope, $http) {
	$scope.list = [];
	$scope.chapters = [];

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		$scope.chapters = data;
	});
	
	$http({method: 'GET', url: '../php/get_lessons.php'}).success(function(data) {
		$scope.list = data;
		var l = $scope.list.length;
		for (var i = 0; i < l; i++) {
			var img = $scope.list[i].img;
			if (img.substring(0, 4) != "http") $scope.list[i].img = "../" + img;
		}
	});


	$scope.anyChosenLesson = false;
	$scope.chosenLesson;
	
	$scope.chooseLesson = function(lesson) {
		/* current lesson - for showing lesson details */
		$scope.chosenLesson = lesson;
		$scope.anyChosenLesson = true;
	}

	$scope.delete = function(lesson) {
		/* deleting lesson if user is logged in as admin */
		if (confirm("Sigur vrei să ștergi lecția?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/delete_page.php',
		            data: ({ 'id': lesson.global_id, 'name': lesson.name }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!");
		            	else location.reload(); 
					}
		        });
		    });
		}
	}
});

