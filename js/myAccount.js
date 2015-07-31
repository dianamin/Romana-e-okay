/*
	Controls logged in user progress page.
*/

app.controller('myAccountCtrl', function ($scope, $http) {
	$scope.userConnected = userConnected;
	$scope.lessons = progress;

	$scope.unread = function(lesson) {
		//if user wants to mark a read page as unread
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/mark_as_unread.php',
	            data: ({'lesson': lesson.id}),
	            success: function(data) {
					lesson.read = 0;
					$scope.lessons[lesson.index] = lesson;
	            }
	        });
	    });
	}
});
